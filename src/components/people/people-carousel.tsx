import type { ReactNode } from 'react';

import type { GetImageResult } from 'astro';

import type { PersonWithComputed } from '@/lib/people';
import { PersonCard } from '@/components/people/person-card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import type { Locale } from '@/i18n/utils';

export const PeopleCarousel = (props: {
  locale: Locale;
  people: Array<
    Omit<PersonWithComputed, 'data'> & {
      data: PersonWithComputed['data'] & { image: GetImageResult | undefined };
    }
  >;
  children?: ReactNode;
}) => {
  if (!props.people.length) return null;
  return (
    <Carousel className="w-full" opts={{ dragFree: true }}>
      <CarouselContent>
        {props.people.map((person) => {
          if (!person.data.image) return null;
          return (
            <CarouselItem
              key={person.id}
              className="basis-[60%] 2xs:basis-[40%] flex flex-col xs:basis-[30%] md:basis-[24%] fisrt:ml-8 last:mr-8"
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
        {!!props.children && (
          <CarouselItem className="basis-[60%] 2xs:basis-[40%] flex flex-col xs:basis-[30%] md:basis-[24%] fisrt:ml-8 last:mr-8">
            {props.children}
          </CarouselItem>
        )}
      </CarouselContent>
    </Carousel>
  );
};
