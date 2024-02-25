"use client";

import { HTMLProps, ReactNode } from 'react';
import { TypeAnimation } from 'react-type-animation';

/** Props for the animated subtitle. */
type SubtitleTypeAnimation = Pick<HTMLProps<HTMLElement>, 'className'>;

/**
 * Animated Subtitle.
 * @param { SubtitleTypeAnimation } props - Props for the animted subtitle.
 * @returns { ReactNode } - The animtated subtitle.
 */
export const SubtitleTypeAnimation = ({ className }: SubtitleTypeAnimation): ReactNode => {
  return (
    <TypeAnimation
      className={className}
      sequence={[
        'Front-end',
        500,
        'Back-end',
        500,
        'Full-stack Developer'
      ]}
      wrapper="span"
      speed={50}
    />
  );
}