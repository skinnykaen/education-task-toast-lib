import React from 'react';
import toast from './../../service/ToastClass';

export default () => {
    return(
        <div>
            <input type="button" onClick={()=>{
                console.log(example)
                toast.addToast(example)}}></input>
        </div>
    )
}


let example = {
    type: 'info',
    position: 'bottom-right',
    textColor: '',
    padding: '10px',
    backgroundColor: '',
    autoDelete: false,
    showDuration: 5000,
    description: ' toast example',
    heading: ' toast',
    animation: 'in-left',
    icon: ''
  };