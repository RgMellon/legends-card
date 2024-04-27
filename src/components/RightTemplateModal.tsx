import { useModalRight } from '../hooks/useModalRight';

type RightTemplateModalProps = {
  children: React.ReactNode;
};

export function RightTemplateModal({ children }: RightTemplateModalProps) {
  const { isOpen, handleToggle } = useModalRight();
  return isOpen ? (
    <div
      className="w-full fixed right-0 top-0 flex bottom-0 transform transition-all duration-300 ease-in-out -translate-x-1/2 left-1/2"
      style={{ backgroundColor: 'rgba(54, 52, 71, 0.8)' }}
    >
      <div onClick={handleToggle} className="w-full"></div>
      <div className="w-5/12 fixed bg-purple-100 right-0 bottom-0 top-0 p-10 z-10">
        {children}
      </div>
    </div>
  ) : (
    <div />
  );
}
