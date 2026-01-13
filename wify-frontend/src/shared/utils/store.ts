import { StoreApi, useStore } from 'zustand';

import { useContext } from 'react';

import { fallbackStore } from '@/shared/store/fallback-store';

type Selector<TState, TSelected> = (state: TState) => TSelected;

export const getUseStoreHookSafe = <TState, TContext extends { store: StoreApi<TState> }>(
	context: React.Context<TContext>
) => {
	return function <TSelected>(selector: Selector<TState, TSelected>): TSelected {
		const contextValue = useContext(context);

		const netStore = (
			!!contextValue?.store?.getState ? contextValue?.store : fallbackStore
		) as StoreApi<TState>;

		return useStore(netStore || ({} as StoreApi<TState>), selector);
	};
};