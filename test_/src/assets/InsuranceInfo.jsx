import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from 'react-router-dom';

const InsuranceInfo = () => {
  const location = useLocation();
  const user = location.state?.user;
  const [insuranceAmount, setInsuranceAmount] = useState(13000);
  const [tireStolen, setTireStolen] = useState(false);
  const [collisionInsurance, setCollisionInsurance] = useState(true);
  const [pedestrianInsurance, setPedestrianInsurance] = useState(false);

  const handleInsuranceAmountChange = (action) => {
    // Incrementa o decrementa el monto del seguro en 100 unidades
    setInsuranceAmount((prevAmount) => (action === 'increase' ? prevAmount + 100 : prevAmount - 100));
  };
  

  const handleToggleState = (insuranceType) => {
    // Cambia el estado del seguro correspondiente
    switch (insuranceType) {
      case 'tireStolen':
        setTireStolen((prev) => !prev);
        break;
      case 'collisionInsurance':
        setCollisionInsurance((prev) => !prev);
        break;
      case 'pedestrianInsurance':
        setPedestrianInsurance((prev) => !prev);
        break;
      default:
        break;
    }
  };

  return (

    
    <div className="container mt-5">

<div className="row">
        <h2 className='my-5'>Información del Seguro</h2>
        {user && (
          <div>
            <h3 className='my-3'>Datos del Usuario</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>id</th>
                  <th>dni</th>
                  <th>phone</th>
                  <th>name</th>
                  <th>carPlate</th>
                  <th>carModel</th>
                  <th>carBrand</th>
                  <th>minInsuranceValue</th>
                  <th>maxInsuranceValue</th>
                  <th>monto_seguro</th>

                  {/* Agrega más columnas según la estructura de tu objeto de usuario */}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{user.id}</td>
                  <td>{user.dni}</td>
                  <td>{user.phone}</td>
                  <td>{user.name}</td>
                  <td>{user.carPlate}</td>
                  <td>{user.carModel}</td>
                  <td>{user.carBrand}</td>
                  <td>{user.minInsuranceValue}</td>
                  <td>{user.maxInsuranceValue}</td>
                  <td>{user.monto_seguro}</td>
                  {/* Agrega más celdas según la estructura de tu objeto de usuario */}
                </tr>
              </tbody>
            </table>
          </div>
        )}
       
      </div>


     <div className="row">
     <h2>Información del Seguro</h2>
      <div className="mb-3">
        <label htmlFor="insuranceAmount">Monto del Seguro:</label>
        <div className="input-group">
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
      <div className="mb-3">
        <label>Seguros:</label>
        <div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="tireStolen"
              checked={tireStolen}
              onChange={() => handleToggleState('tireStolen')}
            />
            <label className="form-check-label" htmlFor="tireStolen">
              Robo de Llantas
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="collisionInsurance"
              checked={collisionInsurance}
              onChange={() => handleToggleState('collisionInsurance')}
            />
            <label className="form-check-label" htmlFor="collisionInsurance">
              Seguro contra Choque
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="pedestrianInsurance"
              checked={pedestrianInsurance}
              onChange={() => handleToggleState('pedestrianInsurance')}
            />
            <label className="form-check-label" htmlFor="pedestrianInsurance">
              Seguro contra Atropellos
            </label>
          </div>
        </div>
      </div>
     </div>
    </div>
  );
};

export default InsuranceInfo;
