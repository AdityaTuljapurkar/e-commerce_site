import {React} from 'react';
import {Link} from 'react-router-dom';
import { useState } from 'react';   
import { useEffect } from 'react';
import img1 from '../images/img1.avif';
import img2 from '../images/img2.avif';
import img3 from '../images/img3.avif';
import img4 from '../images/img4.avif';
import img5 from '../images/img5.avif';
import '../css/image_grallary.css';
const ImageGallary = () => {
const images = [img1, img2, img3, img4, img5];
const [index, setIndex] = useState(0);
useEffect(()=>{
    const interval = setInterval(()=>{
        setIndex(index => (index + 1) % images.length);
    }
    , 4000);
    return()=> clearInterval(interval)
    
},[])
return(
    <div>
        <h1>Image Grallary</h1>
        <div id ='image-gallary'>
            <img src={images[index]} alt={`Image -> ${index}`}  />
        </div>
    </div>
);}
export default ImageGallary;