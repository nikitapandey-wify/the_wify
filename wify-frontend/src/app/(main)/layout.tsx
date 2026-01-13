import AppProvider from '@/shared/contexts/app-wrapper/providers/app-provider';
import React from 'react';

async function MainLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
  <AppProvider >
   {children}
  </AppProvider>
 );
}

export default MainLayout;