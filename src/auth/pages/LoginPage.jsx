import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { AuthContext } from '../context/AuthContext';

export const LoginPage = () => {

  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const { onChange, email, password } = useForm({
    email: '',
    password: '',
  })

  const register = () => {
    navigate('/registerPage', {
      replace: true
    });
  }
  const onInputSubmit = (value) => {  
    value.preventDefault();
    if((email.trim().length <= 1) || (password.trim().length <= 1)) return
     
    login('oscar', email, password);
    const path = localStorage.getItem('path')|| '/';
    navigate(path, {
      replace:true
    })
  }
  return (
    <>
      <div className="row justify-content-center cc">
        <div className="col-md-5">
          <div className="card text-center p-5 justify-content-center">
        <h1>Login User</h1>
        <br />
            <div className="row justify-content-center">
              <div className="col-md-12">
                <form onSubmit={onInputSubmit}>
                  <input 
                    type="email" 
                    placeholder='Correo'
                    className='form-control mb-2'
                    name='email'
                    value={email}
                    onChange={onChange}
                    />
                  <input 
                    type="password" 
                    placeholder='Password'
                    className='form-control mb-2'
                    autoComplete='off'
                    name='password'
                    value={password}
                    onChange={onChange}
                    />
                  <button className='btn btn-primary w-100 mb-2' type='submit' >Logn</button>
                </form>
                <div className='text-center'>
                  <a type='submit' className='text-align' onClick={register}>tienes una cuenta?/Register</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
