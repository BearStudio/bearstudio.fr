import type { CollectionEntry } from 'astro:content';

import type { GetImageResult } from 'astro';

import { getPolaroidHref } from '@/lib/polaroids';
import { cn } from '@/lib/tailwind/utils';
import { Polaroid } from '@/components/polaroids/polaroid';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import type { Locale } from '@/i18n/utils';

export const PolaroidsCarousel = (props: {
  locale: Locale;
  polaroids: Array<
    Omit<CollectionEntry<'polaroids'>, 'data'> & {
      data: CollectionEntry<'polaroids'>['data'] & { image: GetImageResult };
    }
  >;
}) => {
  if (!props.polaroids.length) return null;
  return (
    <Carousel className="w-full" opts={{ dragFree: true }}>
      <CarouselContent>
        {props.polaroids.map((polaroid, index) => {
          return (
            <CarouselItem
              key={polaroid.id}
              className="basis-[60%] 2xs:basis-[40%] sm:basis-[30%] md:basis-[25%] fisrt:ml-8 last:mr-8"
            >
              <a
                className={cn(
                  'flex',
                  index === 0 && '-rotate-2',
                  index === 1 && 'rotate-1',
                  index === 2 && '-rotate-3',
                  index === 3 && 'rotate-2'
                )}
                href={getPolaroidHref(polaroid, props.locale)}
                onDragStart={(e) => e.preventDefault()}
              >
                <Polaroid image={polaroid.data.image}>
                  {polaroid.data.title[props.locale]}
                </Polaroid>
              </a>
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
};
