import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Alex Dietz',
  description: 'Personal website',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: Readonly<RootLayoutProps>) => (
  <html lang="en">
    <body>{children}</body>
  </html>
);

export default RootLayout;
