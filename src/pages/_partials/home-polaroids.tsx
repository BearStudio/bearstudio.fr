import type { CollectionEntry } from 'astro:content';

import { cn } from '@/lib/tailwind/utils';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { Polaroid } from '@/components/ui/polaroid';
import type { Locale } from '@/i18n/utils';

export const HomePolaroids = (props: {
  locale: Locale;
  polaroids: Array<CollectionEntry<'polaroids'>>;
}) => {
  return (
    <Carousel className="-my-16 w-full" opts={{ dragFree: true }}>
      <CarouselContent className="-ml-8 pl-8">
        {props.polaroids.map((polaroid, index) => (
          <CarouselItem
            key={polaroid.id}
            className="basis-[60%] sm:basis-[30%] md:basis-[25%] py-16 fisrt:ml-8 last:mr-8"
          >
            <a
              className={cn(
                'flex',
                index === 0 && '-rotate-2',
                index === 1 && 'rotate-1',
                index === 2 && '-rotate-3',
                index === 3 && 'rotate-2'
              )}
              href={polaroid.data.href}
              onDragStart={(e) => e.preventDefault()}
            >
              <Polaroid src={polaroid.data.src}>
                {polaroid.data.title[props.locale]}
              </Polaroid>
            </a>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
