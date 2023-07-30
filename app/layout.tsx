import './globals.css';

import NavBar from './components/NavBar';

export const metadata = {
  title: 'Souvik Mishra | avgweb.dev',
  description: 'Cliche web portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
