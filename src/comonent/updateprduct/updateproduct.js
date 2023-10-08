import React, { useEffect, useState } from 'react'
import { useParams ,useNavigate } from 'react-router-dom';


const UpdateProduct = () => {
    //onsubmit
    const[name,setName]=useState('');
    const[price,setPrice]=useState('');
    const[category,setCategory]=useState('');
    const[brand,setBrand]=useState('');
    //get the parameter 
    const params =useParams();
    const navigate= useNavigate();
  
    useEffect(()=>{
       getProductsDetails()
    },[])

    const getProductsDetails=async()=>{
        let result= await fetch(`http://127.0.0.1:5500/products/${params.id}`,{
            headers:{
                authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        })
        result=await result.json();
        // is time data array ke form me aaya hai
       setName(result[0].name);
       setBrand(result[0].brand);
       setCategory(result[0].category);
       setPrice(result[0].price)
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
     }
    //update product
    const updateProduct = async()=>{
      let result = await fetch(`http://127.0.0.1:5500/products/${params.id}`,{
        method: 'Put',
        body: JSON.stringify({name,brand,category,price}),
        headers:{
            'Content-Type':'application/json',
            authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
        }
      })
        result= await result.json();
        
        if(result.acknowledged){
            alert("Item Updated Successfully")
            navigate('/');

        }else{
            alert("some thing went wrong")
        }
      }


    return (
        <div className="App">
            <h3 className='h3'>Update Product</h3>

            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Product Name' value={name} onChange={(e) => setName(e.target.value)} />
                
                <input type="text" placeholder='Price' value={price} onChange={(e) => setPrice(e.target.value)} />
                
                <input type="text" placeholder='Define Category' value={category} onChange={(e) => setCategory(e.target.value)} />
                
                <input type="text" placeholder='Brand' value={brand} onChange={(e) => setBrand(e.target.value)} />
                <button onClick={updateProduct} className='btn'>Update-Item</button>
            </form >

        </div>
    )
}

export default UpdateProduct;