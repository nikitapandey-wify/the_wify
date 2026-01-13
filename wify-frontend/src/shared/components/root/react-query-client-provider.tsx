"use client";
import { getQueryClient } from '@/shared/utils/get-query-client';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';

function ReactQueryClientProvider({ children }: { children: React.ReactNode }) {
 const queryClient = getQueryClient();

 return (
  <QueryClientProvider client={queryClient}>
   {children}
   <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
 );
}

export default ReactQueryClientProvider;