import React, { useState, useEffect } from 'react'; // eslint-disable-line
import Banner from '../atoms/banner';

function Banners (){

    const banners = [
        {
            text: 'Alteracao e cancelamento sem custo',
            icon: '/img/check-circle.svg',
            img: '/img/image_banner_1.jpg',
        },
        {
            text: 'Alteracao e cancelamento sem custo',
            icon: '/img/credit-card.svg',
            img: '/img/image_banner_2.jpg',
        },
        {
            text: 'Alteracao e cancelamento sem custo',
            icon: '/img/tag.svg',
            img: '/img/image_banner_3.jpg',
        }
    ]

return (
    <div className='ho-banners'>
        <h3>O MELHOR PRECO DO MERCADO <span>GARANTIDO!</span></h3>
        <div className='ho-promo'>
      { banners.map((x, i) => 
        <Banner text={x.text} icon={x.icon} img={x.img} key={i} />
      )}
        </div>
    </div>
)
}

export default Banners;