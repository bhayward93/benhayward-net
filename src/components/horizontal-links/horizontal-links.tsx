import { GitLabIcon, GitHubIcon, LinkedInIcon } from "../icons/icons";
import { config } from "../../configs/siteConfig";
import { HTMLProps, ReactNode } from "react";
import Link from "next/link";

/** Props for horizontal links component. */
type HorizontalLinksProps =  Pick<HTMLProps<HTMLElement>, 'className'>;

/**
 * Horizontal links component. Intended to be used when the viewport is too narrow
 * for the fixed sidebar link icons.
 * @param { HorizontalLinksProps } props - component props.
 * @returns { ReactNode } horizontal links component.
 */
export const HorizontalLinks = ({ className }: HorizontalLinksProps): ReactNode => {
  return (
    <div className={`transparent flex flex-row align-center space-between ${className}`}>
      <Link className="m-auto" href={config.links.gitlab} target="_blank">
        <GitLabIcon fillColor="#ffffff"></GitLabIcon>
      </Link>
      <Link className="m-auto" href={config.links.github} target="_blank">
        <GitHubIcon fillColor="#ffffff"></GitHubIcon>
      </Link>
      <Link className="m-auto" href={config.links.linkedin} target="_blank">
        <LinkedInIcon fillColor="#ffffff"></LinkedInIcon>
      </Link>
    </div>
  )
}