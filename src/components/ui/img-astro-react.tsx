import type { GetImageResult } from 'astro';
import { omit } from 'remeda';

export const ImgAstroReact = (props: {
  image: GetImageResult;
  className?: string;
  alt: string;
}) => {
  const { image, ...rest } = props;
  return (
    <img
      src={props.image?.src}
      srcSet={props.image?.srcSet.attribute}
      // Making sure fetchpriority attribute is correctly formatted for JSX
      {...omit(props.image?.attributes ?? {}, ['fetchpriority'])}
      fetchPriority={props.image?.attributes.fetchpriority}
      {...rest}
    />
  );
};
