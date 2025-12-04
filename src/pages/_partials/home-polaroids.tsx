import { lunalink } from '@bearstudio/lunalink';

import { CardStack } from '@/components/ui/card-stack';
import { Polaroid } from '@/components/ui/polaroid';
import { ROUTES } from '@/routes.gen';

export const HomePolaroids = () => {
  return (
    <CardStack cardDimensions={{ width: 260, height: 320 }}>
      <a
        href={lunalink(ROUTES.blog.__path, {})}
        onDragStart={(e) => e.preventDefault()}
      >
        <Polaroid src="/images/forkids-rouen-2.jpeg">
          Fork it! For Kids à Rouen
        </Polaroid>
      </a>
      <a
        href={lunalink(ROUTES.blog.__path, {})}
        onDragStart={(e) => e.preventDefault()}
      >
        <Polaroid src="/images/london-25.jpeg">
          React Advanced Conference London 2026
        </Polaroid>
      </a>
      <a
        href={lunalink(ROUTES.blog.__path, {})}
        onDragStart={(e) => e.preventDefault()}
      >
        <Polaroid src="/images/bearstudio-house.jpeg">La tanière</Polaroid>
      </a>
      <a
        href={lunalink(ROUTES.blog.__path, {})}
        onDragStart={(e) => e.preventDefault()}
      >
        <Polaroid src="/images/ivan-talk-ces-25.jpeg">
          Nos conférences de Codeurs en Seine 2026
        </Polaroid>
      </a>
    </CardStack>
  );
};
