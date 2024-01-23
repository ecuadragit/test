

import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useHistory } from 'react-router-dom';
import './test.css'

const Test = () => { 

  const [insuranceAmount, setInsuranceAmount] = useState(13000);

  const [activeTab, setActiveTab] = useState('tab1');

  const [accordions, setAccordions] = useState([
    { id: 1, isOpen: false, isAdding: false, title: 'Elemento 1', img:'robo.png', },
    { id: 2, isOpen: false, isAdding: false, title: 'Elemento 2' , img:'choque.png',},
    { id: 3, isOpen: false, isAdding: false, title: 'Elemento 3' , img:'atropello.png', },
  ]);

  const toggleAccordion = (accordionId) => {
    setAccordions((prevAccordions) =>
      prevAccordions.map((accordion) => {
        if (accordion.id === accordionId) {
          return {
            ...accordion,
            isOpen: !accordion.isOpen,
          };
        }
        return accordion;
      })
    );
  };

  const toggleAdding = (accordionId) => {
    setAccordions((prevAccordions) =>
      prevAccordions.map((accordion) => {
        if (accordion.id === accordionId) {
          return {
            ...accordion,
            isAdding: !accordion.isAdding,
          };
        }
        return accordion;
      })
    );
  };

  const handleInsuranceAmountChange = (action) => {
    setInsuranceAmount((prevAmount) => (action === 'increase' ? prevAmount + 100 : prevAmount - 100));
  };

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };



  
    return (
      <div className="container-fluid rimac-h">
        {/* naV */}
      <nav className="navbar navbar-expand-lg  navbar-custom  fixed-top">
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
      {/* eNDnaV */}
      {/* CONTENT */}
      <div className="row h-100 mt-5">
        {/*  */}
        <div className="col-4  rimac-h">
            <div className="d-flex flex-column p-3 text-white" style={{ width: '100%' }}>
              <ul className="nav nav-pills flex-column mb-auto mt-5">
                <li className="nav-item">
                  
                  <a href="#" className="nav-link ">
                  <span className="badge bg-primary rounded-circle p-2 mx-5">1</span> Datos 
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link active">
                  <span className="badge bg-success rounded-circle p-2  mx-5">2</span> Arma tu plan 
                  </a>
                </li>
              </ul>
            </div>
        </div>
        {/*  */}
        <div className="col-4 ">
          {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe esse nam at harum nostrum. Molestias dicta laudantium doloremque eaque nam voluptates aliquam provident quae, amet error quaerat? Error, repellendus enim!</p> */}
            <div class="d-flex align-items-center">
              <img src="back_rimac.png"  height="20" alt=""  srcSet="" />
                <span className="mx-2  volver">Volver</span>    
            </div>

            <p className='hola'>¡Hola, <span className='juan'> Juan!</span></p>
            <p className='coberturas'>Conoce las coberturas para tu plan</p>

            <div className='row border  rounded-3 '>
              <div className='col-6   text-start mt-5'> 
                <p className='ml-plate texto-placa'>Placa: <span className='texto_placa'>dfgdf</span></p>
                <p className='ml-model texto-modelo'>Model XYZ</p>
              </div>
              <div className='col-6 mt-2 text-center'>
                <img className='' src="juan.png"  alt=""  srcSet="" />
              </div>
            </div>
              {/*  */}
            <div className="row">
              {/*  */}<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod psa!</p>
              <div className="col-6">

                <div className="row">
                  
                  
                </div>
                <div className="row">
                    <div className="col-6">     
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod psa!</p>
                    </div>
                    <div className="col-6">     
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod psa!</p>
                    </div>
                </div>
              </div>
              {/*  */}
              {/*  */}
              <div className="col-6">
                <div className="input-group mt-5 pt-5">
                    <span className="input-group-btn">
                      <button
                        className="btn btn-secondary"
                        type="button"
                        onClick={() => handleInsuranceAmountChange('decrease')}
                      >
                        -
                      </button>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      id="insuranceAmount"
                      value={insuranceAmount}
                      readOnly
                    />
                    <span className="input-group-btn">
                      <button
                        className="btn btn-secondary"
                        type="button"
                        onClick={() => handleInsuranceAmountChange('increase')}
                      >
                        +
                      </button>
                    </span>
                  </div>
                </div>
                {/*  */}
            </div>
              {/*  */}
            {/*  */}
            <div className="row">
              <div className="col-12">
              <h1>Agregar o quitar coberturas</h1>
              </div>
              <div className="col-12">
          <ul className="nav" id="myTabs">
            <li className="nav-item">
              <a
                className={`nav-link ${activeTab === 'tab1' ? 'active' : ''}`}
                id="tab1-tab"
                data-bs-toggle="pill"
                href="#tab1"
                onClick={() => handleTabClick('tab1')}
              >
                Tab 1
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeTab === 'tab2' ? 'active' : ''}`}
                id="tab2-tab"
                data-bs-toggle="pill"
                href="#tab2"
                onClick={() => handleTabClick('tab2')}
              >
                Tab 2
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeTab === 'tab3' ? 'active' : ''}`}
                id="tab3-tab"
                data-bs-toggle="pill"
                href="#tab3"
                onClick={() => handleTabClick('tab3')}
              >
                Tab 3
              </a>
            </li>
          </ul>

          <div className="tab-content mt-2">
            <div className={`tab-pane fade ${activeTab === 'tab1' ? 'show active' : ''}`} id="tab1">
              <h3>Contenido de la Pestaña 1</h3>
              <div className="container mt-5">
  {accordions.map((accordion) => (
    <div key={accordion.id} className="accordion">
      <div className="accordion-item">
        <h2 className="accordion-header" id={`heading${accordion.id}`}>
          <button
            className="accordion-button d-flex justify-content-between align-items-center"
            type="button"
            onClick={() => toggleAccordion(accordion.id)}
          >
            <div className="d-flex align-items-center">
              {/* Parte Izquierda */}
              <div className="me-3">
              <img src={accordion.img} alt="" name="miniatura" className='imagen_miniatura' />
              </div>
              {/* Parte del Medio */}
              <div className="flex-grow-1">
                <h5>{accordion.title}</h5>
              </div>
            </div>
            {/* Parte Derecha */}
            <div className="ms-3">
              {accordion.isOpen ? (
                <i className="bi bi-arrow-up"></i>
              ) : (
                <i className="bi bi-arrow-down"></i>
              )}
            </div>
          </button>
        </h2>
        <div
          className={`accordion-collapse collapse ${accordion.isOpen ? 'show' : ''}`}
          aria-labelledby={`heading${accordion.id}`}
        >
          <div className="accordion-body">
            <div className="row">
              <div className="col-2">
              <div
              className={`btn btn-secondary ${accordion.isAdding ? 'active' : ''}`}
              onClick={() => toggleAdding(accordion.id)}
            >
             {accordion.isAdding ? (
                  <i className="bi bi-dash-lg text-light bg-danger p-2 rounded-circle"></i> 
                  // Icono para quitar con círculo rojo
                ) : (
                  <i className="bi bi-plus-lg text-light bg-success p-2 rounded-circle"></i> 
                  // Icono para agregar con círculo verde
                )}
              <div>{accordion.isAdding ? ' Quitar ' : ' Agregar'}</div>
            
            </div>
              </div>
           
            </div>
            <div className="row">
{/* Parte Izquierda */}
Contenido del acordeón {accordion.title}
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, expedita nihil dolorum dolores ducimus numquam error veritatis praesentium reprehenderit illo voluptatibus maiores dolor tenetur amet saepe, harum architecto iste explicabo?</p>
          
            </div>
            
            </div>
        </div>
      </div>
    </div>
  ))}
