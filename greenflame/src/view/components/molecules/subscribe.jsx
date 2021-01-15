import React from 'react'; // eslint-disable-line
import Inputron from '../atoms/inputron';
import Buttron from '../atoms/buttron';

function Subscribe (){

return (
    <div className="container m-0 p-0 ge-fo-su">
        <div className="row justify-content-between">
                <div className="col-3 m-0 justify-content-center align-items-center lh-1">
                    <p  className="m-0">Inscreva-se para receber nossas novidades e promocoes</p>
                </div>
                <div className="col-3 m-0">
                    <Inputron icon={'/img/user-plus.svg'} placeholder={'Nome e Sobrenome'} />
                </div>
                <div className="col-3 m-0">
                    <Inputron icon={'/img/mail.svg'} placeholder={'Endereco de email'} />   
                </div >
                <div className="col-3 m-0">    
                    <Buttron text={'CADASTRAR'}/>
                </div>
        </div>
    </div>
    )
}

export default Subscribe;