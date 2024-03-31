import React from 'react';
import './Creators.css'; // Assuming you have a CSS file named Creators.css
import { styles } from "../styles";
import creator1 from './Creators/creator1.jpg';
import creator2 from './Creators/creator2.jpg';
import creator3 from './Creators/creator3.jpg';
import Game from './Creators/GameVideo.mp4'; // replace 'pubg' with 'Game'
 // replace with actual path

const Creators = () => {
  return (
    <div>
        <div><p className={styles.sectionHeadText}>Creators Of This Website</p>
            </div>
        <div className="creators">
          <img className="creator-image" src={creator2} alt="Creator 1" />
          <img className="creator-image" src={creator3} alt="Creator 2" />
          <img className="creator-image" src={creator1} alt="Creator 3" />
        </div>
        <div className="info-columns">
            <div className="info-column">
                <p>About Chat GPT: Chat GPT is a language model developed by OpenAI. It's designed to generate human-like text based on the input it's given.</p>
            </div>
            <div className="info-column">
                <p>About Me: I'm a web developer with a passion for creating interactive and user-friendly websites. I enjoy working with technologies like React and CSS.</p>
            </div>
            <div className="info-column">
                <p>About Copilot: Copilot is an AI developed by OpenAI and GitHub. It's designed to assist with code generation and provide suggestions as you type.</p>
            </div>
        </div>
        <div>
        <p className={styles.sectionHeadText}>OFFICIAL RIET GAME:</p>
        </div>
        <div className="info-column">
                <p><i>Soon The Game Is Realesed...</i></p>
            </div>
        <div className="video-container">
            <video width="320" height="240" controls>
                <source src={Game} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
        
    </div>
  );
};

export default Creators;
