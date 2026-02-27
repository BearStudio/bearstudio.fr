import 'react';

declare module 'react' {
  interface HTMLAttributes {
    tw?: string | undefined;
  }
  interface SVGAttributes {
    tw?: string | undefined;
  }
}
