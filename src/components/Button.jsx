import React from 'react';

function Button({children, onClick}) {
  return (
    <div>
        <button class="button" onClick={onClick}>{children}</button>
    </div>
  );
}

export default Button;