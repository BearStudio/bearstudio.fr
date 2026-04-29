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

type Slide = {
  src: string;
  alt?: string;
};

type PhoneCarouselProps = {
  slides: Slide[];
  className?: string;
};

export function PhoneCarousel({ slides, className }: PhoneCarouselProps) {
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
      <PhoneFrame>
        <Carousel setApi={setApi} className="w-full">
          <CarouselContent>
            {slides.map((slide, i) => (
              <CarouselItem key={slide.src}>
                <img
                  src={slide.src}
                  alt={slide.alt ?? `Écran ${i + 1}`}
                  className="block w-full object-cover"
                  draggable={false}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </PhoneFrame>

      <div className="flex items-center gap-3">
        <CarouselPrevious
          variant="secondary"
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
                i === current ? 'w-4 bg-brand-500' : 'w-1.5 bg-muted'
              )}
            />
          ))}
        </div>

        <CarouselNext variant="secondary" className="static translate-y-0" />
      </div>
    </div>
  );
}

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-[220px] shrink-0">
      <div className="relative rounded-[2.8rem] border-[8px] border-neutral-900 bg-neutral-900 shadow-xl ring-1 ring-neutral-700/60">
        <div className="absolute top-0 left-1/2 z-10 h-5 w-24 -translate-x-1/2 rounded-b-xl bg-neutral-900" />
        <div className="overflow-hidden rounded-[2.2rem] bg-white">
          {children}
        </div>
        <div className="flex justify-center py-1">
          <div className="h-1 w-16 rounded-full bg-neutral-700" />
        </div>
      </div>
    </div>
  );
}
