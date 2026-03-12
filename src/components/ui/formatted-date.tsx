import type { Locale } from '@/i18n/utils';

export const FormattedDate = (props: {
  locale: Locale;
  date: Date;
  className?: string;
}) => {
  return (
    <time
      dateTime={props.date.toISOString()}
      className={props.className}
      // toLocaleDateString() can produce different output between Node.js (SSR)
      // and the browser due to ICU/timezone differences, causing React error #418.
      suppressHydrationWarning
    >
      {props.date.toLocaleDateString(props.locale, {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })}
    </time>
  );
};
