'use client';

import ArrowLeft from './icons/arrow-left.svg';
import ArrowRight from './icons/arrow-right.svg';

// These icons should be arranged alphabetically for easy sorting
const icons = {
  ArrowLeft,
  ArrowRight
};

export type Icons = keyof typeof icons;
interface Props {
  /** Name of the icon as stored in the icons object */
  icon: Icons;
  size?: string;
}
export default function UiIcon({ icon, size = '16' }: Props) {
  const LazyLoadedIcon = icons[icon];
  return (
    <>
      {LazyLoadedIcon && (
        <LazyLoadedIcon style={{ width: size, height: size }} />
      )}
    </>
  );
}
