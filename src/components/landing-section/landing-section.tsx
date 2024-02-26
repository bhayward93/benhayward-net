import Wave from 'react-wavify';
import Image from "next/image";
import { HorizontalLinks } from "../horizontal-links/horizontal-links";
import { SubtitleTypeAnimation } from "./subtitle-type-animation/type-animation";
import { ReactNode } from 'react';

/**
 * Landing section - the top of the homepage.
 * @returns { ReactNode } - The landing section.
 */
export default function LandingSection(): ReactNode {
  const bracketDecorationClass: string = 'font-handwritten-regular hidden sm:block text-[45vw] sm:text-[350px] lg:text-[420px] 4xl:text-[800px] text-tertiary select-none';

  return (
    <section className="h-screen" id="home">
      <div className="h-[100vh] bg-primary">
        <section className="h-[60vh] md:h-[80vh] flex flex-col items-center justify-center 2xl:ml-40 pt-[200px] md:pt-0">
          <div className="flex items-center justify-center">
            <p className={bracketDecorationClass}>{'{'}</p>
            <header className="flex flex-col justify-center gap-4">
              <h1 className="text-5xl xs:text-6xl sm:text-6xl md:text-7xl lg:text-8xl 4xl:text-[10rem] font-heading-bold leading-[4rem] 4xl:leading-[10rem] lg:leading-[7.5rem] bg-white text-primary w-fit sm:whitespace-nowrap mt-16">Ben Hayward</h1>
              <SubtitleTypeAnimation
                className="text-3xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl 4xl:text-[6rem] font-body-regular text-white text-center sm:text-start text-nowrap"
              />            
            </header>
            <p className={bracketDecorationClass}>{'}'}</p>
          <div className="relative hidden mt-28 ml-20 2xl:block h-[372px] w-[400px] 3xl:h-[600px] 3xl:w-[600px] 4xl:h-[800px] 4xl:w-[800px]">
              <Image src="/abtract-person-laptop.png" alt="abstract person" fill objectFit="rcover"></Image>
            </div>
          </div>
          <HorizontalLinks className="flex xl:hidden mt-32 md:mt-8 w-full md:w-2/4"></HorizontalLinks>
        </section>
      </div>
      <Wave
        className="translate-y-[-100%] h-[200px] mb-[-2px]"
        fill='#FFFFF0'
        paused={false}
        style={{ display: 'flex' }}
        options={{
          height: 80,
          amplitude: 40,
          speed: 0.15,
          points: 3
        }}
      />
    </section>
  )
}
