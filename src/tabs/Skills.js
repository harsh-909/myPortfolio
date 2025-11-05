import React, { forwardRef } from 'react';
import SkillComponent from '../components/SkillComponent';
import '../css/skills.css'
import { nodejs, reactsvg, javascript, cplus, mongodb, mysql, nextjs, css, systemdesign, docker, html,java,spring,springBoot,aws, postgres, Jira,git,github,postMan,testng,Selenium,kubernates,restAPI,elasticsearch,cicd } from '../context.js';

const Skills = forwardRef(() => {
  const skills = {
    java: { prof: 90, logo: java },
    springBoot : { prof: 80, logo: springBoot },
    spring : { prof: 80, logo: spring },
    aws : { prof: 60, logo: aws },
    postgres : { prof: 70, logo: postgres },
    mysql: { prof: 85, logo: mysql },
    systemdesign: { prof: 70, logo: systemdesign },
    Jira : { prof: 70, logo: Jira },
    git : { prof: 80, logo: git },
    github : { prof: 80, logo: github },
    postMan : { prof: 80, logo: postMan },
    testng : { prof: 70, logo: testng },
    selenium : { prof: 70, logo: Selenium },
    docker : { prof: 70, logo: docker },
    kubernates : { prof: 60, logo: kubernates },
    restAPI : { prof: 80, logo: restAPI },
    elasticSearch : { prof: 60, logo: elasticsearch },
    cicd : { prof: 70, logo: cicd },
    nodejs: { prof: 60, logo: nodejs },
    react: { prof: 60, logo: reactsvg },
    javascript: { prof: 80, logo: javascript },
    cplus: { prof: 85, logo: cplus },
    mongodb: { prof: 70, logo: mongodb },
    nextjs: { prof: 50, logo: nextjs },
    css: { prof: 70, logo: css },
    html: { prof: 90, logo: html },
  };

  return (
    <section id="skills" className="p-2 pt-5 pb-5 md:p-10 overflow-x-hidden bg-[#212121] rounded-lg mx-4 md:mx-14 my-10">
  <div className="flex flex-col items-center justify-center gap-4 h-fit">
    <div className='flex flex-col md:flex-row items-center gap-4'>
      <div className='line'></div>
      <h2 className="tab-title">SKILLS</h2>
      <div className='line'></div>
    </div>

    <div className="overflow-hidden w-[100%] sm:w-[90%] h-fit pt-8 md:pt-16 pb-8 md:pb-16 bg-[#0D0D0D] rounded-lg flex items-center">
      <div className={`flex space-x-6 md:space-x-10 w-fit animate-scroll`}>
        {Object.keys(skills).map((skill) => (
          <SkillComponent
            key={skill}
            skillName={skill.toUpperCase()}
            proficiency={skills[skill].prof}
            icon={skills[skill].logo}
          />
        ))}

        {Object.keys(skills).map(skill => (
          <SkillComponent
            key={skill + '-duplicate'}
            skillName={skill}
            proficiency={skills[skill].prof}
            icon={skills[skill].logo}
          />
        ))}
      </div>
    </div>
  </div>
</section>

  );
})


export default Skills;
