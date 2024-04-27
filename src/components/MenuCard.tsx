import { ReactNode } from 'react';

type MenuCardProps = {
  title: string;
  action: () => void;
  icon: ReactNode;
  color: string;
  subtitle: string;
};

export function MenuCard({
  action,
  icon,
  title,
  color,
  subtitle,
}: MenuCardProps) {
  return (
    <button
      onClick={action}
      className={`bg-purple-200 w-100 h-48 rounded-md text-start p-5 hover:${color} hover:opacity-90 transition duration-300 overflow-hidden`}
    >
      <div
        className={`
            flex
            rounded 
            ${color}
            w-12 h-12 
            opacity-95 
            justify-center
            items-center
            `}
      >
        <div>{icon}</div>
      </div>
      <p className="font-semibold mt-2 text-lg">{title}</p>
      <span className="text-gray-light">{subtitle}</span>
    </button>
  );
}
