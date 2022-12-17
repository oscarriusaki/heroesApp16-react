import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from '../../hooks/useForm';
import { AuthContext } from '../context/AuthContext';

export const RegisterPage = () => {

  const navigate = useNavigate();
  const { register } = useContext(AuthContext);
  const { onChange, name, email, password } = useForm({
    name: '',
    email: '',
    password: '',
  })

  const onLogin = () => {
    navigate('/login',{
      replace:true
    });
  }

  const onInputSubmit = (value) => {
    value.preventDefault();
    if((name.trim().length <= 1) || (email.trim().length <= 1) || (password.trim().length <= 1)) return ;
    
    register(name, email, password);

  }

  return (
    <>
      <div className="row justify-content-center cc">
        <div className="col-md-5">
          <div className="card p-5 text-center">
            <h1>Register User</h1>
            <br />
            <div className="row justify-content-center">
              <div className="col-md-12">
                <form onSubmit={onInputSubmit}>
                  <input 
                    type="text" 
                    placeholder='Name'
                    className='form-control mb-2'
                    name='name'
                    value={name}
                    onChange={onChange}
                    />
                  <input 
                    type="email" 
                    placeholder='Email'
                    className='form-control mb-2'
                    name='email'
                    value={email}
                    onChange={onChange}
                    />
                  <input 
                    type="password" 
                    placeholder='Password'
                    className='form-control mb-2'
                    name='password'
                    value={password}
                    onChange={onChange}
                    autoComplete='off'
                    />
                  <button className='btn btn-primary w-100 mb-2'>Register</button>
                </form>
                <div className='text-center'>
                  <a type='submit' className='text-align' onClick={onLogin}>No tienes una cuenta?/Login</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
