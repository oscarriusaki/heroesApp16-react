import React from 'react'
import { types } from '../types/types';

export const authReducer = (context = {}, action) => {

  switch (action.type) {
    case types.login:
        return {
            ...context,
            logged: true,
            user: action.user,
        }
    case types.register:
        return {
            ...context,
            logged: true,
            user: action.user,
        }
    case types.logout:
        return {
            logged:false
        }
    default:
        return context;
  }
}
