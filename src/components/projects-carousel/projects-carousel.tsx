"use client"

import 'react-multi-carousel/lib/styles.css';
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";
import Carousel, { CarouselProps, ResponsiveType } from 'react-multi-carousel';

type ProjectCarouselProps = Pick<CarouselProps, 'className'>;

/**
 * Projects carousel props.
 * @param { ProjectCarouselProps } props - Props for the projects carousel.
 * @returns { ReactNode } - The projects carousel.
 */
export default function ProjectsCarousel({ className }: ProjectCarouselProps): ReactNode {
  const responsive: ResponsiveType = {
    xl: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    lg: {
      breakpoint: { max: 3000, min: 1280 },
      items: 3
    },
    md: {
      breakpoint: { max: 1280, min: 768 },
      items: 2
    },
    sm: {
      breakpoint: { max: 768, min: 0 },
      items: 1
    }
  };

  /** Classes for item. */
  const itemClass: string = "m-auto max-h-[60px] w-auto max-w-screen select-none hover:grayscale cursor-pointer"

  return (
    <div className="flex flex-col">
      <Carousel
        className={`text-black w-[100vw] h-[150px] ${className}`}
        swipeable={true}
        centerMode={false}
        draggable={true}
        arrows={false}
        showDots={false}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        customTransition="all 1000ms"
        transitionDuration={1000}
      >
        <Link href="https://www.minds.com/" target="_blank">
          <Image className={itemClass} src="/brand_logos/minds.svg" draggable={false} width={180} height={200} alt="Minds"/>
        </Link>
        <Link href="https://arcadia.agency/" target="_blank">
          <Image className={itemClass} src="/brand_logos/arcadia_logo.png" draggable={false} width={260} height={300} alt="Arcadia Media Group"/>
        </Link>
        <Link href="https://pharmadoctor.co.uk/" target="_blank">
          <Image className={itemClass} src="/brand_logos/pharmadoctor_logo.png" draggable={false} width={600} height={80} alt="Pharmadoctor"/>
        </Link>
        <Link href="https://www.linkedin.com/company/nvestgroups/about" target="_blank">
          <Image className={itemClass} src="/brand_logos/nvest_logo.png" draggable={false} width={220} height={300} alt="Nvest"/>
        </Link>
        <Link href="https://www.linkedin.com/company/gravitichaincom/" target="_blank">
          <Image className={itemClass} src="/brand_logos/gravitichain_logo.png" draggable={false} width={400} height={400} alt="Gravitichain"/>
        </Link>
        <Link href="https://www.tees.ac.uk/" target="_blank">
          <Image className={itemClass} src="/brand_logos/tsu_logo.png" draggable={false} width={180} height={400} alt="Teesside University"/>
        </Link>
      </Carousel>
    </div>
  )
}