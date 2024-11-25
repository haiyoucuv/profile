import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc/SectionWrapper.tsx";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  return <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>;
};

export const About = SectionWrapper(() => {
  return <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>介绍</p>
      <h2 className={styles.sectionHeadText}>概述</h2>
    </motion.div>

    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
    >
      我是一名经验丰富的软件开发工程师，熟悉 Cocos、ThreeJS、Egret 等 2 / 3D 游戏引擎以及对接各种物理引擎、三方库等，
      熟练使用 React 等前端开发框架，熟练掌握 TypeScript / JavaScript 开发语言，
      掌握 NodeJs、Vite、Webpack 等工程化工具。<br/>
      勇于探索学习并尝试前沿技术 学习能力强，能与客户密切合作，善于创建高效、可扩展、用户友好的解决方案来解决现实世界的问题，且擅长解决疑难杂症。
    </motion.p>

    <div className="mt-20 flex flex-wrap gap-10">
      {services.map((service, index: number) => (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div>
  </>;
}, "about");
