import * as React from 'react';

import { Slot } from 'radix-ui';
import { PiCaretRight, PiDotsThree, PiHouseDuotone } from 'react-icons/pi';

import { getLink } from '@/lib/link';
import { cn } from '@/lib/tailwind/utils';
import type { BreadcrumbEntry } from '@/components/breadcrumb/utils';
import type { Locale } from '@/i18n/utils';

function BreadcrumbRoot({ ...props }: React.ComponentProps<'nav'>) {
  return <nav aria-label="breadcrumb" data-slot="breadcrumb" {...props} />;
}

function BreadcrumbList({ className, ...props }: React.ComponentProps<'ol'>) {
  return (
    <ol
      data-slot="breadcrumb-list"
      className={cn(
        'flex items-center gap-1.5 text-sm break-words sm:gap-2.5',
        className
      )}
      {...props}
    />
  );
}

function BreadcrumbItem({ className, ...props }: React.ComponentProps<'li'>) {
  return (
    <li
      data-slot="breadcrumb-item"
      className={cn('inline-flex items-center gap-1.5', className)}
      {...props}
    />
  );
}

function BreadcrumbLink({
  asChild,
  className,
  ...props
}: React.ComponentProps<'a'> & {
  asChild?: boolean;
}) {
  const Comp = asChild ? Slot.Slot : 'a';

  return (
    <Comp
      data-slot="breadcrumb-link"
      className={cn(
        'hover:opacity-100 opacity-80 text-left line-clamp-1 font-medium transition-colors cursor-pointer',
        className
      )}
      {...props}
    />
  );
}

function BreadcrumbPage({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      data-slot="breadcrumb-page"
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn('opacity-60 text-left font-normal line-clamp-1', className)}
      {...props}
    />
  );
}

function BreadcrumbSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<'li'>) {
  return (
    <li
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      className={cn('[&>svg]:size-3.5 opacity-40', className)}
      {...props}
    >
      {children ?? <PiCaretRight />}
    </li>
  );
}

function BreadcrumbEllipsis({
  className,
  ...props
}: React.ComponentProps<'span'>) {
  return (
    <span
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      aria-hidden="true"
      className={cn('flex size-9 items-center justify-center', className)}
      {...props}
    >
      <PiDotsThree className="size-4" />
      <span className="sr-only">More</span>
    </span>
  );
}

const Breadcrumb = (props: {
  locale: Locale;
  entries: Array<BreadcrumbEntry>;
}) => {
  return (
    <BreadcrumbRoot>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink
            href={getLink('/fr', props.locale, {})}
            className="p-4 -m-4"
          >
            <PiHouseDuotone />
            <span className="sr-only">Accueil</span>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {props.entries.map((entry, index) => {
          return (
            // eslint-disable-next-line @eslint-react/no-array-index-key
            <React.Fragment key={index}>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                {index === props.entries.length - 1 ? (
                  <BreadcrumbPage>{entry.label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink
                    href={getLink(
                      entry.link.path,
                      entry.locale,
                      entry.link.params
                    )}
                  >
                    {entry.label}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </BreadcrumbRoot>
  );
};

export {
  BreadcrumbRoot,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
  Breadcrumb,
};
