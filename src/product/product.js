// this is the / file
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './product.css'



const ProductList = () => {

    const [product, setProduct] = useState([])

    useEffect(() => {
        getProducts();
    },[])
// on the get product api we send the tocken in the form of json
// we have to do the same in each and evry api call
    const getProducts = async() => {
        let result=await fetch('http://127.0.0.1:5500/products',{
            headers:{
                authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        })


        result = await result.json();
        //set the state
        setProduct(result);
       
    }
    const deleteProduct= async(id)=>{
        console.log(id)
        let result= await fetch(`http://127.0.0.1:5500/products/${id}`,{
            method:'Delete',
            headers:{
                authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        })
        result= await result.json();
        if(result){
            alert('Item deleted')
            // to refresh change the state getproduct will call setProduct( ) state method
            getProducts();
        }

    }

    // serach the item
    const serachItem =async (e)=>{
        let key = e.target.value;
        if(key){
            let result=await fetch(`http://127.0.0.1:5500/search/${key}`,{
                headers:{
                    authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
                }
            })
            result= await result.json();
            if(result){
                setProduct(result)
            }
        }else{
            getProducts();
        }
        

    }


    return (
        <div className='App'>
            <h2 className='h2'>Product List</h2>
            <input className='input-product' type="text" placeholder='Search Items' onChange={serachItem}/>
         <div className="list-div">
                <ul className='ul-product'>
                <li>S.No.</li>
                <li>Name</li>
                <li>Price</li>
                <li>Category</li>
                <li>Brand</li>
                <li>Operation</li>
            </ul>
            {
               product.length>0 ? product.map((item,index)=>{
                    return(
                        <ul className='ul-product' key={item._id}>
                            <li>{index+1}</li>
                            <li>{item.name}</li>
                            <li>{item.price}</li>
                            <li>{item.category}</li>
                            <li>{item.brand}</li>
                            <li>
                                <button onClick={()=>deleteProduct(item._id)} className='btn-pro'>Delete</button>
                                {/* go and update the specific product */}
                               <button className='btn-pro'><Link to={`/update/${item._id}`}> Update</Link></button> 
                            </li>
                        </ul>
                    )
                })
                : <h2 className='product-h2'>No Product Found</h2>
            }
            </div>

        </div>
    )
}

export default ProductList


/*
import React, { useEffect, useState } from 'react'
import './product.css'



const ProductList = () => {

    const [product, setProduct] = useState([])

    useEffect(() => {
        getProducts();
    },[])

    const getProducts = async() => {
        let result=await fetch('http://127.0.0.1:5500/products')
        result = await result.json();

        setProduct(result);
       
    }
    console.log(product)
    return (
        <div className='App'>
            <h2 className='h2'>Product List</h2>
         <div className="list-div">
                <ul className='ul-product'>
                <li>S.No.</li>
                <li>Name</li>
                <li>Price</li>
                <li>Category</li>
                <li>Brand</li>
            </ul>
            {
                product.map((item,index)=>{
                    return(
                        <ul className='ul-product'>
                            <li>{index}</li>
                            <li>{item.name}</li>
                            <li>{item.price}</li>
                            <li>{item.category}</li>
                            <li>{item.brand}</li>
                        </ul>
                    )
                })

            }
            </div>

        </div>
    )
}

export default ProductList
 */