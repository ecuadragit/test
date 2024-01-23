

import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './test.css'
import Nav from './components/nav';

const Test = () => { 

  // para recibir valores de otro componente
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
  let emailUser =  user.mail

  //
  const [activeTab, setActiveTab] = useState(1);

  const [dynamicSecureAmount, setDynamicSecureAmount] = useState(seguroAmountStart);
 
 

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };
                 
  const [id, setId] = useState(idUser);
  const [dni, setDni] = useState(dniUser);
  const [phone, setPhone] = useState(phoneUser);
  const [name, setName] = useState(nameUser);
  const [mail, setMail] = useState(emailUser);
  const [carPlate, setCarPlate] = useState(carlPlateUser);
  const [carModel, setCarModel] = useState(carModelUser);

  const [minSecure, setMinSecure] = useState(minSecureAmount);
  const [maxSecure, setMaxSecure] = useState(maxecureAmount);
  const [updatedAmount, setUpdatedAmount] = useState(0);
  const history = useHistory();

  

  const [accordions, setAccordions] = useState([
    { id: 1, isOpen: false, isAdding: false, title: 'Llanta robada', img:'robo.png', },
    { id: 2, isOpen: false, isAdding: false, title: 'Choque y/o pasarte la luz roja' , img:'choque.png',},
    { id: 3, isOpen: false, isAdding: false, title: 'Atropello en Via Evitamiento' , img:'atropello.png', },
  ]);

 // Define seguroAmountStart como una constante

 // Agrega un estado para almacenar los valores asociados a cada elemento del acordeón
 const [dynamicSecureAmounts, setDynamicSecureAmounts] = useState({
   1: 15,
   2: 20,
   3: 50,
 });


 const handleCotizarClick = () => {
  console.log("ID:", id);
  console.log("Updated Amount:", updatedAmount);

  // Construye los datos del cuerpo de la solicitud
  const data = {
    id: id,
    monto_seguro: updatedAmount,
  };

  // Realiza la solicitud POST
  fetch('http://localhost:3000/api/actualizar-monto-seguro', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(responseData => {
      // Maneja la respuesta de la API según sea necesario
      console.log('Respuesta de la API:', responseData);

      try {
        // history2.push({
        //   pathname: '/thanks',
        //   state: { emailUser: emailUser }, // Pasa el objeto del usuario como estado
        // });
        try {
          history.push({
            pathname: '/thanks',
            state: { emailUser: emailUser }, // Pasa el objeto del usuario como estado
          });
        } catch (error) {
          console.error('Error al redirigir:', error);
        }
        // pathname: '/thanks',
        // history2.push('/thanks?email=' + encodeURIComponent(emailUser));
      } catch (error) {
        console.error('Error al redirigir:', error);
      }
      
    })
    .catch(error => {
      // Maneja cualquier error que ocurra durante la solicitud
      console.error('Error en la solicitud:', error);
    });
};



// ... (rest of the code)
const handleAddingClick = (accordionId) => {
  setAccordions((prevAccordions) =>
    prevAccordions.map((accordion) => {
      if (accordion.id === accordionId) {
        // Calcula el nuevo valor basado en el estado actual y el id del acordeón
        const newAmount = dynamicSecureAmounts[accordionId];
        const updatedAmountF = seguroAmountStart + (accordion.isAdding ? newAmount : -newAmount);

        // Imprime el título del acordeón cuando se hace clic en el botón de agregar
        console.log(`Se hizo clic en Agregar del acordeón "${accordion.title}"`);

        // Realiza la acción que desees con el nuevo valor (por ejemplo, imprímelo)
        console.log(updatedAmountF);
        setUpdatedAmount(updatedAmountF);

        return {
          ...accordion,
          isAdding: !accordion.isAdding,
        };
      }
      return accordion;
    })
  );
};



  
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
   // handleAddingClick(accordionId)
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
                  
                  <a href="#" className="nav-link  text-danger">
                  <span className="badge text-danger rounded-circle p-2 mx-5">1</span> Datos 
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link active bg-danger">
                  <span className="badge bg-danger rounded-circle p-2  mx-5">2</span> Arma tu plan 
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
                        className="btn btn-danger"
                        type="button"
                       
                      >
                        -
                      </button>
                    </span>
                    <input
                      type="text"
                      className="form-control border-0 text-center"
                      id="insuranceAmount"
                      value={minSecure}
                      readOnly
                    />
                    <span className="input-group-btn">
                      <button
                        className="btn btn-danger"
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
              <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === 1 ? 'active text-xs' : ''  }`  }
            onClick={() => handleTabClick(1)}
           
          >
            Protege a 
              tu auto
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === 2 ? 'active' : ''}`}
            onClick={() => handleTabClick(2)}
            
          >
          Protege...
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === 3 ? 'active' : ''}`}
            onClick={() => handleTabClick(3)}
            
          >
            Mejora ...
          </a>
        </li>
      </ul>

      <div className="tab-content mt-2">
        <div className={`tab-pane ${activeTab === 1 ? 'active' : ''}`} id="tab1">
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
                            <div className="col-12">
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
                                    <div onClick={console.log(accordion.id)}  >{accordion.isAdding ? ' Quitar ' : ' Agregar'}</div>
                            
                            </div>
                              <p className='mt-3'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quidem atque laborum unde minima, ditate reiciendis molestias quam?</p>
                            </div>
                            </div>
                        
                          </div>
                          
                          
                          </div>
                      </div>
                    </div>
                  
                ))}
        </div>
        <div className={`tab-pane ${activeTab === 2 ? 'active' : ''}`} id="tab2">
          <p>Contenido de la pestaña 2</p>
        </div>
        <div className={`tab-pane ${activeTab === 3 ? 'active' : ''}`} id="tab3">
          <p>Contenido de la pestaña 3</p>
        </div>
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
  {'$' + (updatedAmount !== 0 ? updatedAmount : seguroAmountStart ) + '.00'}
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
                      <button onClick={handleCotizarClick} className='btn btn-danger col-9' type="button"> Cotizar</button>

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
