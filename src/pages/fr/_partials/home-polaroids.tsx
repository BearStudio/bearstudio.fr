import { lunalink } from '@bearstudio/lunalink';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { Polaroid } from '@/components/ui/polaroid';
import { ROUTES } from '@/routes.gen';

export const HomePolaroids = () => {
  return (
    <Carousel className="-my-16 w-full" opts={{ dragFree: true }}>
      <CarouselContent className="-ml-8 pl-8">
        <CarouselItem className="basis-[60%] sm:basis-[30%] md:basis-[24%] py-16 fisrt:ml-8">
          <a
            className="-rotate-2 flex"
            href={lunalink(ROUTES.fr.blog.__path, {})}
            onDragStart={(e) => e.preventDefault()}
          >
            <Polaroid src="/images/ivan-talk-ces-25.jpeg">
              Nos conférences de Codeurs en Seine 2026
            </Polaroid>
          </a>
        </CarouselItem>
        <CarouselItem className="basis-[60%] sm:basis-[30%] md:basis-[25%] py-16">
          <a
            className="rotate-1 flex"
            href={lunalink(ROUTES.fr.blog.__path, {})}
            onDragStart={(e) => e.preventDefault()}
          >
            <Polaroid src="/images/bearstudio-house.jpeg">La tanière</Polaroid>
          </a>
        </CarouselItem>
        <CarouselItem className="basis-[60%] sm:basis-[30%] md:basis-[25%] py-16">
          <a
            className="-rotate-3 flex"
            href={lunalink(ROUTES.fr.blog.__path, {})}
            onDragStart={(e) => e.preventDefault()}
          >
            <Polaroid src="/images/london-25.jpeg">
              React Advanced Conference London 2026
            </Polaroid>
          </a>
        </CarouselItem>
        <CarouselItem className="basis-[60%] sm:basis-[30%] md:basis-[24%] py-16 last:mr-8">
          <a
            className="rotate-2 flex"
            href={lunalink(ROUTES.fr.blog.__path, {})}
            onDragStart={(e) => e.preventDefault()}
          >
            <Polaroid src="/images/forkids-rouen-2.jpeg">
              Fork it! For Kids à Rouen
            </Polaroid>
          </a>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};
