import classNames from 'classnames';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import Row from '@/components/layouts/row';
import NavIconButton from './_components/nav-icon-btn';
import HomeIcon from './_components/icons/home-icon';
import BloggerIcon from './_components/icons/blogger-icon';
import AppsIcon from './_components/icons/apps-icon';
import Stack from '@/components/layouts/stack';

const font = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Blogs | Paolo Julian',
  description: 'Blog list of Paolo Julian',
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div
        className={classNames(
          font.className,
          'bg-main max-w-screen-xl mx-auto text-slate-700',
          'relative'
        )}
      >
        <Row>
          <aside className='sticky top-0 left-0 h-screen border-r border-slate-400'>
            <nav className='flex flex-col space-y-2 justify-center h-full p-2'>
              <NavIconButton name='Home'>
                <HomeIcon className='text-slate-700' />
              </NavIconButton>
              <NavIconButton name='Blogs'>
                <BloggerIcon className='text-slate-700' />
              </NavIconButton>
              <NavIconButton name='Components'>
                <AppsIcon className='text-slate-700' />
              </NavIconButton>
            </nav>
          </aside>
          <div className='flex-1'>{children}</div>
          <div className='hidden lg:block w-[300px] h-screen sticky top-0 right-0 border-l border-slate-400'>
            <Stack>
              <div className='py-8 relative'>
                <div className='w-[110%] absolute -left-5 bottom-0 border-b border-b-slate-400'></div>
                <Row className='justify-end items-center space-x-4'>
                  <Stack className='items-end'>
                    <h4 className='font-medium'>Paolo Vincent Julian</h4>
                    <h5 className='text-sm text-slate-500'>
                      Software Engineer
                    </h5>
                  </Stack>
                  <div className='w-12 h-12 bg-gray-700'></div>
                </Row>
              </div>
            </Stack>
          </div>
        </Row>
      </div>
    </>
  );
}
