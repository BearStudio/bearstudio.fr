import type { DefaultLocaleRoutePaths, LinkParams } from '@/lib/link';
import type { Locale } from '@/i18n/utils';

type BreadcrumbEntry<
  Path extends DefaultLocaleRoutePaths = DefaultLocaleRoutePaths,
  L extends Locale = Locale,
> = {
  locale: L;
  link: {
    path: Path;
    params: LinkParams<Path, L>;
  };
  label: string;
};

const breadcrumbEntry = <
  Path extends DefaultLocaleRoutePaths,
  L extends Locale,
>(entry: {
  locale: L;
  link: {
    path: Path;
    params: LinkParams<Path, L>;
  };
  label: string;
}): BreadcrumbEntry<Path, L> => {
  return entry;
};

type EntryBuilder<L extends Locale> = <
  Path extends DefaultLocaleRoutePaths,
>(options: {
  path: Path;
  params: LinkParams<Path, L>;
  label: string;
}) => BreadcrumbEntry<Path, L>;

export const breadcrumbEntries = <L extends Locale>(locale: L) => {
  const entryBuilder: EntryBuilder<L> = <
    Path extends DefaultLocaleRoutePaths,
  >(options: {
    path: Path;
    params: LinkParams<Path, L>;
    label: string;
  }): BreadcrumbEntry<Path, L> => {
    return breadcrumbEntry({
      locale,
      link: {
        path: options.path,
        params: options.params,
      },
      label: options.label,
    });
  };

  return <T extends BreadcrumbEntry[]>(
    callback: (entry: EntryBuilder<L>) => T
  ): T => {
    return callback(entryBuilder);
  };
};
