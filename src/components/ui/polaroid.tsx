import type { ReactNode } from 'react';

import { cn } from '@/lib/tailwind/utils';

export const Polaroid = (props: {
  className?: string;
  src?: string;
  children?: ReactNode;
}) => {
  return (
    <div
      className={cn(
        'text-foreground relative flex overflow-hidden flex-col gap-2 rounded-sm bg-white p-3 shadow-2xl',
        props.className
      )}
    >
      <div className="relative overflow-hidden rounded-xs aspect-square w-full">
        <img
          className="block aspect-square object-cover h-full w-full"
          alt=""
          src={props.src}
        />
        <div className="absolute inset-0 shadow-[inset_0_0_10px_rgba(0,0,0,.3)]"></div>
      </div>
      <p className="font-handwritten text-base leading-none flex w-full justify-center place-items-center text-balance h-8 px-1 text-center">
        <span className="line-clamp-2">{props.children ?? <>&nbsp;</>}</span>
      </p>
      <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,.2)]"></div>
    </div>
  );
};
