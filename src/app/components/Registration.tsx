'use client';
import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [firstName,setFirstName]=useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userMutation = gql`
    mutation createUser($userInput: createUserInput!) {
      createUserTest(userInput: $userInput)
    }
  `;
    
  const [createUser] = useMutation(userMutation);

  const handleRegister = async () => {
    try {
      const { data } = await createUser({
        variables: {
          userInput: {
            nombre:  firstName,
            correo: email,
            clave: password,
            
          },
        },
      });
      const token = data.loginUsersTest;
      if (token) {
        console.log('Inicio de sesión exitoso');
        
        
        
  
        
      } else {
       
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      
    }
  };
 

  return (
    <div className="text-center">
    
          <h2>Sign up for MonoStore</h2>
          
          <input
            className="border border-gray-400 px-3 py-2 rounded-md mb-2"
            type="firstname"
            placeholder="Nombre"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            className="border border-gray-400 px-3 py-2 rounded-md mb-2"
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="border border-gray-400 px-3 py-2 rounded-md mb-2"
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={handleRegister}
          >
            Log In
          </button>
          
        </div>
      )};
   



export default RegistrationForm;
