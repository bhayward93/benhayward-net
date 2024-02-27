import Image from "next/image";
import Wave from "react-wavify";
import { FlipCard } from "../flip-card/flip-card";
import ProjectsCarousel from "../projects-carousel/projects-carousel";
import { ReactNode } from "react";

/**
 * Skills section - contains flip cards that display various skills.
 * @returns { ReactNode } - The skills section.
 */
export default function SkillsSection(): ReactNode {
  return (
    <>
      <section id="skills" className="min-h-[80vh] bg-primary flex flex-col md:justify-around align-center">
        <FlipCards/>
        <Wave
          className="h-[20vh] w-screen min-w-screen mb-[-2px]"
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
      <section className="flex justify-center px-0 xl:px-52 4xl:translate-y-[-100px]">
        <ProjectsCarousel></ProjectsCarousel>
      </section>
    </>
  )
}

const flipCardClass: string = "h-[200px] w-[300px] 4xl:h-[300px] 4xl:w-[500px] bg-white rounded-lg";

/**
 * Flip cards for the skills section.
 * @returns { ReactNode } - The flip cards.
 */
const FlipCards = (): ReactNode => {
  return (
    <div className="h-full container m-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12 pb-16 pt-24 px-16 md:px-28 lg:px-52">
      <FlipCard
        className={flipCardClass}
        title="Angular"
        description="My primary front-end framework."
        showTouchIconMobile={true}
      >
        <Image src="skill_logos/ng.svg" alt="Angular" width={180} height={200} style={{width: 180, height: 200}} loading="lazy"></Image>
      </FlipCard>
      <FlipCard
        className={flipCardClass}
        title="React"
        description="This website is built with React and Next!"
      >
        <Image src="skill_logos/react.svg" alt="React" width={160} height={200} loading="lazy" style={{width: 160, height: 200}}></Image>
      </FlipCard>
      <FlipCard
        className={flipCardClass}
        title="HTML5 CSS3"
        description="The essential tools for all front-end work."
      >
        <Image src="skill_logos/html-css.svg" alt="HTML5 and CSS3" width={200} height={200} style={{width: 200, height: 200}} loading="lazy"></Image>
      </FlipCard>
      <FlipCard
        className={flipCardClass}
        title="PHP"
        description="Robust, effective, and gets the job done."
      >
        <Image src="skill_logos/php.svg" alt="PHP" width={200} height={200} style={{width: 200, height: 200}} loading="lazy"></Image>
      </FlipCard>
      <FlipCard
        className={flipCardClass}
        title="Node.js"
        description="Perfect for those small, light services."
      >
        <Image src="skill_logos/node.svg" alt="Node JS" width={140} height={140} style={{width: 140, height: 140}} loading="lazy"></Image>
      </FlipCard>
      <FlipCard
        className={flipCardClass}
        title="GraphQL"
        description="I'm enjoying GraphQL right now, though I do JSON REST too..."
      >
        <Image src="skill_logos/gql.svg" alt="GraphQL" width={160} height={160} style={{width: 140, height: 140}} loading="lazy"></Image>
      </FlipCard>
      <FlipCard
        className={flipCardClass}
        title="Linux"
        description="Ubuntu (with i3) is my daily driver. Much productivity."
      >
        <Image src="skill_logos/tux.svg" alt="Linux" width={120} height={120} style={{width: 120, height: 120}} loading="lazy"></Image>
      </FlipCard>
      <FlipCard
        className={flipCardClass}
        title="Kubernetes"
        description="Container orchestration at scale, adding that extra spice in my life."
      >
        <Image src="skill_logos/k8s.svg" alt="Linux" width={160} height={160} style={{width: 160, height: 160}} loading="lazy"></Image>
      </FlipCard>
      <FlipCard
        className={flipCardClass}
        title="Docker"
        description="Consistency across all environments is key."
      >
        <Image src="skill_logos/docker.svg" alt="Linux" width={160} height={160} style={{width: 160, height: 160}} loading="lazy"></Image>
      </FlipCard>
    </div>
  );
}