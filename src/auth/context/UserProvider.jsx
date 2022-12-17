import React, { useReducer } from 'react'
import { useFetch } from '../../hooks/useFetch';
import { types } from '../types/types';
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer';

const init = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return {
        logged: !!user,
        user:user,
    }
}

export const UserProvider = ({children}) => {
    
    const [state, dispatch] = useReducer(authReducer, {}, init);
    const { data, isLoading, getData } = useFetch();

    const login = async (name = '', email = '', password = '') => {

        const url = 'http://localhost:8080/login';
        const method = 'POST';
        const header = {
            'Content-Type': 'application/json',
        };
        const b = JSON.stringify({
            "email": email,
            "pas": password
        })

        const resp = await fetch(url, {
            method: method,
            headers: header,
            body: b
        });
        const data2 = await resp.json();
        console.log(data2)
        if(data2.msg !== 'successfully logged') return;
        
        const user = {
            id: 1234,
            first_name: name,
            email: email,
            token: data2.token,
        }
        const action = {
            type: types.login,
            user: user,
        }

        localStorage.setItem('user', JSON.stringify(user))
        dispatch(action);
    }
    const logout = () => {
        localStorage.removeItem('user');
        const action = {
            type: types.logout
        }
        dispatch(action);
    }
    const register = async (name = '', email = '', password = '') => {

        const user = {
            first_name: name, 
            email: email,
            pas: password
        }
        const url = 'http://localhost:8080/user';
        const method = 'POST';
        const header = {
            'Content-Type':'application/json'
        }
        
        const resp = await fetch(url, {
            method: method,
            headers: header,
            body: JSON.stringify(user)
        })
        const data = await resp.json();

        if(data.msg !== "registered") return;

        const user2 = {
            first_name: name, 
            email: email,
            pas: password,
            token: data.token,
        }
        
        const action = {
            type: types.register,
            user: user2,
        }

        localStorage.setItem('user', JSON.stringify(user2))
        dispatch(action);
    }

  return (
    <AuthContext.Provider value={{
        ...state,
        login,
        logout,
        register,
    }}>
        {children}
    </AuthContext.Provider>
  )
}
