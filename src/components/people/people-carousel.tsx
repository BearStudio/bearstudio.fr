import type { GetImageResult } from 'astro';

import type { PersonWithComputed } from '@/lib/people';
import { PersonCard } from '@/components/people/person-card';
import { PersonCardMore } from '@/components/people/person-card-more';
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
  // Passing Astro-rendered children (`PersonCardMore`) as a slot into a React
  // `client:load` island (`PeopleCarousel`) causes a hydration mismatch. Astro
  // serializes the children as static HTML during SSR, but React reconstructs
  // the tree differently during client hydration, leading to the mismatch, that
  // is why we use this prop.
  moreLink?: { href: string; label: string } | undefined;
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
              />
            </CarouselItem>
          );
        })}
        {!!props.moreLink && (
          <CarouselItem className="basis-[60%] 2xs:basis-[40%] flex flex-col xs:basis-[30%] md:basis-[24%] fisrt:ml-8 last:mr-8">
            <PersonCardMore href={props.moreLink.href}>
              {props.moreLink.label}
            </PersonCardMore>
          </CarouselItem>
        )}
      </CarouselContent>
    </Carousel>
  );
};
