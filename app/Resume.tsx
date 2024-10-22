import React from "react";
import style from "/styles/global.module.css"; 
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faBook, faSeedling } from '@fortawesome/free-solid-svg-icons';

export default function Resume() {
  return (
    <>
    <h1 className={style.Resume}> Resume</h1>
  
    <div className={style.container}> 
      <div className={style.div}>
        
        <h1 className={style.name}><strong>Ambreen <br /> Jahan</strong></h1>
        <p className={style.design}>Web Designer</p>
        < Image className={style.image} src="/image.jpg" alt="Ambreen Jahan" width={200} height={100} />
        
        <h2 className={style.About}>About Me</h2>
        <p className={style.work}>I am a web designer. <br /> I also work as a freelancer.</p>
      
        <h2 className={style.Contact}>Contact Me</h2>
        <FontAwesomeIcon className={style.icon} icon={faPhone} height={20} width={30} /><span> 031-67541323 / 021-63567389</span> <br />
        <FontAwesomeIcon className={style.icon} icon={faEnvelope} height={20} width={30} /><span> sana123@gmail.com</span>

        <h1 className={style.Language}>Languages</h1>
        <ul>
          <li className={style.font}>English</li>
          <li className={style.font}>Arabic</li>
        </ul>
      </div>

      <div className={style.div2}>
        <h1 className={style.Education}>Education</h1>
        <ul>
          <li className={style.font}>Master in Data Science</li>
          <li className={style.font}>Bachelor&apos;s in Data Science</li>
        </ul>

        <h1 className={style.Experience}>Experience</h1>
        <ul>
          <li className={style.font}>Senior Software Developer</li>
          <li className={style.font}>Senior Web Developer</li>
        </ul>

        <h1 className={style.Skills}>Skills</h1>
        <ul>
          <li className={style.font}>HTML</li>
          <li className={style.font}>CSS</li>
          <li className={style.font}>TypeScript</li>
          <li className={style.font}>Next.js</li>
          <li className={style.font}>Tailwind CSS</li>
          <li className={style.font}>Figma</li>
        </ul>

        <h1 className={style.Hobbies}>Hobbies</h1>
        <div>
          <FontAwesomeIcon className={style.icon} icon={faBook} height={20} width={30} /><span className={style.font}> Reading</span>
        </div>
        <div>
          <FontAwesomeIcon className={style.icon} icon={faSeedling} height={20} width={30} /><span className={style.font}> Gardening</span>
        </div>
      </div>
    </div>
    </>
  );
}
