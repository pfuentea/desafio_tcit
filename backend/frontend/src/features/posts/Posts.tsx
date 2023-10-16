import React, { useEffect, useState } from 'react';
//import { useDispatch } from 'react-redux';
import {useAppSelector,useAppDispatch } from "../../app/hooks";
import Post from './Post';
import PostForm from './PostForm';
import { fetchPostsAsync, selectPosts, selectStatus, Statuses, updatePostAsync } from './postSlice';
import DataTable from 'datatables.net-dt';

function Posts() {
  const posts = useAppSelector(selectPosts);
  const status = useAppSelector(selectStatus)
  const dispatch = useAppDispatch();
  

  const [postToEdit, setPostToEdit] = useState(0);

  useEffect(() => {
    dispatch(fetchPostsAsync());
  }, [dispatch])
  

  function toggleEditForm(post_id?:number) {
      if (postToEdit === post_id) {
          setPostToEdit(0);
      } else {
            setPostToEdit(post_id as number);
      }
  }

  function submitEdit(formData:any) {
      dispatch(updatePostAsync(formData));
      toggleEditForm();
  }
  

  let contents;
  let table = new DataTable('#myTable');


  if (status !== Statuses.UpToDate) {
    contents = <div>{status}</div>
  } else {
      contents = 
      <div className="container">
        <div className="row text-center">
            <div className='col-12'>
            <h3>{status}</h3>
            <div className="table-responsive" id="main_table">
            <table className="table table-striped " id="myTable">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Acción</th>
                    </tr>

                </thead>
                <tbody>
                    {posts && posts.length > 0 && posts.map(post => {
                        return  <Post 
                                dispatch={dispatch}
                                post={post}
                                toggleEditForm={() => toggleEditForm(post.id)}
                                postToEdit={postToEdit}
                                submitEdit={submitEdit}
                            />
                    
                    })}

                </tbody>
            </table>
            </div>
            <PostForm />
            </div>
            </div>
      </div>
      
         
      
  }
  return <div><h1>Posts</h1>
        {contents}
  </div>
}

export default Posts;