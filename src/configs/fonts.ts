import { NextFontWithVariable } from 'next/dist/compiled/@next/font'
import { Liu_Jian_Mao_Cao, Open_Sans, Ubuntu } from 'next/font/google'

// Fonts used in the project.

const headingBold: NextFontWithVariable = Ubuntu({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-heading-bold'
});

const headingMedium: NextFontWithVariable = Ubuntu({
  subsets: ['latin'],
  weight: '500',
  variable: '--font-heading-medium'
});

const headingRegular: NextFontWithVariable = Ubuntu({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-heading-regular'
});

const bodyRegular: NextFontWithVariable = Open_Sans({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-body-regular'
});

const handwrittenRegular: NextFontWithVariable = Liu_Jian_Mao_Cao({
  subsets: ['latin'],
  weight: '400',
  preload: true,
  variable: '--font-handwritten-regular',
});

export const fonts = {
  headingBold,
  headingMedium,
  headingRegular,
  bodyRegular,
  handwrittenRegular
};

export const fontClasses: string = `
  ${fonts.handwrittenRegular.variable} 
  ${fonts.headingBold.variable} 
  ${fonts.headingMedium.variable} 
  ${fonts.headingRegular.variable} 
  ${fonts.bodyRegular.variable} 
`;