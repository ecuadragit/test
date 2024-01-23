import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './test.css';
import Nav from './components/nav';
import { useLocation } from 'react-router-dom';


const Thanks = () => {
  // Mueve la llamada a useLocation dentro del cuerpo de la función del componente
  const location = useLocation();
  const emailUser = location.state?.emailUser;
  console.log(emailUser);

  return (
    <div className='container-fluid min-vh-100 d-flex flex-column bg-test'>
      <Nav />

      {/* Contenido dividido verticalmente */}
      <div className='row'>
        <div className='col-md-6 col-lg-6 col-xl-6 d-flex align-items-center justify-content-center mt-rimac'>
          <div className=" ">
            <div className="d-flex flex-row w-100">
              <div className="">
                <img className='ml-thanks' src="sala.png" alt="text" height="300" />
                <p className='text-bg-form'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis soluta, distinctio in quae dolorum aliquam magni! Commodi, consectetur quod reprehenderit necessitatibus, voluptatem eum autem culpa temporibus sed neque, deserunt nesciunt.</p>
              </div>
              <div>
                <img className='mr-thanks ' src="juan_2.png" alt="text" height="300" />
                <p className='text-bg-form'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis soluta, distinctio in quae dolorum aliquam magni! Commodi, consectetur quod reprehenderit necessitatibus, voluptatem eum autem culpa temporibus sed neque, deserunt nesciunt.</p>
              </div>
            </div>
          </div>
        </div>

        <div className='col-md-6 col-lg-6 col-xl-6 d-flex align-items-center bg-form bg-h'>
          <div className="text-center">
            {/* Agrega tu contenido para la mitad izquierda aquí */}
            <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis soluta, distinctio in quae dolorum aliquam magni! Commodi, consectetur quod reprehenderit necessitatibus, voluptatem eum autem culpa temporibus sed neque, deserunt nesciunt.</p>
            <p className='text-center'>¡Te damos la bienvenida! </p>
            <p className='text-center'>Cuenta con nosotros para proteger tu vehículo</p>
            <p className='text-center'>Enviaremos la confirmación de compra de tu Plan Vehícular Tracking a tu correo:</p>
            {/* Usa la variable 'mail' en lugar de 'emailUser' */}
            <p className='text-center'>{emailUser}</p>
            <button className='btn btn-danger px-5 py-3' type="submit">cómo usar mi seguro</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thanks;
