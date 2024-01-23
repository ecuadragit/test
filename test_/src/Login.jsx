

import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
  // para enviar valores de otro componente

import { useHistory } from 'react-router-dom';
import './test.css'
import Nav from './components/nav';

const Test = () => { 

    const [dni, setDni] = useState('');
    const [phone, setPhone] = useState('');
    const [carPlate, setCarPlate] = useState('');
    const [documentOption, setDocumentOption] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [users, setUsers] = useState([]);
    const history = useHistory();
    const [isRadioChecked, setIsRadioChecked] = useState(false);

  
    useEffect(() => {
      // Realiza la solicitud GET a la API /api/usuarios cuando el componente se monta
      fetch('http://localhost:3000/api/usuarios')
        .then((response) => response.json())
        .then((data) => setUsers(data))
        .catch((error) => console.error('Error al obtener usuarios:', error));
    }, []);
  
    const handleLogin = () => {
      // Verifica si el usuario existe en la lista
      const user = users.find((u) => u.dni === dni && u.phone === phone && u.carPlate === carPlate);
    
      if (user) {
        // Inicio de sesión exitoso, redirige al usuario a la página InsuranceInfo
        history.push({
          pathname: '/insurance-info',
          state: { user: user }, // Pasa el objeto del usuario como estado
        });
      } else {
        setErrorMessage('Credenciales de inicio de sesión inválidas');
      }
    };
    
    // const handleLogin = async () => {
    //   try {
    //     // Aquí deberías realizar la autenticación con tu backend
    //     // En este ejemplo, supondré que tu backend devuelve un objeto de usuario al autenticar correctamente
    //     const response = await fetch('http://localhost:3000/api/login', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({ dni, phone, carPlate }),
    //     });
  
    //     if (response.ok) {
    //       const user = await response.json();
    //       const token = authService.generateToken(user);
  
    //       // Almacena el token en el almacenamiento local (puedes usar sessionStorage o cookies según tus necesidades)
    //       localStorage.setItem('authToken', token);
  
    //       // Redirige a la página deseada después del inicio de sesión
    //       history.push('/insurance-info');
    //     } else {
    //       setErrorMessage('Credenciales de inicio de sesión inválidas');
    //     }
    //   } catch (error) {
    //     console.error('Error al iniciar sesión:', error);
    //     setErrorMessage('Error al iniciar sesión');
    //   }
    // };
  
    



    const handleRadioClick = () => {
      console.log(isRadioChecked);
      setIsRadioChecked(!isRadioChecked);
      console.log(isRadioChecked);
      };


    return (
        <div className='container-fluid min-vh-100 d-flex flex-column bg-test'>
              <Nav/>
    
            {/* Contenido dividido verticalmente */}
            <div className='row'>
            <div className='col-md-6 col-lg-6 col-xl-6 d-flex align-items-center justify-content-center mt-rimac'>
                    <div className="text-center ">
                        <div>               
                            <img src="mask.png" className='ml-5' alt="text" height="300" />
                        </div>
                        {/* Agrega tu contenido para la mitad izquierda aquí */}
                        <p className='nuevo mr-rimac '>¡NUEVO!</p>
                        <p className='seguro text-left'>Seguro <span className='vehicular'>Vehicular</span> </p>
                        <p className='tracking mr-rimac_2'>Tracking</p>
                        <p className='cuentanos ml-0'>Cuentanos donde le haras seguimiento a tu </p>
                        <p className='cuentanos mr-rimac_3'> seguro</p>

                        <div className="text-dark text-center ml-0 bottom-div">
                            <p className=''>© 2021 RIMAC Seguros y Reaseguros.</p>
                        </div>
                    </div>
                </div>

                

                <div className='col-md-6 col-lg-6 col-xl-6 d-flex align-items-center bg-form bg-h'>
                    <div className="text-center">
                  
                        {/* Agrega tu contenido para la mitad izquierda aquí */}
               

                        <p className='text-white text-center'>Lorem ipsum adipisicing elit. Enim animi iure,ipsum adipisicing elit. Enim animi iure, architecto nobis esse ea, eveniet odio aperiam fugiat harum, vitae molestias incidunt blanditiis facilis qui minus facere et quae!</p>

                        
                        <div className="container " >
                                <div className="p-4 .w-100 " >
                                <h1 className='my-5' >Déjanos tus datos</h1>
                                <div className="mb-3 my-5  ">
                                    <div className="input-group ">
                                            <div className="input-group-append">
                                                <select className="btn btn-outline-secondary" onChange={(e) => setDocumentOption(e.target.value)}>
                                                    <option value="" >Selecciona</option>
                                                    <option value="DNI" >DNI</option>
                                                    <option value="EXTRANJERIA" >Carnet de Extranjeria</option>
                                                </select>
                                            </div>
                                            
                                            <input type="text" className="form-control  " placeholder='DNI' value={dni} onChange={(e) => setDni(e.target.value)} />
                                            
                                    </div>
                                </div>

                                <div className="mb-3">
                                <input type="text" className="form-control  " placeholder='Número de Celular' value={phone} onChange={(e) => setPhone(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                <input type="text" className="form-control  " placeholder='Número de Placa' value={accessCode} onChange={(e) => setAccessCode(e.target.value)} />
                                </div>
                                <div className="input-group-append">
                                <div className="input-group">
                                    <div className="input-group-text">
                                      <label
                                        className={`form-check-label icon-label ${isRadioChecked ? 'checked' : ''}`}
                                        onClick={handleRadioClick}
                                      >
                                        <i className={`bi ${isRadioChecked ? 'bi-check-circle bg-success rounded-circle' : 'bi-circle'}`}></i>
                                      </label>
                                    </div>
                                    <input
                                      type="radio"
                                      name="colorRadio"
                                      className="form-check-input visually-hidden"
                                      checked={isRadioChecked}
                                      onChange={handleRadioClick}
                                      id="colorRadio"
                                    />
                                    <label className="form-check-label mx-3" htmlFor="colorRadio">
                                      Acepto la Política de Protección de Datos Personales y los Términos y Condiciones.
                                    </label>
                        </div>

                                <button className="btn btn-danger border-danger my-5 custom-button" onClick={handleLogin}>
                                COTIZALO
                                </button>
                                        {errorMessage && <div className='error_msg'>{errorMessage}</div>}
                             
                                </div>
                       
                          {/* Div pegado a la parte inferior de la pantalla */}
                               
   
                    </div>
            </div>
            </div> 
            </div>
      </div>
      </div>
      );
  };

export default Test;
