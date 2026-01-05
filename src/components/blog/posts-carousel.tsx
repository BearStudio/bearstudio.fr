import type { ReactNode } from 'react';

import type { GetImageResult } from 'astro';

import type { PostWithComputed } from '@/lib/posts';
import { PostCard } from '@/components/blog/post-card';
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
  children?: ReactNode;
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
        {!!props.children && (
          <CarouselItem className="basis-[70%] 2xs:basis-[60%] flex flex-col xs:basis-[50%] sm:basis-[30%] md:basis-[25%] fisrt:ml-8 last:mr-8">
            {props.children}
          </CarouselItem>
        )}
      </CarouselContent>
    </Carousel>
  );
};
