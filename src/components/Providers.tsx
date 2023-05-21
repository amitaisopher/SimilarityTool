'use client';
import React, { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';
import { SessionProvider } from 'next-auth/react';

const Providers = ({ children }: {children: ReactNode}) => {
  return (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
        <SessionProvider>{children}</SessionProvider>
        {/* Allow more height on mobile devices */}
        <div className='h-40 md:hidden'></div>
    </ThemeProvider>
  );
};

export default Providers;