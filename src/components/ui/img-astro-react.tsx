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
      // Making sure fetchpriority attribute is correctly formatted for JSX and remove style attribute
      {...omit(props.image?.attributes ?? {}, ['fetchpriority', 'style'])}
      fetchPriority={props.image?.attributes.fetchpriority}
      {...rest}
    />
  );
};
