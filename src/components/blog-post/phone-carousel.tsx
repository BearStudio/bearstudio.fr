import * as React from 'react';

import { PiArrowLeft, PiArrowRight } from 'react-icons/pi';

import { cn } from '@/lib/tailwind/utils';
import { Button } from '@/components/ui/button';

type Slide = {
  src: string;
  alt?: string;
};

type PhoneCarouselProps = {
  slides: Slide[];
  className?: string;
};

export function PhoneCarousel({ slides, className }: PhoneCarouselProps) {
  const [current, setCurrent] = React.useState(0);
  const count = slides.length;

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(count - 1, c + 1));

  return (
    <div
      data-slot="phone-carousel"
      className={cn('not-prose flex flex-col items-center gap-4', className)}
    >
      {/* Phone frame — fixed size, images scroll inside */}
      <div className="relative w-[220px] shrink-0">
        {/* Outer shell */}
        <div className="relative rounded-[2.8rem] border-[8px] border-neutral-900 bg-neutral-900 shadow-xl ring-1 ring-neutral-700/60">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 z-10 h-5 w-24 -translate-x-1/2 rounded-b-xl bg-neutral-900" />
          {/* Screen — overflow hidden, images slide inside */}
          <div className="overflow-hidden rounded-[2.2rem] bg-white">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {slides.map((slide, i) => (
                <img
                  key={i}
                  src={slide.src}
                  alt={slide.alt ?? `Écran ${i + 1}`}
                  className="w-full shrink-0 object-cover"
                  draggable={false}
                />
              ))}
            </div>
          </div>
          {/* Home bar */}
          <div className="flex justify-center pb-2 pt-1">
            <div className="h-1 w-16 rounded-full bg-neutral-700" />
          </div>
        </div>
      </div>

      {/* Controls below the phone */}
      <div className="flex items-center gap-3">
        <Button
          variant="secondary"
          size="icon"
          onClick={prev}
          disabled={current === 0}
          aria-label="Slide précédent"
        >
          <PiArrowLeft className="size-4" />
        </Button>

        {/* Dots */}
        <div className="flex gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrent(i)}
              aria-label={`Aller au slide ${i + 1}`}
              className={cn(
                'h-1.5 rounded-full transition-all',
                i === current ? 'w-4 bg-brand-100' : 'w-1.5 bg-brand-700'
              )}
            />
          ))}
        </div>

        <Button
          variant="secondary"
          size="icon"
          onClick={next}
          disabled={current === count - 1}
          aria-label="Slide suivant"
        >
          <PiArrowRight className="size-4" />
        </Button>
      </div>
    </div>
  );
}
