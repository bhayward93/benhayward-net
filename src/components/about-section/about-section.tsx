"use client"

import Wave from 'react-wavify';
import { EyeCircle } from "../eye-circle/eye-circle";
import { motion } from "framer-motion"
import { ReactNode } from 'react';

/**
 * About section - quick summary of myself.
 * @returns { ReactNode }
 */
export default function AboutSection(): ReactNode {
  return (
    <>
      <section className="md:min-h-[60vh] max-w-screen bg-white flex flex-row justify-center align-center items-center gap-[10vw] px-8 sm:px-16 md:px-28 lg:px-80" id="about">
        <div className="grow-2 min-h-fit">
          <div className="font-body-regular text-black text-lg sm:text-2xl 4xl:text-5xl max-w-[800px] 4xl:max-w-[1000px]">
            <p className="block mb-4">I'm Ben! I'm a full-stack developer from the UK with a passion for software development across a variety of frameworks and languages, such as Typescript and PHP. I also reguarly find myself in dev-ops land playing with Kubernetes and Helm. I am a big advocate for FOSS, love Linux and enjoy tinkering with new technologies in my spare time.</p>
            <p>I've made this site to act as a kind of playground for me to quickly try out and prototype new ideas. If anybody wants to connect, please do reach out and say hello!</p>
          </div>
        </div>
        <motion.div
          className="hidden 2xl:flex items-center"
          initial={{
            rotate: "0deg",
            x: 500,
          }}
          whileInView={{
            x: 0,
            rotate: "-720deg",
            transition: {
              duration: 3,
              ease: "easeOut"
            }
          }}
          whileHover={{
            scale: 1.1,
            transition: {
              duration: 0.3
            }
          }}
        >
          <EyeCircle></EyeCircle>
        </motion.div>
      </section>
      <Wave
        className="h-[20vh] bg-white"
        fill='#8F00FF'
        paused={false}
        style={{ display: 'flex' }}
        options={{
          height: 80,
          amplitude: 40,
          speed: 0.15,
          points: 3
        }}
      />
    </>
  )
}