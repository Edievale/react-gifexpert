// Para crear rápido un componente escribir "rafc"+tab
import React, { useState } from 'react'
import { AddCategory,GifGrid } from "./components" // buscará en el index.js de components

const GifExpertApp = () => {
    const key ='ZX9acdwPchWSzcPQg74NU89tF1atvlqH'
    const [categories, setCategories] = useState([]); // cuando note un cambio va a volver a redibujar.

    const onAddCategory = (newCategory) =>{
        if (categories.includes(newCategory)) return;

        setCategories([newCategory,...categories]);
    }
 

  return (
    <>
    {/* titulo */}
    <h1>GifExpertApp</h1>

    {/* Input */}
    
    {/* <AddCategory addCategories = {setCategories}/> */}
    <AddCategory onNewCategory = {(data) => onAddCategory(data)}/>


    <ul className="list-group list-group-flush">
        {
            categories.map( cat => {
               return ( 
                <GifGrid key={cat} 
                         category={cat}>
                </GifGrid>
                    
               )    
            })
        }
    </ul>
    </>
  )
}

export default GifExpertApp
