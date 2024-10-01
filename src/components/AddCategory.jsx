import { useState } from "react"


// export const AddCategory = ({addCategories}) => {
   export const AddCategory = ({onNewCategory}) => {
    
    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault(); // para que no se haga un refresco de la pantalla
        //console.log(event.target[0].value);
        //console.log(inputValue);
        // hacer validaciones
        if (inputValue.trim().length<= 1) return; // que no meta vacíos o una letra
        //addCategories(cat => [inputValue,...cat]);
        onNewCategory(inputValue.trim());
        setInputValue('');    
    }

 // •••> SALIDA     
  return (

    <form onSubmit={(event) => onSubmit(event)} className="input-group mb-3">

            <input type="text" className="form-control" placeholder="buscar gifs" aria-label="buscar gifs" aria-describedby="button-addon2"
                value={inputValue} 
                onChange={(event) =>
                        onInputChange(event)
                }/>
            
            <button className="btn btn-outline-info" type="button" id="button-addon2" onClick={onSubmit}><i className="bi bi-search-heart"></i> Agregar</button>
    </form>
  )
}
