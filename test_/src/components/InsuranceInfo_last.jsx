

import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './test.css'
import Nav from './components/nav';

const Test = () => { 

  const location = useLocation();
  const user = location.state?.user;

  //instanciamos los valores del objeto que retorna el componente Login
  
  let seguroAmountStart= user.monto_seguro;
  let  idUser  =         user.id
  let   dniUser  =         user.dni
  let   phoneUser  =        user.phone
  let   nameUser  =        user.name
  let   carlPlateUser  =        user.carPlate
  let   carModelUser  =        user.carModel
  let   carBrandUser  =        user.carBrand
  let    minSecureAmount =      user.minInsuranceValue
  let    maxecureAmount  =      user.maxInsuranceValue

  //
                 
  const [id, setId] = useState(idUser);
  const [dni, setDni] = useState(dniUser);
  const [phone, setPhone] = useState(phoneUser);
  const [name, setName] = useState(nameUser);
  const [carPlate, setCarPlate] = useState(carlPlateUser);
  const [carModel, setCarModel] = useState(carModelUser);

  const [minSecure, setMinSecure] = useState(minSecureAmount);
  const [maxSecure, setMaxSecure] = useState(maxecureAmount);

  

  const [accordions, setAccordions] = useState([
    { id: 1, isOpen: false, isAdding: false, title: 'Llanta robada', img:'robo.png', },
    { id: 2, isOpen: false, isAdding: false, title: 'Choque y/o pasarte la luz roja' , img:'choque.png',},
    { id: 3, isOpen: false, isAdding: false, title: 'Atropello en Via Evitamiento' , img:'atropello.png', },
  ]);

  //

  
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

  //

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


  //


    return (
      <div className="container-fluid rimac-h">
      {/* naV */}
        <Nav/>
      {/* eNDnaV */}
      {/* CONTENT */}
      <div className="row h-100 mt-5">
        {/*  */}
        <div className="col-4  rimac-h">
            <div className="d-flex flex-column p-3 text-white" style={{ width: '100%' }}>
              <ul className="nav nav-pills flex-column mb-auto mt-5">
                <li className="nav-item">
                  
                  <a href="#" className="nav-link ">
                  <span className="badge text-primary rounded-circle p-2 mx-5">1</span> Datos 
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link active">
                  <span className="badge bg-primary rounded-circle p-2  mx-5">2</span> Arma tu plan 
                  </a>
                </li>
              </ul>
            </div>
        </div>
        {/*  */}
        <div className="col-4 mt-5 ">
          {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe esse nam at harum nostrum. Molestias dicta laudantium doloremque eaque nam voluptates aliquam provident quae, amet error quaerat? Error, repellendus enim!</p> */}
            <div class="d-flex align-items-center">
              <img src="back_rimac.png"  height="20" alt=""  srcSet="" />
                <span className="mx-2  volver">Volver</span>    
            </div>

            <p className='hola'>¡Hola, <span className='juan'> Juan!</span></p>
            <p className='coberturas'>Conoce las coberturas para tu plan</p>

            <div className='row border  rounded-3 '>
              <div className='col-6   text-start mt-5'> 
                <p className='ml-plate texto-placa'>Placa: <span className='texto_placa'>{carPlate}</span></p>
                <p className='ml-model texto-modelo'>{carModel}</p>
              </div>
              <div className='col-6 mt-2 text-center'>
                <img className='' src="juan.png"  alt=""  srcSet="" />
              </div>
            </div>
              {/*  */}
            <div className="row">
             
              <div className="col-7">

                <div className="row">
                  
                  
                </div>
                <div className="row mt-3">
                <p className='suma '>Indica la suma asegurada</p>
                    <div className="col-6">     
                            <p>MIN: ${minSecure}</p>
                    </div>
                    <div className="col-6">     
                            <p>MAX: ${maxSecure}</p>
                    </div>
                </div>
              </div>
              {/*  */}
              {/*  */}
              <div className="col-5">
                
                <div className="input-group mb-5 pt-5">
                  
                    <span className="input-group-btn">
                      <button
                        className="btn btn-secondary"
                        type="button"
                       
                      >
                        -
                      </button>
                    </span>
                    <input
                      type="text"
                      className="form-control text-center"
                      id="insuranceAmount"
                      value={minSecure}
                      readOnly
                    />
                    <span className="input-group-btn">
                      <button
                        className="btn btn-secondary"
                        type="button"
                        
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
              <p className='cobertura mt-2'>Agregar o quitar coberturas</p>
              </div>
              <div className="col-12">
              <div className="container mt-2">
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

            </div>
            {/*  */}

        </div>
        {/*  */}
        <div className="col-4 mt-5  rimac-h">
                    <div className='row'>
                      <p className='monto mr-5'>MONTO</p>
                    </div>
                    <div className='row'>
                         <div className="col">
                         {'$' + seguroAmountStart + '.00'} 
                         </div>
                    </div>
                    <div className='row'>
                      <p className='mensuales mr-5'>mensuales</p>
                    </div>
                    <div className='row'>
                        <div className="col-9 text-center">
                          <div className="border-bottom my-3"></div>
                        </div>
                    </div>
                    <div className='row'>
                        <p className='precio mr-5'>El precio incluye</p>
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
