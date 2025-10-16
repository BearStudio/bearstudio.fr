export const remarkCustomProp = () => {
  return function transfomer(tree, file) {
    file.data.astro.frontmatter = {
      ...(file.data.astro.frontmatter ?? {}),
      customProperty: 'Propriété générée',
    };

    console.log('   ---   remark Layout Check   ---', {
      file,
      tree,
    });
  };
};
