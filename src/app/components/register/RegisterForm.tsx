'use client';
import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { useRouter } from "next/navigation";
import  Heading  from '../product/Heading';
import Input from '../input/Input';
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';
import Button from '../Button';
import Link from 'next/link';


const RegisterForm: React.FC = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { register, formState: {errors}, handleSubmit } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');


  const handleEmailChange = (value: string) => {
    setEmail(value); // Actualiza el estado del correo electrónico
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value); // Actualiza el estado de la contraseña
  };

  const handleUserNameChange = (value: string) => {
    setUserName(value); // Actualiza el estado de la contraseña
  };

  const userMutation = gql`
    mutation createUsers($userInput: CreateUserInput!) {
      createUsers(userInput: $userInput)
    }
  `;
    
  const [createUser] = useMutation(userMutation);

  const handleRegister:SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);
    router.push("/");
    try {
      const { data } = await createUser({
        variables: {
          userInput: {
            name:  userName,
            clave: password,
            correo: email,
            rol: "client",
          },
        },
        onCompleted: (data) => {
          if(data.createUsers == true){
            router.push("/pages/login");
          }
        },
      });
     
    } catch (error) {
      console.error('Error al registrarse', error);
      
    }
  };
 

  return (
    <>
      <Heading title='Sign up for MonoStore' />
      <hr className='bg-slate-300 w-full h-px'/>
      <Input id='name' label='Name' disabled={isLoading} register={register}
      errors={errors} required onChange={handleUserNameChange}/>
      <Input id='email' label='Email' disabled={isLoading} register={register}
      errors={errors} required onChange={handleEmailChange}/>
      <Input id='password' label='Password' disabled={isLoading} register={register}
      errors={errors} required type='password' onChange={handlePasswordChange}/>
      <Button label='Sign up' onClick={handleSubmit(handleRegister)} disabled={isLoading}/>
      <p>Already have an account? <Link className='underline' href='/pages/login'>Log in</Link></p>
    </>
  )};
   



export default RegisterForm;
