import { PiMagnifyingGlass } from 'react-icons/pi';

type Props = {
  handleToggle: () => void;
};

export function InputThatTriggerModal({ handleToggle }: Props) {
  return (
    <div className="relative">
      <button
        className="z-50  flex justify-items-start w-full mt-10 h-50 p-4 rounded-md bg-purple-200 border-solid"
        onClick={handleToggle}
      >
        <span className="ml-10"> Pesquise um jogador </span>
      </button>
      <div className="absolute top-[30%] left-0 flex pl-3 pointer-events-none 1">
        <PiMagnifyingGlass size={24} className="text-gray-500" />{' '}
      </div>
    </div>
  );
}
