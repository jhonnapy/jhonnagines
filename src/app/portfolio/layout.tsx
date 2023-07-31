import classNames from 'classnames';
import type { Metadata } from 'next';

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
        'font-quicksand bg-main xl:max-w-screen-xl max-w-screen-lg mx-auto text-slate-700'
      )}
    >
      {children}
    </div>
  );
}
