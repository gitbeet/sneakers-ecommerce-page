import React, { useEffect, useState } from 'react'
import '../css/imageCarousel.css'
import arrowLeft from '../images/icon-previous.svg'
import arrowRight from '../images/icon-next.svg'
import { useShoppingCart } from '../context/ShoppingCartContext'


function ImageCarousel({
                toggleImageModal,
                modal=false,
                initialActiveImage=0,
                }) {

    
    const {product} = useShoppingCart()
    const [activeImage,setActiveImage] = useState(initialActiveImage)
                  
    
    useEffect(() => {      

        document.addEventListener('keydown', function(e) {
            if(e.key === 'ArrowLeft'){
                setActiveImage(prev => prev < 1 ? product.images.full.length - 1  : prev -1)
            }
            if(e.key === 'ArrowRight'){
                setActiveImage(prev => prev > product.images.full.length - 2 ? 0 : prev + 1)
            }
        });

        return () => document.removeEventListener('keydown' , function(e) {
            if(e.key === 'ArrowLeft'){
                setActiveImage(prev => prev < 1 ? product.images.full.length - 1  : prev -1)
            }
            if(e.key === 'ArrowRight'){
                setActiveImage(prev => prev > product.images.full.length - 2 ? 0 : prev + 1)
            }
        })
    },[]) 

    
    function changeImage(direction){
        if(direction === 'previous'){
            if(activeImage < 1){
                setActiveImage(0)
            }
            else{
                setActiveImage(prev => prev-1)
            }
        }
        if(direction === 'next'){
            if(activeImage > product.images.full.length-2){
                setActiveImage(product.images.full.length-1)
            }
            else{
                setActiveImage(prev => prev+1)
            }
        }
    }


  return (
    <div className={`image-carousel ${modal ? 'image-carousel-modal' : ''}`}>
        <div onClick={() => changeImage('previous')}
             className={`navigation-arrow navigation-arrow-left ${modal ? 'arrow-modal arrow-modal-left' : ''}`}>
            <img src={arrowLeft} alt='arrow left' />
        </div>
        <div onClick={() => changeImage('next')}
             className={`navigation-arrow navigation-arrow-right  ${modal ? 'arrow-modal arrow-modal-right' : ''}`}>
            <img src={arrowRight} alt='arrow Right' />
        </div>
        <div className={`active-image ${modal ? 'carousel-image-modal' : ''}`}>
            {product.images.full.map((image,index) => {
                return <img onClick={() => toggleImageModal(activeImage)}
                            key={index}
                            className={`carousel-image ${index === activeImage ? '' : 'hide'}`} 
                            src={image} 
                            alt='carousel img' />
            })}            
        </div>
        <div className={`image-carousel-thumbnails ${modal ? 'modal-carousel-thumbnails' : '' }`}>
        {product.images.thumbnail.map((image,index) => {
                return <div className={`${index === activeImage ? 'image-border' : 'image-border-invisible'} ${modal && index !== activeImage ? 'modal-hover-bg' : ''}`}>
                            <img onClick={() => setActiveImage(index)}
                                        key={index}
                                        className={`carousel-thumbnail ${index !== activeImage ? '' : 'image-mute'} ${modal && index !== activeImage ? 'modal-hover' : ''}`}
                                        src={image}
                                        alt='carousel thumbnail' />
                </div>
            })} 
        </div>
    </div>
  )
}

export default ImageCarousel
