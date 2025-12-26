import type { GetImageResult } from 'astro';

import { getLink } from '@/lib/link';
import type { PostWithComputed } from '@/lib/posts';
import { FormattedDate } from '@/components/ui/formatted-date';
import { ImgAstroReact } from '@/components/ui/img-astro-react';
import type { Locale } from '@/i18n/utils';

export const PostCard = (props: {
  post: PostWithComputed;
  locale: Locale;
  image: GetImageResult;
}) => {
  return (
    <a
      href={getLink('/fr/blog/posts/:id', props.locale, {
        id: props.post.data._computed.slug,
      })}
      onDragStart={(e) => e.preventDefault()}
      className="bg-card flex-1 border-card-border flex flex-col gap-2.5 overflow-hidden rounded-md border border-b-3 p-2 transition-all hover:-translate-y-1.5 hover:shadow-xl"
    >
      <div className="bg-brand-900 relative aspect-[1.2] w-full overflow-hidden rounded-sm">
        {!!props.image && (
          <ImgAstroReact
            image={props.image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 px-1">
        <h2 className="font-heading flex-1 text-lg leading-tight font-bold line-clamp-2">
          {props.post.data.title}
        </h2>
        <FormattedDate
          locale={props.locale}
          date={props.post.data.date}
          className="text-xs opacity-60"
        />
      </div>
    </a>
  );
};
