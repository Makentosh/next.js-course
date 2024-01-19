import React from 'react';
import './globals.css';

export const metadata = {
  title: 'Vasyl`s blog',
  description: 'Created by Vasyl Batih'
};

export default function RootLayout ({ children }: { children: React.ReactNode }) {
  return (
      <html lang="en">
      <body className={ `dark:bg-slate-800` }>
      { children }
      </body>
      </html>
  );
}
