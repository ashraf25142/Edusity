import React from 'react'
import './gallery.css'
import photo_1 from '../../assets/gallery-1.png'
import photo_2 from '../../assets/gallery-2.png'
import photo_3 from '../../assets/gallery-3.png'
import photo_4 from '../../assets/gallery-4.png'
import arrow from '../../assets/white-arrow.png'

function Gallery() {
    return (
        <div className='gallery' id='gallery'>
            <div className='photos'>
                <div>
                    <img src={photo_1} alt='' />
                </div>
                <div>
                    <img src={photo_2} alt='' />
                </div>
                <div>
                    <img src={photo_3} alt='' />
                </div>
                <div>
                    <img src={photo_4} alt='' />
                </div>
            </div>
            <div className='bttn'>
                <button>See more here <img src={arrow} alt=''/></button>
            </div>
        </div>
    )
}

export default Gallery;
