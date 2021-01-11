import React from 'react'; // eslint-disable-line
import Inputron from '../atoms/inputron';
//import Buttron from '../atoms/buttron';

function Subscribe (){

    

return (
    <div className='ge-fo-su'>
        <div>
            <p>Hola amigos</p>
        </div>
        <div>
            <Inputron icon={'/img/user-plus.svg'} placeholder={'Nome e Sobrenome'} />
        </div>
        <div>
            <Inputron icon={'/img/mail.svg'} placeholder={'Endereco de email'} />   
        </div>
        {/* <Buttron/> */}
    </div>
    )
}

export default Subscribe;