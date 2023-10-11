import { destroyPostAsync} from './postSlice'

function ButtonGroup(props:any) {

    function handleClick(e:any) {
        const payload = {
            post: {
                post_id: props.post_id
            }
        }
        props.dispatch(destroyPostAsync(payload));
    }
  return <button 
      className="btn btn-outline-danger" 
      onClick={(e) => handleClick(e)}>Delete</button>
  ;
}

export default ButtonGroup;