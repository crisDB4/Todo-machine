import React from "react";

function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
        setTimeout(()=>{
            try {
                const localStorageItem = localStorage.getItem(itemName);
    
                let parsedItem;
                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = initialValue;
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                    setItem(parsedItem);
                }
    
                setLoading(false);
            } catch {
                setLoading(false);
                setError(true);
            }
        }, 2000);
    },[]);


    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
    };

    return {
        item, 
        saveItem,
        loading,
        error,
    };
}

export { useLocalStorage };

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: false, importance: 'poca' },
//   { text: 'Tomar el curso de introduccion a react.js', completed: true, importance: 'moderada'  },
//   { text: 'Llorar con la llorona', completed: true, importance: 'moderada'},
//   { text: 'LALALALALAL', completed: false, importance: 'gran'},
//   { text: 'Hacer ejercicio', completed: true, importance: 'gran'},
// ];

// localStorage.setItem('TODOS_V1',JSON.stringify(defaultTodos));

// localStorage.removeItem('TODOS_V1');