import 'twin.macro';
import { css as cssImport } from '@emotion/react';

declare module 'twin.macro' {
  const css: typeof cssImport;
}
