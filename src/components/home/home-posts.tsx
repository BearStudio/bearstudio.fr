import type { GetImageResult } from 'astro';

import type { PostWithComputed } from '@/lib/posts';
import { PostCard } from '@/components/blog/post-card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import type { Locale } from '@/i18n/utils';

export const HomePosts = (props: {
  locale: Locale;
  posts: Array<
    Omit<PostWithComputed, 'data'> & {
      data: PostWithComputed['data'] & {
        image: GetImageResult | undefined;
      };
    }
  >;
}) => {
  if (!props.posts.length) return null;
  return (
    <Carousel className="-my-16 w-full" opts={{ dragFree: true }}>
      <CarouselContent>
        {props.posts.map((post) => {
          if (!post.data.image) return null;
          return (
            <CarouselItem
              key={post.id}
              className="basis-[90%] 2xs:basis-[70%] flex flex-col xs:basis-[60%] sm:basis-[40%] md:basis-[30%] py-16 fisrt:ml-8 last:mr-8"
            >
              <PostCard
                post={post}
                locale={props.locale}
                image={post.data.image}
              />
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
};
