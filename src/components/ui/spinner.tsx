import { PiSpinner } from 'react-icons/pi';

import { cn } from '@/lib/tailwind/utils';

export const Spinner = (props: { full?: boolean; className?: string }) => {
  return (
    <span
      className={cn(props.full && 'flex flex-1 items-center justify-center')}
    >
      <PiSpinner className={cn('animate-spin', props.className)} />
    </span>
  );
};
