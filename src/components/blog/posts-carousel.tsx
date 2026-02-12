import type { GetImageResult } from 'astro';

import type { PostWithComputed } from '@/lib/posts';
import { PostCard } from '@/components/blog/post-card';
import { PostCardMore } from '@/components/blog/post-card-more';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import type { Locale } from '@/i18n/utils';

export const PostsCarousel = (props: {
  locale: Locale;
  posts: Array<
    Omit<PostWithComputed, 'data'> & {
      data: PostWithComputed['data'] & {
        image: GetImageResult | undefined;
      };
    }
  >;
  // Passing Astro-rendered children (`PostCardMore`) as a slot into a React
  // `client:load` island (`PostsCarousel`) causes a hydration mismatch. Astro
  // serializes the children as static HTML during SSR, but React reconstructs
  // the tree differently during client hydration, leading to the mismatch, that
  // is why we use this prop.
  moreLink?: { href: string; label: string } | undefined;
}) => {
  if (!props.posts.length) return null;
  return (
    <Carousel className="w-full" opts={{ dragFree: true }}>
      <CarouselContent>
        {props.posts.map((post) => {
          if (!post.data.image) return null;
          return (
            <CarouselItem
              key={post.id}
              className="basis-[90%] 2xs:basis-[70%] flex flex-col xs:basis-[60%] sm:basis-[40%] md:basis-[30%] fisrt:ml-8 last:mr-8"
            >
              <PostCard
                post={post}
                locale={props.locale}
                image={post.data.image}
              />
            </CarouselItem>
          );
        })}
        {!!props.moreLink && (
          <CarouselItem className="basis-[70%] 2xs:basis-[60%] flex flex-col xs:basis-[50%] sm:basis-[30%] md:basis-[25%] fisrt:ml-8 last:mr-8">
            <PostCardMore href={props.moreLink.href}>
              {props.moreLink.label}
            </PostCardMore>
          </CarouselItem>
        )}
      </CarouselContent>
    </Carousel>
  );
};
