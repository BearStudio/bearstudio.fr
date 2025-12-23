import type { Locale } from '@/i18n/utils';

export const FormattedDate = (props: {
  locale: Locale;
  date: Date;
  className?: string;
}) => {
  return (
    <time dateTime={props.date.toISOString()} className={props.className}>
      {props.date.toLocaleDateString(props.locale, {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })}
    </time>
  );
};
