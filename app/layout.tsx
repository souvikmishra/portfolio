import NavBar from './components/NavBar';
import './globals.css';

export const metadata = {
  title: 'avgweb.dev',
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
