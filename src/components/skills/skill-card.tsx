import type { GetImageResult } from 'astro';

import { getLink } from '@/lib/link';
import type { SkillWithComputed } from '@/lib/skills';
import { ImgAstroReact } from '@/components/ui/img-astro-react';
import type { Locale } from '@/i18n/utils';

export const SkillCard = (props: {
  skill: SkillWithComputed;
  locale: Locale;
  iconImage: GetImageResult | null;
}) => {
  return (
    <a
      href={getLink('/fr/expertise/:id', props.locale, {
        id: props.skill.data._computed.slug,
      })}
      onDragStart={(e) => e.preventDefault()}
      className="bg-card border-card-border flex flex-1 gap-3 overflow-hidden rounded-md border border-b-3 p-3 transition-all hover:-translate-y-1.5 hover:shadow-xl"
    >
      {!!props.iconImage && (
        <ImgAstroReact
          image={props.iconImage}
          alt={props.skill.data.name}
          className="size-8"
        />
      )}
      <h2 className="font-heading text-center text-lg font-bold">
        {props.skill.data.name}
      </h2>
    </a>
  );
};
