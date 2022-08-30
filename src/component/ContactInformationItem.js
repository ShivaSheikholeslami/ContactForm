import React from 'react';
import {MdPlace} from 'react-icons/md';
import './ContactInformationItem.css';
// import PText from './PText';

export default function ContactInformationItem(
    {
        icon=<MdPlace></MdPlace>,
        text="this is ..."
    }
) {
  return (
    <div className='info-box'>
        <div className='icon'>
            {icon}
        </div>
        <div className='text'>
           <pText>{text}</pText> 

        </div>
    </div>
  );
}
