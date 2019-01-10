import React from 'react';
import { Link } from 'react-router-dom';

import Card from '../hoc/card';
import Auth from '../hoc/auth';


 const Profiles = (props) =>{

   const redir = () => {
     //props.history.push('/')
  }

   return (
     <Auth>
       <Card>
          <Link to = {{
            pathname:`${props.match.url}/post`
          }}> Take me to /profiles/post</Link>

          //{redir()}

       </Card>
      </Auth>
   )
 }

 export default Profiles;
