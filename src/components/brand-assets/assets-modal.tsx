import dayjs from 'dayjs';

import {
  ResponsiveDrawer,
  ResponsiveDrawerContent,
  ResponsiveDrawerDescription,
  ResponsiveDrawerHeader,
  ResponsiveDrawerTitle,
} from '@/components/ui/responsive-drawer';
import { getTranslationFn } from '@/i18n/utils';
import type { Locale } from '@/i18n/utils';

import { AssetsContent } from './assets-content';

interface BrandAssetsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  locale: Locale;
}

export const BrandAssetsModal = ({
  open,
  onOpenChange,
  locale,
}: BrandAssetsModalProps) => {
  const t = getTranslationFn(locale);

  return (
    <ResponsiveDrawer open={open} onOpenChange={onOpenChange}>
      <ResponsiveDrawerContent className="max-h-[90vh] md:min-w-3xl max-w-3xl">
        <ResponsiveDrawerHeader>
          <ResponsiveDrawerTitle>
            {t('brandAssets.root.modal.title')}
          </ResponsiveDrawerTitle>
          <ResponsiveDrawerDescription>
            {t('brandAssets.root.modal.description')}
          </ResponsiveDrawerDescription>
        </ResponsiveDrawerHeader>
        <div className="max-h-[80vh] overflow-auto max-sm:overflow-auto sm:max-h-[80vh]">
          <AssetsContent locale={locale} />
          <div className="border-t py-4 mt-6 pt-6 text-center text-xs text-gray-500 max-sm:pb-8">
            {t('brandAssets.root.modal.copyright', {
              year: String(dayjs().year()),
            })}
          </div>
        </div>
      </ResponsiveDrawerContent>
    </ResponsiveDrawer>
  );
};
