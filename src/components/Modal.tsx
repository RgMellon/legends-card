import { ReactNode } from 'react';

type ModalProps = {
  children: ReactNode;
  handleClose: () => void;
};

export function Modal({ children, handleClose }: ModalProps) {
  return (
    <section>
      <div
        onClick={handleClose}
        className="w-full fixed right-0 top-0 flex bottom-0 transform backdrop-blur-md transition-all duration-300 ease-in-out -translate-x-1/2 left-1/2 z-10"
        style={{ backgroundColor: 'rgba(54, 52, 71, 0.8)' }}
      />

      <div className="mx-auto max-w-screen-md absolute top-[30%] left-0 right-0 z-30">
        <div className="relative flex flex-col w-full outline-none  rounded-md p-0">
          {children}
        </div>
      </div>
    </section>
  );
}
