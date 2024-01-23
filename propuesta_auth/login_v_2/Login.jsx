// Login.js

import React, { useState } from 'react';
import authService from './authService';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();

  const handleLogin = async () => {
    try {
      // Aquí deberías realizar la autenticación con tu backend
      // En este ejemplo, supondré que tu backend devuelve un objeto de usuario al autenticar correctamente
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ dni, phone, carPlate }),
      });

      if (response.ok) {
        const user = await response.json();
        const token = authService.generateToken(user);

        // Almacena el token en el almacenamiento local (puedes usar sessionStorage o cookies según tus necesidades)
        localStorage.setItem('authToken', token);

        // Redirige a la página deseada después del inicio de sesión
        history.push('/insurance-info');
      } else {
        setErrorMessage('Credenciales de inicio de sesión inválidas');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setErrorMessage('Error al iniciar sesión');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <div>
        <label>Usuario:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Contraseña:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={handleLogin}>Iniciar sesión</button>
      {errorMessage && <div className="error_msg">{errorMessage}</div>}
    </div>
  );
};

export default Login;
