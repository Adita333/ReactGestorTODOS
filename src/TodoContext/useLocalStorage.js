import React from "react";

function useLocalStorage(itemName, itemInicialValue){

  const [item, setItems ] = React.useState(itemInicialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError ] = React.useState(false);
  

  React.useEffect(()=>{
    setTimeout(() =>{
      try{
        const localStorageItems = localStorage.getItem(itemName);
    
      let parsedItems;
    
      if(!localStorageItems){
        localStorage.setItem( itemName, JSON.stringify(itemInicialValue));
        parsedItems = itemInicialValue;
      }else{
        parsedItems = JSON.parse(localStorageItems);
        setItems(parsedItems);
      }
      
      setLoading(false);
      } catch(error){
        setError(true);
        setLoading(false);
      }
    }, 2000)
  
  });

    
    const saveItems = (newItems) => {
      localStorage.setItem(itemName, JSON.stringify(newItems));
      setItems(newItems);
    }
  
    return {
      item, 
      saveItems,
      loading,
      error,
    };
  
  }

  export { useLocalStorage};