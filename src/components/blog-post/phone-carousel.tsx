import * as React from 'react';

import { PiCaretLeft, PiCaretRight } from 'react-icons/pi';

import { cn } from '@/lib/tailwind/utils';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
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
  const count = slides.length;

  React.useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on('select', () => setCurrent(api.selectedScrollSnap()));
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

      {/* Controls below the phone */}
      <div className="flex items-center gap-3">
        <Button
          variant="secondary"
          size="icon"
          onClick={() => api?.scrollPrev()}
          disabled={current === 0}
          aria-label="Slide précédent"
          className="rounded-full"
        >
          <PiCaretLeft className="size-4" />
        </Button>

        {/* Dots */}
        <div className="flex gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
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

        <Button
          variant="secondary"
          size="icon"
          onClick={() => api?.scrollNext()}
          disabled={current === count - 1}
          aria-label="Slide suivant"
          className="rounded-full"
        >
          <PiCaretRight className="size-4" />
        </Button>
      </div>
    </div>
  );
}

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-[220px] shrink-0">
      <div className="relative rounded-[2.8rem] border-[8px] border-neutral-900 bg-neutral-900 shadow-xl ring-1 ring-neutral-700/60">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 z-10 h-5 w-24 -translate-x-1/2 rounded-b-xl bg-neutral-900" />
        {/* Screen */}
        <div className="overflow-hidden rounded-[2.2rem] bg-white">
          {children}
        </div>
        {/* Home bar */}
        <div className="flex justify-center py-1">
          <div className="h-1 w-16 rounded-full bg-neutral-700" />
        </div>
      </div>
    </div>
  );
}
