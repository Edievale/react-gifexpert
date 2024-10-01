import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import {GifItem} from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {

  const {images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3 className='fw-bold'>{category}</h3>
      {
        // isLoading == true
        // ? (<h2>Cargando...</h2>)
        // : null

        isLoading && (<h2>Cargando...</h2>)
      }
      
      
      <div className="card-grid">
      {
        images.map((img) => ( 
          <GifItem key={img.id} {...img}></GifItem>
        ))
      }
      </div>
      
    </>
  )
}

export default GifGrid


