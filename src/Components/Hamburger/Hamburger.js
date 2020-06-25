import React, { Fragment, useEffect, useState } from 'react';
import './Hamburger.css'

const Hamburger = () => {
  let hamBtn;

  useEffect(() => {
    hamBtn = document.querySelector('.menu-btn');
  })
  const [menuOpen, setMenuOpen] = useState(false);
  const burgerClicked = () => {
    document.querySelector('nav ul').classList.toggle('show');
    if(!menuOpen) {
      hamBtn.classList.add('open');
      setMenuOpen(true);
    } else {
      hamBtn.classList.remove('open');
      setMenuOpen(false);
    }
  }

  return (
    <Fragment>
      <div className="menu-btn" onClick={() => burgerClicked()}>
          <div className="btn-burger"></div>
        </div>
    </Fragment>
  )
}

export default Hamburger