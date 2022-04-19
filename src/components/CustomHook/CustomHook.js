import React,{useState,useEffect} from 'react';

const CustomHook = () => {
    const [tours,setTours]=useState([]);


    useEffect(()=>{
        fetch('data.json')
        .then(result =>result.json())
        .then(data => setTours(data));
    },[]);
    return [tours];
};

export default CustomHook;