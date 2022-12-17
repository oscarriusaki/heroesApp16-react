import React, { useEffect, useState } from 'react';

export const useFetch = (url = '') => {
    const [state, setState] = useState({
        data: null,
        isLoading: false,
        isError: null,
    })

    const getData = async() => {
        setState({
            ...state,
            isLoading : true,
        })
        // const header = {
        //     'Content-Type':'application/json'
        // }
        const resp = await fetch(url);
        const data2 = await resp.json();
        setState({
            ...state,
            data: data2,
            isLoading: false,
            isError: null,
        })
    }

    useEffect(() => {
      getData();
    }, [url])
    
  return {
    ...state,
  }
}
