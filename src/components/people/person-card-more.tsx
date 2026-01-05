import type { ReactNode } from 'react';

import { PiArrowRight } from 'react-icons/pi';

import { cn } from '@/lib/tailwind/utils';

export const PersonCardMore = (props: {
  href: string;
  children?: ReactNode;
}) => {
  return (
    <a
      href={props.href}
      onDragStart={(e) => e.preventDefault()}
      className="bg-brand-100/50 flex-1 flex gap-2.5 overflow-hidden rounded-md items-center justify-center p-2 transition-all hover:bg-brand-100"
    >
      {!!props.children && (
        <div className="text-xs uppercase">{props.children}</div>
      )}
      <PiArrowRight className={cn('size-4', !props.children && 'size-6')} />
    </a>
  );
};
