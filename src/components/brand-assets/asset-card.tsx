import { cn } from '@/lib/tailwind/utils';
import { Button } from '@/components/ui/button';

export interface AssetCardProps {
  type: 'logo' | 'icon';
  color: 'black' | 'white' | 'blue' | 'yellow';
  withBackground?: boolean;
  alt: string;
}

export function AssetCard({
  type,
  color,
  withBackground = false,
  alt,
}: AssetCardProps) {
  const pathWithoutExt = `/logo-assets/bearstudio_${type}_${color}${
    withBackground ? '-with-bg' : ''
  }`;

  return (
    <div
      className={cn(
        'relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-muted',
        withBackground && 'border border-white/10 '
      )}
    >
      <img
        src={`${pathWithoutExt}.svg`}
        alt={alt}
        className="w-full overflow-hidden"
      />
      <div className="flex w-full items-center justify-center gap-2 p-2">
        <Button size="sm" asChild className="flex-1" variant="secondary">
          <a href={`${pathWithoutExt}.svg`} download>
            SVG
          </a>
        </Button>
        {!withBackground && (
          <Button size="sm" asChild className="flex-1" variant="secondary">
            <a href={`${pathWithoutExt}.png`} download>
              PNG
            </a>
          </Button>
        )}
        {withBackground && (
          <Button size="sm" asChild className="flex-1" variant="secondary">
            <a href={`${pathWithoutExt}.jpg`} download>
              JPG
            </a>
          </Button>
        )}
      </div>
    </div>
  );
}
