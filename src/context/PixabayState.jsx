import React, { useEffect, useState } from 'react'
import PixabayContext from './PixabayContext'

const PixabayState = (props) => {
    const [imageData , setImageData] = useState([])
    const api_key = "52028077-bc540d523621f7120df24dae3";
    useEffect(() => {
        const fetchData = async () => {
            const api = await fetch(`https://pixabay.com/api/?key=${api_key}&q=london+flowers&image_type=photo&pretty=true&per_page=100`

            );
            const data = await api.json();
            setImageData(data.hits)
            console.log(data.hits);

        };
        fetchData();


    }, []);

    return (
        <PixabayContext.Provider value={{ imageData }} >{props.children}</PixabayContext.Provider>
    )
}

export default PixabayState