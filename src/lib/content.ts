type HasSpecificLangProps = {
  post: any;
  lang: string;
};

export const hasSpecificLang = ({ post, lang }: HasSpecificLangProps) => {
  const [postLang, ...id] = post.id.split('/');
  return postLang === lang;
};

export const getSlugWithoutLocale = (post: any) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [lang, ...slug] = post.id.split('/');
  return {
    ...post,
    data: {
      ...post.data,
      _computed: {
        slug: slug.join('/'),
      },
    },
  };
};
