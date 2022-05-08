// @flow

import * as React from 'react';
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { makeLogInRequest, setUpAuthResponse } from '../../helpers';
import { useSetDocumentTitle } from '../../custom-hooks';
import './index.css';

function LogIn(): React.Node {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    setMessage('');
    setIsLoading(true);

    try {
      const res = await makeLogInRequest(email, password);
      setUpAuthResponse(res, navigate, setMessage);
    } catch (err) {
      setIsLoading(false);
      setMessage(err.message);
    }
  };

  useSetDocumentTitle('Log in');

  return (
    <div>
      <div className='wander-background'></div>
      <h1 className='p-4 text-2xl font-bold'><Link to='/' className='text-gradient'>Priority Q</Link></h1>
      <main className='my-16'>
        <h2 className='text-xl font-semibold text-center'>Log in</h2>
        <form className='max-w-md mx-auto mt-8 px-4' onSubmit={ handleSubmit }>
          {
            message && <p className='mb-4 p-2 text-xs text-center text-red-500 bg-white rounded-xl'>{ message }</p>
          }
          <div className='text-field'>
            <label htmlFor='email' className='sr-only'>Email address</label>
            <input type='email' name='email' id='email' className='text-field__input' placeholder='Email address' required autoFocus onChange={ e => setEmail(e.target.value.trim()) } />
            <svg width="36" height="29" viewBox="0 0 36 29" fill="none" xmlns="http://www.w3.org/2000/svg" className='text-field__icon'>
              <path d="M34.7143 0H1.28571C0.574554 0 0 0.574554 0 1.28571V27C0 27.7112 0.574554 28.2857 1.28571 28.2857H34.7143C35.4254 28.2857 36 27.7112 36 27V1.28571C36 0.574554 35.4254 0 34.7143 0ZM33.1071 4.45179V25.3929H2.89286V4.45179L1.78393 3.58795L3.36295 1.55893L5.08259 2.89688H30.9214L32.6411 1.55893L34.2201 3.58795L33.1071 4.45179V4.45179ZM30.9214 2.89286L18 12.9375L5.07857 2.89286L3.35893 1.55491L1.77991 3.58393L2.88884 4.44777L16.6138 15.1192C17.0086 15.4258 17.4941 15.5923 17.994 15.5923C18.4938 15.5923 18.9794 15.4258 19.3741 15.1192L33.1071 4.45179L34.2161 3.58795L32.6371 1.55893L30.9214 2.89286Z" fill="currentColor"/>
            </svg>
          </div>
          <div className='text-field'>
            <label htmlFor='password' className='sr-only'>Password</label>
            <input type='password' name='password' id='password' className='text-field__input' placeholder='Password' required onChange={ e => setPassword(e.target.value) } />
            <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg" id='key-icon' className='text-field__icon'>
              <path d="M19.9336 0C13.1876 0 7.71927 5.4683 7.71927 12.2143C7.71927 15.0388 8.67954 17.6384 10.2867 19.7076L8.63534 21.3589L6.13221 18.8558C6.07102 18.7959 5.98881 18.7624 5.9032 18.7624C5.81758 18.7624 5.73537 18.7959 5.67418 18.8558L4.07507 20.4549C4.01519 20.5161 3.98166 20.5983 3.98166 20.6839C3.98166 20.7695 4.01519 20.8518 4.07507 20.9129L6.5782 23.4161L4.77418 25.2201L2.27105 22.717C2.20986 22.6571 2.12765 22.6236 2.04204 22.6236C1.95642 22.6236 1.87421 22.6571 1.81302 22.717L0.213911 24.3161C0.154033 24.3773 0.120502 24.4595 0.120502 24.5451C0.120502 24.6307 0.154033 24.7129 0.213911 24.7741L2.71704 27.2772L0.0933749 29.9009C0.0335562 29.9613 0 30.0429 0 30.1279C0 30.2129 0.0335562 30.2945 0.0933749 30.3549L1.79293 32.0545C1.91748 32.179 2.12239 32.179 2.24695 32.0545L12.4362 21.8652C14.5812 23.5289 17.2191 24.4308 19.9336 24.4286C26.6795 24.4286 32.1478 18.9603 32.1478 12.2143C32.1478 5.4683 26.6795 0 19.9336 0ZM26.4103 18.6911C24.6827 20.4228 22.3804 21.375 19.9336 21.375C17.4867 21.375 15.1844 20.4228 13.4568 18.6911C11.7251 16.9634 10.7728 14.6612 10.7728 12.2143C10.7728 9.76741 11.7251 7.46518 13.4568 5.7375C15.1844 4.0058 17.4867 3.05357 19.9336 3.05357C22.3804 3.05357 24.6827 4.0058 26.4103 5.7375C28.142 7.46518 29.0943 9.76741 29.0943 12.2143C29.0943 14.6612 28.142 16.9634 26.4103 18.6911Z" fill="currentColor"/>
            </svg>
          </div>
          <div className='text-center mt-8'>
            {
              isLoading
                ? <div className='loader'></div>
                : <button type='submit' className='btn'><span className='text-gradient'>Submit</span></button>
            }
          </div>
        </form>
        <p className='text-center mt-12'><Link to='/signup' className='underline'>Sign up?</Link></p>
      </main>
    </div>
  )
}

export default LogIn;
