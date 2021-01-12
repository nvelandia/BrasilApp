import React from 'react'; // eslint-disable-line
import Subscribe from '../molecules/subscribe';
import Links from '../molecules/links';
import Copyright from '../molecules/copyright';


function Footer (){

    

return (
    
    <div className="footer ge-footer">
        <div className="ge-fo-pa">
            <Subscribe />
            <hr className='ge-fo-hr' />
            <Links/>
        </div>
        <Copyright/>
    </div>
    )
}

export default Footer;