'use client';
import Row from '@/components/layouts/row';
import Stack from '@/components/layouts/stack';
import React, { FunctionComponent, useEffect } from 'react';
import classNames from 'classnames';

export type AppModalProps = {
  onClose: () => void;
  isOpen: boolean;
  children: React.ReactNode;
};

const AppModal: FunctionComponent<AppModalProps> = ({
  onClose,
  isOpen,
  children,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal--open');
    } else {
      document.body.classList.remove('modal--open');
    }
  }, [isOpen]);

  return (
    // container
    <div
      className={classNames(
        'fixed inset-0 w-screen h-screen z-50',
        'transition-opacity backdrop-blur-sm',
        isOpen ? 'opacity-1' : 'opacity-0 pointer-events-none'
      )}
    >
      {/* overlay */}
      <div className='absolute w-full h-full inset-0 bg-slate-900/30'></div>

      {/* modal */}
      <Stack
        className={classNames(
          'absolute inset-0 max-w-screen-lg w-full h-full mx-auto transition-transform',
          isOpen ? 'translate-y-0' : 'translate-y-full'
        )}
      >
        {/* exit */}
        <Row className='py-2 w-full bg-transparent justify-end'>
          <button onClick={onClose}>
            <span className='text-slate-50'>exit</span>
          </button>
        </Row>
        {/* content */}
        <Stack className='flex-1 bg-main w-full px-12 py-12 items-center overflow-y-scroll space-y-12'>
          {children}
        </Stack>
      </Stack>
    </div>
  );
};

export default AppModal;
