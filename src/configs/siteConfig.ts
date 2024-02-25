import { Metadata, Viewport } from "next";

/** Site configuration type. */
type SiteConfig = {
  links: {
    gitlab: string,
    github: string,
    linkedin: string
  },
  metadata: Metadata,
  viewport: Viewport
}

/**
 * Site configuration.
 */
export const config: SiteConfig = {
  links: {
    gitlab: "https://gitlab.com/benhayward.ben",
    github: "https://github.com/bhayward93",
    linkedin: "https://www.linkedin.com/in/ben-hayward",
  },
  metadata: {
    metadataBase: new URL('http://benhayward.net'),
    title: 'Ben Hayward',
    description: 'Portfolio of a fullstack web developer and FOSS advocate',
    applicationName: 'Ben Hayward',
    authors: [{name: 'Ben Hayward'}],
    generator: 'Next.js',
    keywords: [
      'web design',
      'web developer',
      'full stack developer',
      'fullstack developer',
      'responsive web design',
      'blockchain developer',
      'decentralized technologies'
    ],
    creator: 'Ben Hayward',
    publisher: 'Ben Hayward',
    robots: 'all',
    icons: [
      {
        url: '/favicon.ico',
        sizes: '64x64 32x32 24x24 16x16',
        type: 'image/x-icon',
      }
    ],
    openGraph: {
      type: 'website',
      locale: 'en_GB',
      url: 'https://benhayward.net/',
      siteName: 'Ben Hayward',
      title: 'Ben Hayward',
      description: 'Portfolio of a fullstack web developer and FOSS advocate',
      images: [
        {
          url: '/favicon.ico',
          width: 64,
          height: 64,
          alt: 'Ben Hayward',
        },
        {
          url: '/meta/og-image.png',
          width: 1200,
          height: 630,
          alt: 'Ben Hayward'
        }
      ],
    },
    twitter: {
      title: 'Ben Hayward',
      card: 'summary_large_image',
      description: 'Portfolio of a fullstack web developer and FOSS advocate',
      images: [
        {
          url: '/favicon.ico',
          width: 64,
          height: 64,
          alt: 'Ben Hayward',
  
        },
        {
          url: '/meta/og-image.png',
          width: 1200,
          height: 630,
          alt: 'Ben Hayward'
        }
      ],
    }
  },
  viewport: {
    themeColor: "#8F00FF",
    colorScheme: "only light"
  }
}