import React from 'react'; // eslint-disable-line
import { Link } from "react-router-dom";

function Links (){

return (
    <div className="container m-0 p-0 ge-fo-links">
        <div className="row d-flex flex-column flex-sm-row justify-content-center justify-content-sm-between">
                <div className="col-12 col-sm-6 col-md-3 d-flex flex-column align-items-center align-items-md-start">
                    <h4 className="mb-3">Lorem ipsum</h4>
                    <div>
                        <p  className="m-0">
                            Lorem ipsum dolor vero praesentium dignissimos maiores voluptates. Atque enim odit corrupti.
                        </p>
                    </div>
                    <div>
                       <img src="/img/footer-whatsapp-logo.svg" alt=""/>
                       <img src="/img/footer-linkedin-logo.svg" alt=""/>
                       <img src="/img/footer-facebook-logo.svg" alt=""/>
                       <img src="/img/footer-instagram-logo.svg" alt=""/>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-3 d-flex flex-column justify-content-between align-items-center">
                    <h4 className="mb-3">Lorem ipsum</h4>
                    <div className="d-flex flex-column justify-content-around h-100">         
                        <div><Link to="/" >Lorem ipsum dolor sit</Link></div>
                        <div><Link to="/" >Lorem ipsum dolor sit</Link></div>
                        <div><Link to="/" >Lorem ipsum dolor sit</Link></div>
                        <div><Link to="/" >Lorem ipsum dolor sit</Link></div>                                            
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-3 d-flex flex-column justify-content-between align-items-center">
                    <h4 className="mb-3">Lorem ipsum</h4>
                    <div className="d-flex flex-column justify-content-around h-100">
                        <div><Link to="/" >Lorem ipsum dolor sit</Link></div>
                        <div><Link to="/" >Lorem ipsum dolor sit</Link></div>
                        <div><Link to="/" >Lorem ipsum dolor sit</Link></div>
                        <div><Link to="/" >Lorem ipsum dolor sit</Link></div>                  
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-3 d-flex flex-column justify-content-between align-items-center">
                    <h4 className="mb-3">Lorem ipsum</h4>
                    <div className="d-flex flex-column justify-content-around h-100">
                        <div><Link to="/" >Lorem ipsum dolor sit</Link></div>
                        <div><Link to="/" >Lorem ipsum dolor sit</Link></div>
                        <div><Link to="/" >Lorem ipsum dolor sit</Link></div>
                        <div><Link to="/" >Lorem ipsum dolor sit</Link></div>    
                    </div>
                </div>             
        </div>
    </div>
    )
}

export default Links;