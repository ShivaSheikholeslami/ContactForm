import React, { useState } from 'react';
import '../component/ContactForm.css';
import emailjs from 'emailjs-com';

export default function ContactForm() {
  const [firstname,setFirstName]=useState('');
  const[password,setPassWord]=useState('');
  const[email,setEmail]=useState('');
  const[comment,setComment]=useState('');
  


  
    function sendEmail(e) {

    e.preventDefault();
    // we need to pass 4 parameters and sign up to emailjs.com
    // serviveId,Template ID,e.target,userID
    emailjs.sendForm('service_l36o6z4','template_i16vsbb',e.target,'7_lICOZJg2NcfrW2Y').then(Response=>{console.log(Response);
    }).catch(error=> console.error(error));
  }
  


  return (
    <div className='form-box'>

      <form onSubmit={sendEmail}>

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
                name='user-email'
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
