import React from 'react';
import slider from './slider.module.scss';

const Slider = () => {
    return (
        <>
            <div className={slider.conteiner}>
                Контейнер слайдера
                <div className={slider.slider}>
                    Слайдер
                </div>
            </div>

        </>
    );
}

export default Slider;