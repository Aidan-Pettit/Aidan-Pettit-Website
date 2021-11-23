import React from 'react';

function ProjectDisplayer({projectName, src, description, href}) {
  return (
    <div>
        <h2>Timely</h2>
        <img class="logo" src={TimelyLogo} alt="Timely logo." />
        <p>Time management app that uses AI to optimize your schedule. Made with React Native and Express.</p>
        <a href={href} target="_blank">Source Code</a>
    </div>
  );
}

const styles = {
   container: {
      
   }
}

export default ProjectDisplayer;