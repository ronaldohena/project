import React from 'react';
import { Link } from 'react-router-dom';


 const PostsItem = (props) =>{
   return (
     <div>
        {props.match.params.id} - {props.match.params.username}
     </div>
   )
 }

 export default PostsItem;
