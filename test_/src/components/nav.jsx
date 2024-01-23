import React from 'react';

const Nav = () => {
  return (
    <div>
<nav className="navbar navbar-expand-lg navbar-custom border-bottom fixed-top">
    <div className="container-fluid">
        {/* Logo */}
        <div className="navbar-brand">
            <img src="logo.svg" className="logo_r" alt="text" height="30" />
        </div>

        {/* Textos y número de teléfono */}
        <div className="navbar-text d-lg-flex d-none">
            <div className="me-3">¿Tienes alguna duda?</div>
            <div className="d-flex align-items-center">
                <img src="phone.png" className="me-2" alt="text" height="20" />
                <span>(01) 411 6001</span>
            </div>
        </div>

        {/* Texto y número de teléfono en dispositivos pequeños */}
        <div className="d-flex align-items-center d-lg-none">
            <div className="navbar-text">
                <span className='transparent'>¿Tienes alguna duda?</span> <img src="phone.png" className="ms-2" alt="text" height="20" /> (01) 411 6001
            </div>
        </div>
    </div>
</nav>

    </div>
  );
}

export default Nav;