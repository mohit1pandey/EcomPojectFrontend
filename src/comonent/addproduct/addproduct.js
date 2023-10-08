import React, { useState } from 'react'
import './addproduct.css'

const AddProduct = () => {
    //onsubmit
    const[name,setName]=useState('');
    const[price,setPrice]=useState('');
    const[category,setCategory]=useState('');
    const[brand,setBrand]=useState('');
    const[error,setError]=useState(false);

    const handleSubmit=(e)=>{
        e.preventDefault()
     }
    //add product
    const addProduct = async()=>{
        //simple vaidation
        if(!name|| !price|| !category ||! brand ){
            //ek bhi nhi hai to false return karo
            setError(true);
            return false;
        }

        console.warn(name,price,category,brand);
        //get the value of the id
        const userId= JSON.parse(localStorage.getItem('user'))._id;

        let result= await fetch('http://127.0.0.1:5500/add-product',{
            method:"post",
            body:JSON.stringify({name,price,category,brand,userId}),
            headers:{
                'Content-Type': 'application/json',
                authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result= await result.json();
        //get a alert
        if(result.name){
            alert('Item added Successfully')
            setError(false)
        }
        console.warn(result)

    }


    return (
        <div className="App">
            <h3 className='h3'>Add the Product</h3>

            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Product Name' value={name} onChange={(e) => setName(e.target.value)} />
                {error && !name&& <span className='validation'>Enter the Name</span>}
               

                <input type="text" placeholder='Price' value={price} onChange={(e) => setPrice(e.target.value)} />
                {error && !price&& <span className='validation'>Enter the Price</span>}
                
                <input type="text" placeholder='Define Category' value={category} onChange={(e) => setCategory(e.target.value)} />
                {error && !category&& <span className='validation'>Enter The Category</span>}
                
                <input type="text" placeholder='Brand' value={brand} onChange={(e) => setBrand(e.target.value)} />
                {error && !brand&& <span className='validation'>Enter the valid Brand</span>}
                <button onClick={addProduct} className='btn'>Add-Item</button>
            </form >

        </div>
    )
}

export default AddProduct;