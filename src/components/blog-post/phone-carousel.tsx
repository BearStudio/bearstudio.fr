import * as React from 'react';

import { cn } from '@/lib/tailwind/utils';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';

type PhoneCarouselProps = {
  slides: { src: string; alt?: string }[];
  width?: number;
  dark?: boolean;
  className?: string;
};

export function PhoneCarousel({
  slides,
  width = 220,
  dark = false,
  className,
}: PhoneCarouselProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on('select', onSelect);
    return () => {
      api.off('select', onSelect);
    };
  }, [api]);

  return (
    <div
      data-slot="phone-carousel"
      className={cn('not-prose flex flex-col items-center gap-4', className)}
    >
      <Carousel setApi={setApi} style={{ width }} className="shrink-0">
        <div className="relative rounded-[2.8rem] border-8 border-neutral-900 bg-neutral-900 shadow-xl ring-1 ring-neutral-700/60">
          <div className="absolute top-0 left-1/2 z-10 h-5 w-24 -translate-x-1/2 rounded-b-xl bg-neutral-900" />
          <div className="overflow-hidden rounded-[2.2rem]">
            <CarouselContent className="ml-0">
              {slides.map((slide, i) => (
                <CarouselItem key={slide.src} className="pl-0">
                  <img
                    src={slide.src}
                    alt={slide.alt ?? `Écran ${i + 1}`}
                    className="block w-full object-cover"
                    draggable={false}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-center gap-3">
          <CarouselPrevious
            variant={dark ? 'secondaryOnDark' : 'secondary'}
            className="static translate-y-0"
          />
          <div className="flex gap-1.5">
            {slides.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => api?.scrollTo(i)}
                aria-label={`Aller au slide ${i + 1}`}
                className={cn(
                  'h-1.5 rounded-full transition-all',
                  i === current
                    ? cn('w-4', dark ? 'bg-background' : 'bg-brand-500')
                    : cn('w-1.5', dark ? 'bg-white/30' : 'bg-muted')
                )}
              />
            ))}
          </div>
          <CarouselNext
            variant={dark ? 'secondaryOnDark' : 'secondary'}
            className="static translate-y-0"
          />
        </div>
      </Carousel>
    </div>
  );
}
