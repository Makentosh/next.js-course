import React from 'react';
import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/app/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'GAGAGAGAGa',
//   description: 'Generated bagagag',
// };

export default function RootLayout ({ children }: { children: React.ReactNode }) {
  return (
      <html lang="en">
        <body className={ `${inter.className} bg-slate-800` }>
          <Navbar/>
          { children }
        </body>
      </html>
  );
}
