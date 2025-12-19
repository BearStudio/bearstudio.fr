import { cva } from 'class-variance-authority';

export const navButtonVariants = cva(
  'focus-visible:ring-ring/50 relative inline-flex w-fit shrink-0 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-md px-3 py-2 text-sm font-medium whitespace-nowrap transition-all outline-none hover:bg-white/5 focus-visible:ring-[3px] active:translate-y-px [&>svg]:opacity-60',
  {
    variants: {
      variant: {
        default: '',
        active: 'text-accent [&>svg]:opacity-100',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);
