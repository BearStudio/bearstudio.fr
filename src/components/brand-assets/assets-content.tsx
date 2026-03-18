import { getTranslationFn } from '@/i18n/utils';
import type { Locale } from '@/i18n/utils';

import { AssetCard } from './asset-card';

export interface AssetsContentProps {
  locale: Locale;
}

const COLORS = ['black', 'white', 'yellow', 'blue'] as const;

export function AssetsContent({ locale }: AssetsContentProps) {
  const t = getTranslationFn(locale);
  const sections = {
    logoWithoutBg: {
      title: t('brandAssets.root.sections.logoWithoutBg.title'),
      description: t('brandAssets.root.sections.logoWithoutBg.description'),
      usage: t('brandAssets.root.sections.logoWithoutBg.usage'),
    },
    logoWithBg: {
      title: t('brandAssets.root.sections.logoWithBg.title'),
      description: t('brandAssets.root.sections.logoWithBg.description'),
      usage: t('brandAssets.root.sections.logoWithBg.usage'),
    },
    iconWithoutBg: {
      title: t('brandAssets.root.sections.iconWithoutBg.title'),
      description: t('brandAssets.root.sections.iconWithoutBg.description'),
      usage: t('brandAssets.root.sections.iconWithoutBg.usage'),
    },
    iconWithBg: {
      title: t('brandAssets.root.sections.iconWithBg.title'),
      description: t('brandAssets.root.sections.iconWithBg.description'),
      usage: t('brandAssets.root.sections.iconWithBg.usage'),
    },
  };

  return (
    <div className="flex flex-col gap-12">
      <section className="flex flex-col gap-4">
        <div>
          <h2 className="font-heading text-2xl font-bold">
            {sections.logoWithoutBg.title}
          </h2>
          <p className="mt-1 max-w-[60ch] text-sm opacity-80">
            {sections.logoWithoutBg.description}
          </p>
          <p className="mt-1 max-w-[60ch] text-xs opacity-80">
            {sections.logoWithoutBg.usage}
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {COLORS.map((color) => (
            <AssetCard
              key={color}
              type="logo"
              color={color}
              alt={t('brandAssets.root.alts.logo', {
                color: t(`brandAssets.root.labels.${color}`),
              })}
            />
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <div>
          <h2 className="font-heading text-2xl font-bold">
            {sections.logoWithBg.title}
          </h2>
          <p className="mt-1 max-w-[60ch] text-sm opacity-80">
            {sections.logoWithBg.description}
          </p>
          <p className="mt-1 max-w-[60ch] text-xs opacity-80">
            {sections.logoWithBg.usage}
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {COLORS.map((color) => (
            <AssetCard
              key={color}
              type="logo"
              color={color}
              withBackground
              alt={t('brandAssets.root.alts.logoWithBg', {
                color: t(`brandAssets.root.labels.${color}`),
              })}
            />
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <div>
          <h2 className="font-heading text-2xl font-bold">
            {sections.iconWithoutBg.title}
          </h2>
          <p className="mt-1 max-w-[60ch] text-sm opacity-80">
            {sections.iconWithoutBg.description}
          </p>
          <p className="mt-1 max-w-[60ch] text-xs opacity-80">
            {sections.iconWithoutBg.usage}
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {COLORS.map((color) => (
            <AssetCard
              key={color}
              type="icon"
              color={color}
              alt={t('brandAssets.root.alts.icon', {
                color: t(`brandAssets.root.labels.${color}`),
              })}
            />
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <div>
          <h2 className="font-heading text-2xl font-bold">
            {sections.iconWithBg.title}
          </h2>
          <p className="mt-1 max-w-[60ch] text-sm opacity-80">
            {sections.iconWithBg.description}
          </p>
          <p className="mt-1 max-w-[60ch] text-xs opacity-80">
            {sections.iconWithBg.usage}
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {COLORS.map((color) => (
            <AssetCard
              key={color}
              type="icon"
              color={color}
              withBackground
              alt={t('brandAssets.root.alts.iconWithBg', {
                color: t(`brandAssets.root.labels.${color}`),
              })}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
