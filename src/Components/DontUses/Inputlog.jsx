import { useState } from "react";
import React from 'react';

const Inputlog = () => {
    const [value, setValue] = useState('Text for imput')
    return (
        <div>
            <h1>{value}</h1>
            <input
                type="text"
                value={value}
                //primeste datele de la input , si o salvam in stare
                //sinhronizarea datelor  
                onChange={event => setValue(event.target.value)}
            />
        </div>
    );
};

export default Inputlog;