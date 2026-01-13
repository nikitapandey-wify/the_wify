'use client';

import { createStore } from 'zustand';

export interface FallbackStoreState {}

function createAppWrapperStore() {
 return createStore<FallbackStoreState>(() => ({}));
}

const fallbackStore = createAppWrapperStore();

export { fallbackStore };
