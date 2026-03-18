import { getTranslationFn } from '@/i18n/utils';
import type { Locale } from '@/i18n/utils';

import { AssetCard } from './asset-card';

export interface AssetsContentProps {
  locale: Locale;
}

export function AssetsContent({ locale }: AssetsContentProps) {
  const t = getTranslationFn(locale);
  const sections = {
    logoWithoutBg: {
      title: t('brandAssets.root.sections.logoWithoutBg.title'),
      description: t('brandAssets.root.sections.logoWithoutBg.description'),
    },
    logoWithBg: {
      title: t('brandAssets.root.sections.logoWithBg.title'),
      description: t('brandAssets.root.sections.logoWithBg.description'),
    },
    iconWithoutBg: {
      title: t('brandAssets.root.sections.iconWithoutBg.title'),
      description: t('brandAssets.root.sections.iconWithoutBg.description'),
    },
    iconWithBg: {
      title: t('brandAssets.root.sections.iconWithBg.title'),
      description: t('brandAssets.root.sections.iconWithBg.description'),
    },
  };

  return (
    <div className="flex flex-col gap-16">
      <section className="flex flex-col gap-6">
        <div>
          <h2 className="font-heading text-2xl font-bold">
            {sections.logoWithoutBg.title}
          </h2>
          <p className="mt-1 max-w-[60ch] text-sm opacity-80">
            {sections.logoWithoutBg.description}
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <AssetCard type="logo" color="black" alt="BearStudio logo black" />
          <AssetCard type="logo" color="white" alt="BearStudio logo white" />
          <AssetCard type="logo" color="yellow" alt="BearStudio logo yellow" />
          <AssetCard type="logo" color="blue" alt="BearStudio logo blue" />
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <div>
          <h2 className="font-heading text-2xl font-bold">
            {sections.logoWithBg.title}
          </h2>
          <p className="mt-1 max-w-[60ch] text-sm opacity-80">
            {sections.logoWithBg.description}
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <AssetCard
            type="logo"
            color="black"
            withBackground
            alt="BearStudio logo black with background"
          />
          <AssetCard
            type="logo"
            color="white"
            withBackground
            alt="BearStudio logo white with background"
          />
          <AssetCard
            type="logo"
            color="yellow"
            withBackground
            alt="BearStudio logo yellow with background"
          />
          <AssetCard
            type="logo"
            color="blue"
            withBackground
            alt="BearStudio logo blue with background"
          />
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <div>
          <h2 className="font-heading text-2xl font-bold">
            {sections.iconWithoutBg.title}
          </h2>
          <p className="mt-1 max-w-[60ch] text-sm opacity-80">
            {sections.iconWithoutBg.description}
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <AssetCard type="icon" color="black" alt="BearStudio icon black" />
          <AssetCard type="icon" color="white" alt="BearStudio icon white" />
          <AssetCard type="icon" color="yellow" alt="BearStudio icon yellow" />
          <AssetCard type="icon" color="blue" alt="BearStudio icon blue" />
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <div>
          <h2 className="font-heading text-2xl font-bold">
            {sections.iconWithBg.title}
          </h2>
          <p className="mt-1 max-w-[60ch] text-sm opacity-80">
            {sections.iconWithBg.description}
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <AssetCard
            type="icon"
            color="black"
            withBackground
            alt="BearStudio icon black with background"
          />
          <AssetCard
            type="icon"
            color="white"
            withBackground
            alt="BearStudio icon white with background"
          />
          <AssetCard
            type="icon"
            color="yellow"
            withBackground
            alt="BearStudio icon yellow with background"
          />
          <AssetCard
            type="icon"
            color="blue"
            withBackground
            alt="BearStudio icon blue with background"
          />
        </div>
      </section>
    </div>
  );
}
