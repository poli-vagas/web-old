import { ReactNode } from "react";

type TooltipProps = {
  message: string,
  position?: 'top' | 'bottom',
  children: ReactNode,
};

export const Tooltip = ({ message, position = 'top', children }: TooltipProps) => {
  const positionClass = position === 'top' ? 'mb-6' : '-mb-6';

  return (
    <div className="relative flex flex-col items-center group">
      {children}
      <div className={`${positionClass} absolute bottom-0 flex-col items-center hidden group-hover:flex`}>
        { position === 'bottom' &&
          <div className="w-3 h-3 -mb-2 rotate-45 bg-gray-600"></div>
        }
        <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-nowrap bg-gray-600 shadow-lg rounded-md">{message}</span>
        { position === 'top' &&
          <div className="w-3 h-3 -mt-2 rotate-45 bg-gray-600"></div>
        }
      </div>
    </div>
  );
};