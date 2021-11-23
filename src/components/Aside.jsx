import React, { useState } from 'react';
import 'animate.css';
import Button from './Button'

function Aside(props) {
  const [visible, isVisible] = useState(false)

  return (
    <aside>
        {visible && <div class="animate__animated animate__tada">
            <h3>My Email: </h3>
            <p>am.pettit23@gmail.com</p>  
        </div>}

        <Button onClick={() => isVisible(!visible)}>See More!</Button>
    </aside>
  );
}

export default Aside;