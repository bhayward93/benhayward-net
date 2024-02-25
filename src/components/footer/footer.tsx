"use client"
import { Link as ReactScrollLink } from "react-scroll";
import { config } from "../../configs/siteConfig";
import { GitHubIcon, GitLabIcon, LinkedInIcon } from "../icons/icons";
import Link from "next/link";
import { ReactNode } from "react";

/**
 * Footer component for the bottom of the page.
 * @returns { ReactNode } footer component.
 */
export const Footer = (): ReactNode => {
    return (
        <footer className="footer items-center p-4 bg-primary text-white justify-center md:justify-around">
            <aside className="items-center grid-flow-col">
                <ReactScrollLink
                    to="home"
                    className="cursor-pointer hidden xs:block items-center md:items-start my-auto ml-[1rem] sm:ml-[3rem] md:ml-[5rem] mr-[42px] md:mr-[200px] font-handwritten-regular text-4xl text-white"
                    spy={true}
                    smooth={true}
                    duration={500}
                    >BH</ReactScrollLink
                >
                <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </aside>
            <nav className="grid-flow-col gap-4 justify-self-center md:place-self-center md:justify-self-end">
                <Link className="m-auto hover:opacity-60s" href={config.links.gitlab} target="_blank">
                    <GitLabIcon fillColor="#fff" height="24" width="24"></GitLabIcon>
                </Link>
                <Link className="m-auto hover:opacity-60" href={config.links.github} target="_blank">
                    <GitHubIcon fillColor="#fff" height="24" width="24"></GitHubIcon>
                </Link>
                <Link className="m-auto hover:opacity-60" href={config.links.linkedin} target="_blank">
                    <LinkedInIcon fillColor="#fff" height="24" width="24"></LinkedInIcon>
                </Link>
            </nav>
        </footer>
    )
}