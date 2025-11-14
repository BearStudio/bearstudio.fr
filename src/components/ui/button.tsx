import * as React from 'react';

import { cva, type VariantProps } from 'class-variance-authority';
import { Slot as SlotPrimitive } from 'radix-ui';

import { cloneAsChild } from '@/lib/clone-as-child';
import { cn } from '@/lib/tailwind/utils';
import { Spinner } from '@/components/ui/spinner';

const buttonVariants = cva(
  "relative gap-2 inline-flex w-fit transition-all shrink-0 cursor-pointer box-content items-center justify-center overflow-hidden rounded-md text-sm font-medium whitespace-nowrap outline-none  focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-40 disabled:grayscale aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:disabled:opacity-20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&>span]:gap-2",
  {
    variants: {
      variant: {
        default:
          'bg-accent text-accent-foreground border border-b-3 pb-px active:translate-y-0.5 active:border-b border-accent-border hover:bg-accent/90 [a:hover_&]:bg-accent/90 [button:hover_&]:bg-accent/90',
        secondary:
          'bg-secondary text-secondary-foreground border border-b-3 pb-px active:translate-y-0.5 active:border-b border-secondary-border hover:bg-secondary/90 [a:hover_&]:bg-secondary/90 [button:hover_&]:bg-secondary/90',
        secondaryOnDark:
          'bg-primary text-primary-foreground border border-b-3 pb-px active:translate-y-0.5 active:border-b border-primary-border hover:bg-primary/90 [a:hover_&]:bg-primary/90 [button:hover_&]:bg-primary/90',
        ghost:
          'hover:bg-black/5  [a:hover_&]:bg-black/5 [button:hover_&]:bg-black/5 active:translate-y-px',
        ghostOnDark:
          'hover:bg-white/5 [a:hover_&]:bg-white/5 [button:hover_&]:bg-white/5 active:translate-y-px',

        link: 'underline-offset-4 hover:underline [a:hover_&]:underline [button:hover_&]:underline',
      },
      size: {
        default: 'h-9 px-4 has-[>span>svg]:px-3',
        xs: "h-6 rounded-sm px-2 text-xs has-[>span>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3 [&>span]:gap-1",
        sm: 'h-8 px-3 has-[>span>svg]:px-2.5',
        lg: 'h-10 px-4 has-[>span>svg]:px-3',
        xl: 'h-12 px-5 has-[>span>svg]:px-4',
        icon: 'size-9',
        'icon-xs':
          "size-6 rounded-sm text-xs [&_svg:not([class*='size-'])]:size-3",
        'icon-sm': 'size-8',
        'icon-lg': 'size-10',
      },
    },
    compoundVariants: [
      {
        variant: ['link'],
        size: ['xs', 'sm', 'default', 'lg'],
        class: 'px-0 has-[>span>svg]:px-0',
      },
    ],
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

type ButtonProps = React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    loading?: boolean;
    asChild?: boolean;
  };

function Button({
  className,
  children,
  variant,
  asChild,
  size,
  disabled,
  loading,
  ...props
}: ButtonProps) {
  const Comp = asChild ? SlotPrimitive.Slot : 'button';

  return (
    <Comp
      data-slot="button"
      type={!asChild ? 'button' : undefined}
      className={cn(buttonVariants({ variant, size, className }))}
      disabled={loading || disabled}
      {...props}
    >
      {cloneAsChild({
        children,
        asChild,
        render: (child) => (
          <>
            {!!loading && (
              <span className="absolute inset-0 flex items-center justify-center">
                <Spinner />
              </span>
            )}
            <span
              className={cn(
                'flex items-center justify-center',
                loading && 'opacity-0'
              )}
            >
              {child}
            </span>
          </>
        ),
      })}
    </Comp>
  );
}

export { Button, buttonVariants };
