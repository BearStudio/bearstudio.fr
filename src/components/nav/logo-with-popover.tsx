import { useState, type MouseEvent } from 'react';

import { lunalink } from '@bearstudio/lunalink';
import { PiImagesDuotone } from 'react-icons/pi';

import { BrandAssetsModal } from '@/components/brand-assets';
import { Logo } from '@/components/ui/logo';
import {
  Popover,
  PopoverAnchor,
  PopoverContent,
} from '@/components/ui/popover';
import type { Locale } from '@/i18n/utils';
import { getTranslationFn } from '@/i18n/utils';
import { ROUTES } from '@/routes.gen';

export const LogoWithPopover = (props: { locale: Locale }) => {
  const [showPopover, setShowPopover] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const t = getTranslationFn(props.locale);

  const handleContextMenu = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setShowPopover(true);
  };

  const handleOpenModal = () => {
    setShowPopover(false);
    setTimeout(() => setShowModal(true), 0);
  };

  const rightClickPopoverItems = [
    {
      label: t('brandAssets.root.popover.logoAssets'),
      icon: PiImagesDuotone,
      isModalTrigger: true,
    },
  ];

  return (
    <>
      <Popover open={showPopover} onOpenChange={setShowPopover}>
        <PopoverAnchor asChild>
          <a
            href={lunalink(ROUTES[props.locale].__path, {})}
            className="flex py-2"
            title={
              props.locale === 'fr'
                ? "Page d'accueil BearStudio"
                : 'BearStudio home page'
            }
            onContextMenu={handleContextMenu}
          >
            <Logo className="-mt-0.5 w-28" />
          </a>
        </PopoverAnchor>
        <PopoverContent
          className="w-56 border-none bg-brand-800 px-2 py-2 text-white"
          side="top"
          align="start"
          sideOffset={8}
        >
          {rightClickPopoverItems.map((item) => {
            const commonClasses =
              'flex items-center gap-3 rounded px-3 py-2.5 opacity-80 transition hover:bg-black/30 hover:opacity-100 cursor-pointer';
            return (
              <div
                key={item.label}
                className={commonClasses}
                role="button"
                tabIndex={0}
                onClick={handleOpenModal}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleOpenModal();
                  }
                }}
              >
                <span className="text-xl">
                  <item.icon />
                </span>
                <span className="text-sm tracking-wide">{item.label}</span>
              </div>
            );
          })}
        </PopoverContent>
      </Popover>
      <BrandAssetsModal
        open={showModal}
        onOpenChange={setShowModal}
        locale={props.locale}
      />
    </>
  );
};
