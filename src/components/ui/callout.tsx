import * as React from 'react';

import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/tailwind/utils';

const alertVariants = cva(
  'relative w-full rounded-lg px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-5 [&>svg]:opacity-80',
  {
    variants: {
      variant: {
        default: 'bg-brand-100 text-brand-800',
        warning: 'bg-warning-100 text-warning-800',
        danger: 'bg-negative-100 text-negative-800',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

function Callout({
  className,
  variant,
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  );
}

function CalloutTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        'col-start-2 min-h-4 font-medium tracking-tight',
        className
      )}
      {...props}
    />
  );
}

function CalloutDescription({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        'col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed',
        className
      )}
      {...props}
    />
  );
}

export { Callout, CalloutTitle, CalloutDescription };
