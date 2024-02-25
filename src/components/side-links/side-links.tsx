import { GitLabIcon, GitHubIcon, LinkedInIcon } from "../icons/icons";
import { config } from "../../configs/siteConfig";
import { HTMLProps, ReactNode } from "react";
import Link from "next/link";

/** Props for the side links. */
type SideLinksProps = Pick<HTMLProps<HTMLElement>, 'className'>;

/**
 * Side links.
 * @param { SideLinksProps } props - Props for the side links.
 * @returns { ReactNode } - The side links.
 */
export const SideLinks = ({ className }: SideLinksProps): ReactNode => {
  return (
    <div className={`transparent flex flex-col align-center gap-8 opacity-70 ${className}`}>
      <p className="text-center text-8xl text-black select-none">|</p>
      <Link className="m-auto" href={config.links.gitlab} target="_blank" aria-label="Gitlab link">
        <GitLabIcon fillColor="#010100"></GitLabIcon>
      </Link>
      <Link className="m-auto" href={config.links.github} target="_blank" aria-label="Github link">
        <GitHubIcon fillColor="#010100"></GitHubIcon>
      </Link>
      <Link className="m-auto" href={config.links.linkedin} target="_blank" aria-label="LinkedIn link">
        <LinkedInIcon fillColor="#010100"></LinkedInIcon>
      </Link>
      <p className="text-center text-8xl text-black select-none">|</p>
    </div>
  )
}