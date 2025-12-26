import type { GetImageResult } from 'astro';
import { match } from 'ts-pattern';

import { getLink } from '@/lib/link';
import type { PersonWithComputed } from '@/lib/people';
import { cn } from '@/lib/tailwind/utils';
import { ImgAstroReact } from '@/components/ui/img-astro-react';
import type { Locale } from '@/i18n/utils';

export const PersonCard = (props: {
  person: PersonWithComputed;
  locale: Locale;
  image: GetImageResult;
  hover?: 'soft' | 'hard';
  hideJob?: boolean;
}) => {
  return (
    <a
      href={getLink('/fr/equipe/:id', props.locale, {
        id: props.person.data._computed.slug ?? '#',
      })}
      onDragStart={(e) => e.preventDefault()}
      className={cn(
        'bg-card flex-1 group border-card-border flex flex-col gap-2 rounded-md border border-b-3 p-2 transition-all',
        match(props.hover)
          .with('hard', () => 'hover:-translate-y-1.5 hover:shadow-xl')
          .with('soft', () => 'hover:shadow-lg')
          .with(undefined, () => '')
          .exhaustive()
      )}
    >
      <div className="from-brand-900 to-brand-800 relative aspect-[10/12] w-full rounded-sm bg-gradient-to-b">
        {!!props.image && (
          <ImgAstroReact
            image={props.image}
            alt=""
            className={cn(
              'absolute inset-0 h-full w-full object-cover drop-shadow-lg grayscale transition-all group-hover:grayscale-0',
              match(props.hover)
                .with(
                  'hard',
                  () => 'group-hover:-translate-y-[10.4%] group-hover:scale-120'
                )
                .with(
                  'soft',
                  () => 'group-hover:-translate-y-[5%] group-hover:scale-110'
                )
                .with(undefined, () => '')
                .exhaustive()
            )}
          />
        )}
      </div>
      <div className="flex flex-1 flex-col gap-1 px-1">
        <h2 className="font-heading leading-tight font-bold text-sm sm:text-base">
          {props.person.data.name}
        </h2>
        {!!props.person.data.job && !props.hideJob && (
          <p className="text-xs">{props.person.data.job}</p>
        )}
      </div>
    </a>
  );
};
