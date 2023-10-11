import React, { useState } from 'react';
//import { useDispatch } from 'react-redux';
import { useAppDispatch } from "../../app/hooks";
import {createPostAsync} from './postSlice';

function PostForm() {
  const dispatch = useAppDispatch();
  const [nombre, setTitle] = useState('');
  const [descripcion, setBody] = useState('');

  function submitHandler(e:any) {
    e.preventDefault();
    const formData = {
      post: {
        nombre: nombre,
        descripcion: descripcion,
      }
    }
    dispatch(createPostAsync(formData));
    resetState();
  }

  function resetState() {
    setTitle('');
    setBody('');
  }
  
  return <div>
    <h1>Agregar Nuevo</h1>
    <div className="container">
    <div className="row">
      <div className="col-12">

        <form>
         <div className="input-group">
          <input
            type="text"
            className="form-control text-start col-2"
            placeholder="Nombre"
            name="nombre"
            value={nombre}
            onChange={(e) => setTitle(e.target.value)}
            />
            <input
            type="text"
            className="form-control text-start col-2"
            name="descripcion"
            placeholder="Descripcion"
            value={descripcion}
            onChange={(e) => setBody(e.target.value)}
            />
            <button
              className="form-control text-start col-2 btn btn-outline-dark"
              type="submit"
              onClick={(e) => submitHandler(e)}>Submit</button>

          </div>

         
        </form>
      </div>
    </div>
    </div>
  </div>;
}

export default PostForm;