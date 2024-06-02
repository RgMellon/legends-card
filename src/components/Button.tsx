import { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading: boolean;
  title: string;
  type?: string;
};

export function Button({
  loading = false,
  title,
  type = 'button',
  ...rest
}: ButtonProps) {
  return (
    <button
      className="bg-yellow 
                  text-white
                  active:bg-emerald-600 
                  font-bold uppercase 
                  text-sm px-6 py-3
                  rounded
                  shadow
                  hover:shadow-lg
                  outline-none
                  mr-1
                  mb-1
                  ease-linear
                  transition-all
                  duration-150"
      {...rest}
      type={type}
    >
      {!loading && title}
      {loading && (
        <svg
          className="animate-spin h-5 w-5 text-white inline-block"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.373A8 8 0 0112 4v4a4 4 0 00-4 4H6zm14-4a8 8 0 00-8 8h4a4 4 0 014-4V12zM12 20a8 8 0 008-8h-4a4 4 0 00-4 4v4z"
          ></path>
        </svg>
      )}
    </button>
  );
}
