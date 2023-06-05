import React from 'react';
import './globals.css';
import Navbar from '@/app/components/Navbar';
import MyProfilePic from '@/app/components/MeProfilePic';

export const metadata = {
  title: 'Vasyl`s blog',
  description: 'Created by Vasyl Batih'
};

export default function RootLayout ({ children }: { children: React.ReactNode }) {
  return (
      <html lang="en">
      <body className={ `dark:bg-slate-800` }>
      <Navbar/>
      <MyProfilePic/>
      { children }
      </body>
      </html>
  );
}
