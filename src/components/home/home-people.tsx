import type { GetImageResult } from 'astro';

import type { PersonWithComputed } from '@/lib/people';
import { PersonCard } from '@/components/people/person-card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import type { Locale } from '@/i18n/utils';

export const HomePeople = (props: {
  locale: Locale;
  people: Array<
    Omit<PersonWithComputed, 'data'> & {
      data: PersonWithComputed['data'] & { image: GetImageResult | undefined };
    }
  >;
}) => {
  if (!props.people.length) return null;
  return (
    <Carousel className="-my-16 w-full" opts={{ dragFree: true }}>
      <CarouselContent>
        {props.people.map((person) => {
          if (!person.data.image) return null;
          return (
            <CarouselItem
              key={person.id}
              className="basis-[60%] 2xs:basis-[40%] flex flex-col xs:basis-[30%] md:basis-[22%] py-16 fisrt:ml-8 last:mr-8"
            >
              <PersonCard
                person={person}
                locale={props.locale}
                image={person.data.image}
                hover="soft"
                hideJob
              />
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
};
