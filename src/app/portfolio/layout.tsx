import classNames from 'classnames';
import './page.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

const font = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Paolo Julian',
  description: 'Paolo Vincent Julian portfolio website',
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={classNames(
        font.className,
        'bg-main max-w-screen-lg mx-auto text-slate-700'
      )}
    >
      {children}
    </div>
  );
}
