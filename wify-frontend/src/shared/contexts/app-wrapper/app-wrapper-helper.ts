import { StoreApi } from "zustand";

import { AppWrapperStoreState } from "@/shared/contexts/app-wrapper/stores/app-wrapper-store";

// Helper function to compute user state based on user details
export const computeUserState = (userDetails: any) => {
  const isNameEmpty = !userDetails.firstName;

  return {
    showOnboarding: false,
  };
};

// Handle successful user details fetch
export const handleUserDetailsSuccess = (
  userDetailsData: any,
  store: StoreApi<AppWrapperStoreState>
) => {
  // Set user details and workspaces
  store.getState().setUserDetails(userDetailsData);

  // Set loading states
  store.getState().setIsAppLoading(false);
  store.getState().setRefetching(false);
};