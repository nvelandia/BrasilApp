import React from 'react'; // eslint-disable-line

function Copyright (){

return (
    <div className='ge-fo-copyright'>
        <div className="row">
            <div className='col-12 col-md-5 d-flex justify-content-center justify-content-md-start'>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing.
                </p>
            </div>
            <div className='col-12 col-md-7 d-flex flex-column flex-sm-row justify-content-center justify-content-md-end'>
                <div className='d-flex justify-content-center align-items-center'>
                    <p>Powered By</p>
                    <img src="/img/pagarme_logo.svg" alt="" className="mb-1" />
                </div>
                <div className='d-flex ml-0 ml-sm-3 ml-lg-5 justify-content-center justify-content-md-end align-items-center'>
                    <p>Developed By</p>
                    <img src="/img/greenflame_logo.svg" alt="greenflame" />
                </div>
            </div>
        </div>   
    </div>
    )
}

export default Copyright;