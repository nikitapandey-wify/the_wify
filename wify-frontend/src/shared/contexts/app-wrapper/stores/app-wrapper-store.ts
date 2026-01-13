"use client";

import { UserDetails } from "@/shared/types/user";
import { createStore } from "zustand";

export interface UserState {
  showOnboarding: boolean;
}

export interface AppWrapperStoreState {
  // User data
  userDetails: UserDetails | null;

  // Loading states
  isAppLoading: boolean;
  isRefetching: boolean;

  // Actions
  setUserDetails: (userDetails: UserDetails | null) => void;

  setIsAppLoading: (loading: boolean) => void;
  setRefetching: (refetching: boolean) => void;
}

export interface AppWrapperStoreInitialState {
  isAnonymousMode?: boolean;
}

export default function createAppWrapperStore(
  initialState?: AppWrapperStoreInitialState
) {
  return createStore<AppWrapperStoreState>((set) => ({
    // Initial state
    userDetails: null,

    isAppLoading: true,
    isRefetching: false,

    // Actions
    setUserDetails: (userDetails) => {
      set((state: AppWrapperStoreState) => ({
        ...state,
        userDetails,
      }));
    },

    setIsAppLoading: (loading) => {
      set((state: AppWrapperStoreState) => ({
        ...state,
        isAppLoading: loading,
      }));
    },

    setRefetching: (refetching) => {
      set((state: AppWrapperStoreState) => ({
        ...state,
        isRefetching: refetching,
      }));
    },
  }));
}