import React, { useContext, useState } from 'react';
import { AuthContext } from '../../auth/context/AuthContext';
import { useForm } from '../../hooks/useForm';
 
 export const RegisterHero = () => {

  const { id ,superhero ,publisher ,alter_ego ,first_appearance ,characters ,img ,onChange} = useForm({
    id: '',
    superhero: '',
    publisher: '',
    alter_ego: '',
    first_appearance: '',
    characters: '',
  });
  const [files, setFiles] = useState(null);
  const { user } = useContext(AuthContext)

  const onInputSubmit = async (value) => {
    value.preventDefault();

    if(
      (id.trim().length <= 1 ||
      superhero.trim().length <= 1 ||
      publisher.trim().length <= 1 ||
      alter_ego.trim().length <= 1 ||
      first_appearance.trim().length <= 1 ||
      characters.trim().length <= 1) || (files.length === 0)
    ) return;

    const formData = new FormData();
    formData.append('image', files);
    formData.append('id', id);
    formData.append('superhero', superhero);
    formData.append('publisher', publisher);
    formData.append('alter_ego', alter_ego);
    formData.append('first_appearance', first_appearance);
    formData.append('characters', characters);

    const url = 'http://localhost:8080/hero';
    const method = 'POST'
    const headers = {
      'Content-Type': 'application/json'
    }

    const resp = await fetch(url, {
      method: method,
      headers: {
        "x-token": user.token,
      },
      body: formData,
    });
    const data = await resp.json();
    console.log(data);

  }
  const submitImage = (data) => {
    setFiles(data.target.files[0])
  }

   return (
     <>
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="card text-center p-2">
              <h1>Register hero</h1>
              <br />
              <div className="row justify-content-center">
                <div className="col-md-12">
                  <form onSubmit={onInputSubmit}>
                    <input 
                      type="text" 
                      placeholder='id'
                      className='form-control mb-2'
                      name='id'
                      value={id}
                      onChange={onChange}
                      />
                    <input 
                      type="text" 
                      placeholder='superhero'
                      className='form-control mb-2'
                      name='superhero'
                      value={superhero}
                      onChange={onChange}
                      />
                    <input 
                      type="text" 
                      placeholder='publisher'
                      className='form-control mb-2'
                      name='publisher'
                      value={publisher}
                      onChange={onChange}
                      />
                    <input 
                      type="text" 
                      placeholder='alter_ego'
                      className='form-control mb-2'
                      name='alter_ego'
                      value={alter_ego}
                      onChange={onChange}
                      />
                    <input 
                      type="text" 
                      placeholder='first_appearance'
                      className='form-control mb-2'
                      name='first_appearance'
                      value={first_appearance}
                      onChange={onChange}
                      />
                    <input 
                      type="text" 
                      placeholder='characters'
                      className='form-control mb-2'
                      name='characters'
                      value={characters}
                      onChange={onChange}
                      />
                    <input 
                      type="file" 
                      className='form-control mb-4'
                      name='img'
                      value={img}
                      onChange={submitImage}
                      />
                    <button className='btn btn-primary w-100' type='submit'>Save</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
     </>
   )
 }