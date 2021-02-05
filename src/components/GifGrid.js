import React from 'react'

import GifGridItem from "./GifGridItem";
import { useFecthGifs } from "../hooks/useFecthGifs";

const GifGrid = ({category}) => {

    // const [Images, setImages] = useState([]);
    const {data:images, loading }= useFecthGifs(category);
    
    
    return (
        <>
            <h3 className="animate__animated animate__bounce animate__delay-2s">{category}</h3>
            {loading && 'Cargando...'}

            <div className="card-grid">
                
                
                 { images.map(img =>(
                        < GifGridItem 
                        key={img.id}
                        {...img} 
                        />
                        ))} 
                
            </div>
        </>
    )
}

export default GifGrid;
