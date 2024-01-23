import React from 'react';

const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg  navbar-custom border-bottom  fixed-top">
            <div className="container-fluid">
                {/* Logo */}
                <div className="navbar-brand text-end mx-5">
                <img src="logo.svg" className='ml-5' alt="text" height="30" />
                </div>
    
                {/* Textos en el lado izquierdo */}
                <div className="d-flex flex-row">
                <div className="navbar-text  mx-3">¿Tienes alguna duda?</div>
                <div className="navbar-text"><img src="phone.png" className='ml-5' alt="text" height="20" />(01) 411 6001</div>
                </div>
            </div>
            </nav>
    </div>
  );
}

export default Nav;