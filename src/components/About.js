import React from "react";
import Links from './Links'

function About({bio, links: {github, linkedin}}) {
  let displayBio
  if (bio) {
    displayBio = <p>{bio}</p>
  } else {
    displayBio = null

}
  return (
    <div id="about">
      <h2>About Me</h2>
      <div>{displayBio}</div>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={github} linkedin={linkedin}/>
    </div>
  );
}

export default About;
