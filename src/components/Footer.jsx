import React from 'react';

function Footer(props) {
  return (
    <footer>
        <hr />

        <img class="logo" src="https://th.bing.com/th/id/OIP.dtNE8IQSVDx0zNH7JJPWBwHaHa?pid=ImgDet&rs=1" alt="" />
        <span class="logo-text">Check out my </span>
        <a class="logo-text" href="https://github.com/Aidan-Pettit" target="_blank">GitHub</a>
        <span class="logo-text">!</span>

        <img class="logo" src="https://www.iconpacks.net/icons/2/free-linkedin-logo-icon-2430-thumb.png" alt="" />
        <span>Take a look at my </span>
        <a href="https://www.linkedin.com/in/aidan-pettit-502159226/" target="_blank">LinkedIn</a>
        <span> too!</span>
    </footer>
  );
}

export default Footer;