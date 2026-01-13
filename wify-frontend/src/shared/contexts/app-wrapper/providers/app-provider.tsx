"use client";

import { useQueryClient } from "@tanstack/react-query";
import { StoreApi } from "zustand";

import { createContext, useContext, useMemo } from "react";

import { usePathname, useRouter } from "next/navigation";

import ApiError from "@/shared/components/api-error";
import AppLoader from "@/shared/components/ui/app-loader";

import { computeUserState } from "../app-wrapper-helper";
import createAppWrapperStore, {
  AppWrapperStoreState,
} from "../stores/app-wrapper-store";
import { getUseStoreHookSafe } from "@/shared/utils/store";

interface ContextValue {
  store: StoreApi<AppWrapperStoreState>;
  // refetchUserDetails: () => Promise<void>;
}

const AppContext = createContext<ContextValue>({} as ContextValue);

export default function AppProvider({
  children,
  isAnonymous = false,
}: {
  children: React.ReactNode;
  isAnonymous?: boolean;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const queryClient = useQueryClient();

  // Create store with initial state
  const store = useMemo(
    () =>
      createAppWrapperStore({
        isAnonymousMode: isAnonymous,
      }),
    []
  );

  // Mutation for fetching user details
  // const fetchUserDetailsMutation = useMutation({
  // 	mutationFn: getUserDetails,
  // 	onMutate: () => {
  // 		store.getState().setIsAppLoading(true);
  // 	},
  // 	onSuccess: (userDetailsData) => {
  // 		handleUserDetailsSuccess(userDetailsData, store);
  // 	},
  // 	onError: () => {
  // 		store.getState().setIsAppLoading(false);
  // 		store.getState().setRefetching(false);
  // 	},
  // });

  // Mutation for updating default workspace
  // const updateDefaultWorkspaceMutation = useMutation({
  // 	mutationFn: updateDefaultWorkspace,
  // 	onSuccess: (_, variables) => {
  // 		handleWorkspaceUpdateSuccess(variables, queryClient, store);
  // 	},
  // });

  // Memoized callbacks
  // const handleRefetchUserDetails = useCallback(async () => {
  // 	store.getState().setRefetching(true);
  // 	await fetchUserDetailsMutation.mutateAsync();
  // }, [store]);

  return (
    <AppContext.Provider
      value={{
        store,
        // refetchUserDetails: handleRefetchUserDetails,
      }}
    >
      <AppContent
        // isError={fetchUserDetailsMutation?.isError}
        store={store}
      >
        {children}
      </AppContent>
    </AppContext.Provider>
  );
}

// Separate component for the conditional rendering logic
function AppContent({
  children,
  isError,
  store,
}: {
  children: React.ReactNode;
  isError?: boolean;
  store: StoreApi<AppWrapperStoreState>;
}) {
  const router = useRouter();
  const isAppLoading = useAppStore((state) => state.isAppLoading);

  const userEmail = useAppStore((state) => state.userDetails?.email);

  // const refetchUserDetails = useAppCallbacks(
  //   (state) => state.refetchUserDetails
  // );

  const userState = useMemo(() => {
    const userDetails = store.getState().userDetails;
    if (userDetails) return computeUserState(userDetails);
  }, [isAppLoading]);

  if (isAppLoading) {
    return (
      <main className="flex h-screen w-screen items-center justify-center overflow-hidden">
        <AppLoader />
      </main>
    );
  }

  // Error state
  if (isError || !userEmail) {
    return (
      <main className="h-screen w-screen overflow-hidden">
        <ApiError />
      </main>
    );
  }

  // if (userState?.showOnboarding) {
  //   return (
  //     <UserOnboarding
  //       source={workspaceSelector.source}
  //       defaultScreen={userState.defaultScreen}
  //       allowedScreens={
  //         hasSubmissions || workspaces?.length > 0
  //           ? [OnboardingScreen.USER_NAME]
  //           : undefined
  //       }
  //       onComplete={() => {
  //         refetchUserDetails();
  //       }}
  //     />
  //   );
  // }

  return children;
}

type Selector<TState, TSelected> = (state: TState) => TSelected;

export function useAppCallbacks<TSelected>(
  selector: Selector<Omit<ContextValue, "store">, TSelected>
): TSelected {
  const context = useContext(AppContext);
  const outerValue = selector(context);

  return outerValue as TSelected;
}

export const useAppStore = getUseStoreHookSafe<
  AppWrapperStoreState,
  ContextValue
>(AppContext);