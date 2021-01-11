import React from 'react'; // eslint-disable-line

function Banner (props){

    const { text, icon, img } = props;

return (
    <div className='ho-ba'>
        <div className='ho-con-img'>
            <img src={img} alt="" className='ho-ba-img'/>
        </div>
        <div className='ho-division'>
            <div className='ho-con-icon'>
                <img src={icon} alt="" className='ho-ba-ico'/>
            </div>
            <p className='ho-text'>{text}</p>
        </div>
    </div>
    )
}

export default Banner;