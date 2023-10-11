import React, { useEffect, useState } from 'react';
import ButtonGroup from './ButtonGroup';

function Post(props:any) {
    const [nombre, setTitle] = useState(props.post.nombre);
    const [descripcion, setBody] = useState(props.post.descripcion);
    
    const [isEditing, setIsEditing] = useState(props.postToEdit === props.post.id);
    useEffect(() => {
        setIsEditing(props.postToEdit === props.post.id);
    }, [props.postToEdit, props.post.id])

    function submitHandler(e:any) {
        e.preventDefault();
        const formData = {
            post: {
                id: props.post.id,
                nombre: nombre,
                descripcion: descripcion,
            }
        }
        props.submitEdit(formData)
        resetState();
    }

    function resetState() {
        setTitle(props.post.nombre);
        setBody(props.post.descripcion);
    }

    const titleElement = <td className="title text-start">{props.post.nombre}</td>;
    const bodyElement = <td className="card-text text-start">{props.post.descripcion}</td>;
    const buttonElement = <td className="card-text text-start "><ButtonGroup 
    post_id={props.post.id}
    dispatch={props.dispatch}
    toggleEditForm={props.toggleEditForm}
    /></td>;
    const editableTitle = <td><input 
                            type="text" 
                            className="form-control text-start" 
                            value={nombre} 
                            onChange={(e) => setTitle(props.post.nombre)} /></td>;
    const editableBody = <input 
                            type="text" 
                            className="form-control text-start"
                            value={descripcion}
                            onChange={(e) => setBody(e.target.value)} />;
    const submitButton = <button
                            type="submit"
                            className="form-control"
                            onClick={(e) => submitHandler(e)}>Submit</button>;
    return <tr>
        
        {isEditing ? editableTitle : titleElement}
        {isEditing ? editableBody : bodyElement}
        {isEditing ? submitButton : buttonElement}
                    
        </tr>
                   
  ;
}

export default Post;