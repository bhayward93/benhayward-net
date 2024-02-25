"use client"

import { Link } from "react-scroll";
import { ReactNode } from "react";
import { useWindowDimensions } from "../../hooks/use-window-dimensions-hook";

/** Link classes. */
const linkClasses: string = "font-heading-regular text-xl cursor-pointer";

/**
 * Top navigation bar.
 * @returns { ReactNode } top navigation bar.
 */
export const TopNav = (): ReactNode => {
  /** Window dimensions hook. */
  const { width } = useWindowDimensions();

  return (
    <nav className="w-full z-50 h-[50px] flex bg-primary fixed top-0">
      <Link
        to="home"
        href="/"
        className="cursor-pointer hidden xs:block items-center md:items-start my-auto ml-[1rem] sm:ml-[3rem] md:ml-[5rem] mr-[42px] md:mr-[200px] font-handwritten-regular text-4xl text-white"
        spy={true}
        smooth={true}
        duration={500}
        >BH</Link
      >
      <div className="flex items-center justify-center md:justify-start gap-[42px] w-full text-white">
        <Link
          to="about"
          href="/"
          className={linkClasses}
          spy={true}
          smooth={true}
          duration={500}
          offset={ width && width > 500 ? -200 : -100 }
          >About</Link
        >
        <Link
          to="skills"
          href="/"
          className={linkClasses}
          spy={true}
          smooth={true}
          duration={500}
          >Skills</Link
        >
        <Link
          to="contact"
          href="/"
          className={linkClasses}
          spy={true}
          smooth={true}
          duration={500}
          offset={-200}
          
          >Contact</Link
        >
      </div>
    </nav>
  )
}