import { useState, type ReactNode } from 'react';

import { match } from 'ts-pattern';

import {
  ResponsiveDrawer,
  ResponsiveDrawerContent,
  ResponsiveDrawerTitle,
  ResponsiveDrawerTrigger,
} from '@/components/ui/responsive-drawer';
import type { Locale } from '@/i18n/utils';

export const ContactFormDrawer = (props: {
  children?: ReactNode;
  className?: string;
  locale: Locale;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <ResponsiveDrawer open={open} onOpenChange={setOpen}>
      <ResponsiveDrawerTrigger className={props.className}>
        {props.children}
      </ResponsiveDrawerTrigger>
      <ResponsiveDrawerContent className="max-h-[90vh] px-4 sm:px-0 overflow-auto after:hidden">
        <ResponsiveDrawerTitle className="sr-only">
          Formulaire de contact
        </ResponsiveDrawerTitle>
        <div>
          <iframe
            className="w-full h-[900px] sm:h-[740px]"
            src={match(props.locale)
              .with(
                'fr',
                () =>
                  'https://webforms.pipedrive.com/f/32P3fANHMFYnf2gby5LG8VZO99aC3QUUcSoCqUTos8bNYTixBOrKniBhZ2tu63jur?embeded=1&uuid=idwiv5kk'
              )
              .with(
                'en',
                () =>
                  'https://webforms.pipedrive.com/f/1teqIN7CPFfjSqp81Ae5J6PYesKeTjOqlp1mPBBU71Sb1hypeVXv7oogLCm8MInwT?embeded=1&uuid=idv1u1'
              )
              .exhaustive()}
            name="https://www.bearstudio.fr/contact#formAnchor-idwiv5kk"
            title="Formulaire de contact"
          />
        </div>
      </ResponsiveDrawerContent>
    </ResponsiveDrawer>
  );
};
