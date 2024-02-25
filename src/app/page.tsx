import AboutSection from '../components/about-section/about-section'
import ContactSection from '../components/contact-section/contact-section'
import LandingSection from '../components/landing-section/landing-section'
import SkillsSection from '../components/skills-section/skills-section'

/**
 * Home page.
 * @returns { React.ReactNode }
 */
export default function Home(): React.ReactNode {
  return (
    <main className="min-h-screen flex-col">
      <LandingSection></LandingSection>
      <AboutSection></AboutSection>
      <SkillsSection></SkillsSection>
      <ContactSection></ContactSection>
    </main>
  )
}
