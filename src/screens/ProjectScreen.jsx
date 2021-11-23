import React from 'react';
import TimelyLogo from '../assets/images/Timely.png'
import LeaperLogo from '../assets/images/leaper-icon.jpg'

function ProjectScreen(props) {
  return (
    <div class="project-screen">
        <h1>Projects!</h1>
        <h2>A list of all my coding projects!</h2>

            <div class="project-displayer">
                <h2>Timely - (Time Management App)</h2>
                <img class="project-logo" src={TimelyLogo} alt="Timely logo." />
                <p>Time management app that uses AI to optimize your schedule. Made with React Native and Express.</p>
                <a href="https://github.com/Aidan-Pettit/Timely" target="_blank">Source Code</a>
            </div>

            <div class="project-displayer">
                <h2>Leaper - (Social Media)</h2>
                <img class="project-logo" src={LeaperLogo} alt="Leaper logo." />
                <p>Mobile app that is based on social medias like Twitter and Instagram. Also implements aspects from gaming to make the app unique and fun.</p>
                <a href="">Source Code</a>
            </div>

            <div class="project-displayer">
                <h2>Stock Trader</h2>
                <img class="project-logo" src="https://th.bing.com/th/id/R.600d35ec60155f442e7905cd10fe7446?rik=yQvPkUCtebUGLg&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_454424.png&ehk=v7jJa%2fsIijySEQk5BuJZxc4oAkiw9M8mz1M%2fzRIxt2Q%3d&risl=&pid=ImgRaw&r=0" alt="Stock trader logo." />
                <p>Program that simulates the stock market environment, and uses algorithms to decide when to buy and sell for profit. Planned to be connected to the real stock market in the future.</p>
                <a href="https://github.com/Aidan-Pettit/Stock-Trader" target="_blank">Source Code</a>
            </div>

            <div class="project-displayer">
                <h2>Code Writer</h2>
                <img class="project-logo" src="https://th.bing.com/th/id/R.e1cddf098821a799b19656ffbd22b634?rik=grdyuzrxa468rQ&pid=ImgRaw&r=0" alt="Code writer logo." />
                <p>Program that creates functions based on given input/output datasets. Made with Python.</p>
                <a href="https://github.com/Aidan-Pettit/Code-Writer" target="_blank">Source Code</a>
            </div>

            <div class="project-displayer">
                <h2>Python-Javascript Translator</h2>
                <img class="project-logo" src="https://cdn3.iconfinder.com/data/icons/design-tools-14/24/_text_translation-512.png" alt="Translator logo." />
                <p>Program that translates python code into JavaScript and vice versa. Made with Python. </p>
                <a href="">Source Code</a>
            </div>

    </div>
  );
}

export default ProjectScreen;