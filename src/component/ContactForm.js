import React, { useState } from 'react';
import '../component/ContactForm.css';

export default function ContactForm() {
  const [firstname,setFirstName]=useState('');
  const[password,setPassWord]=useState('');
  const[email,setEmail]=useState('');
  const[comment,setComment]=useState('');


  return (
    <div className='form-box'>
      <form>
         <div className='form-group'>
            <label>First Name:</label>

            <input type="Text" 
             name='username'
             id='name' 
             value={firstname}
             onChange={(e)=>setFirstName(e.target.value)}>

             </input>

         </div>

          <div className='form-group'>
              <label>password:</label>

              <input type="password" 
              name='password'
              id='password' 
              value={password}
              onChange={(e)=>setPassWord(e.target.value)}>

              </input>
            </div>

              <div className='form-group'>
                <label>email:</label>

                <input type="email" 
                name='email'
                id='email' 
                value={email}
                onChange={(e)=>setEmail(e.target.value)}>

                </input>
              </div>
              <div className='form-group'>
                <label>Comment:</label>

                <textarea type="text" 
                name='comment'
                id='comment' 
                value={comment}
                onChange={(e)=>setComment(e.target.value)}>

                </textarea>
              </div>
              <button type="submit">send</button>
      </form>
    </div>
  );
}