</div>


            </div>
            <div className={`tab-pane fade ${activeTab === 'tab2' ? 'show active' : ''}`} id="tab2">
              <h3>Contenido de la Pestaña 2</h3>
              <p>Este es el contenido de la pestaña 2.</p>
            </div>
            <div className={`tab-pane fade ${activeTab === 'tab3' ? 'show active' : ''}`} id="tab3">
              <h3>Contenido de la Pestaña 3</h3>
              <p>Este es el contenido de la pestaña 3.</p>
            </div>
          </div>
        </div>

            </div>
            {/*  */}

        </div>
        {/*  */}
        <div className="col-4  rimac-h">
                    <div className='row'>
<h1>MONTO</h1>
                    </div>
                    <div className='row'>
$ 35.00
                    </div>
                    <div className='row'>
<h2>mensuales</h2>
                    </div>
                    <div className='row'>
                        <div className="col-9 text-center">
                          <div className="border-bottom my-3"></div>
                        </div>
                    </div>
                    <div className='row'>
                        <p>el precio incluye</p>
                        <ul className="list-group">
                        <li className="list-group-item border-0 d-flex align-items-center">
                          <i className="bi bi-check-circle-fill text-success me-2"></i>
                          <p className="mb-0">Llanta de repuesto</p>
                        </li>
                        <li className="list-group-item border-0 d-flex align-items-center">
                          <i className="bi bi-check-circle-fill text-success me-2"></i>
                          <p className="mb-0">Análisis de motor</p>
                        </li>
                        <li className="list-group-item border-0 d-flex align-items-center">
                          <i className="bi bi-check-circle-fill text-success me-2"></i>
                          <p className="mb-0">Aros gratis</p>
                        </li>
                      </ul>
                    </div>
                    <div className='row text-center'>
                      <div className="">
                      <button className='btn btn-danger col-9' type="button"> Cotizar</button>

                      </div>
                    </div>
        </div>
        {/*  */}

      </div>  
      {/* EndContent */}
    </div>
      );
  };

export default Test;
