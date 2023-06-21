import { useParams } from "react-router-dom";
import ProductsData from "../ProductsData";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"
import Swal from 'sweetalert2'

function ProductDetails(props) {
    const params = useParams()
    let ID = params.id

    let navigate = useNavigate()
    
    const [size, setSize] = useState('XS')
    const [color, setColor] = useState('red')
    const [quantity, setQuantity] = useState(1)

    const sizeInput = (event) => {
        setSize(event.target.value);
    };
    const colorInput = (event) => {
        setColor(event.target.value);
    };
    const quantityInput = (event) => {
        setQuantity(+event.target.value);
    };

    /* In the terminal of the folder that has the file:
        json-server --watch db.json --port 8000

        NOTE: 8000 ==> other port as the normal react app works on 3000
        NOTE: We should run the watch json while running the app
    */

    // To avoid refreshing form
    const formSubmit = (id, image, title, description, price) => {
        fetch("http://localhost:8000/ProductsCart", {
            method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify({
                id: id,
                title: title,
                price: price,
                totalPrice: price*quantity,
                description: description,
                size: size,
                color: color,
                quantity: quantity,
                image: image
            })
        }).then((res) => {
            if(res.ok){
                Swal.fire({
                    title:"You added the product successfuly",
                }).then((data) => {
                    if(data.isConfirmed){
                        navigate("/cart")
                    }
                })
            }
        })
    } 

    return(
        <>
            {ProductsData.map((ele)=>{
                if(ele.id===+ID){
                    return(
                        <div key={ele.id} className="flex justify-center my-10">
                            <div className="w-[30%]">
                                <img className="h-[450px] w-[350px]" src={ele.image} alt={ele.title}></img>
                            </div>
                            <div className="w-[30%]">
                                <h1 className="text-5xl font-medium text-[#4c4c4c]">{ele.title}</h1>
                                <h1 className="text-3xl font-medium text-[#efd058] my-5">{ele.price}$</h1>
                                <p className="text-[#8e8e8edd]">{ele.description}</p>

                                <form onSubmit={(e)=>{
                                    e.preventDefault();
                                    formSubmit(ele.id, ele.image, ele.title, ele.description, ele.price)
                                    }}>
                                    <fieldset>
                                        <legend className="text-2xl py-5">Details</legend>
                                        <label><p className="text-[#efd058]">Choose your size</p>
                                            <input id="xs" type="radio" name="size" value="XS"onChange={sizeInput}/> XS 
                                            <input className="ml-3" id="s" type="radio" name="size" value="S" onChange={sizeInput}/> S 
                                            <input className="ml-3" id="m" type="radio" name="size" value="M" onChange={sizeInput}/> M 
                                            <input className="ml-3" id="l" type="radio" name="size" value="L" onChange={sizeInput}/> L 
                                            <input className="ml-3" id="xl" type="radio" name="size" value="XL" onChange={sizeInput}/> XL 
                                            <input className="ml-3" id="xxl" type="radio" name="size" value="2XL" onChange={sizeInput}/> 2XL
                                            <input className="ml-3" id="xxxl" type="radio" name="size" value="3XL" onChange={sizeInput}/> 3XL 
                                        </label>
                                        <br/>
                                        <label><p className="text-[#efd058]">Choose your color</p>
                                            <input id="red" type="radio" name="color" value="red" onChange={colorInput}/> Red
                                            <input className="ml-3" id="blue" type="radio" name="color" value="blue" onChange={colorInput}/> Blue
                                            <input className="ml-3" id="yellow" type="radio" name="color" value="yellow" onChange={colorInput}/> Yellow 
                                        </label>
                                        <br/>
                                        <label><p className="text-[#efd058]">Number of items</p>
                                            <input className="border-2 text-black" id="number" type="number" name="range" min="1" max="10" step="1" defaultValue="1" onChange={quantityInput}/>
                                        </label>
                                    </fieldset>
                                    <br/>
                                    <button className="bg-[#4869bbc6] text-white text-lg p-4 
                                    hover:opacity-70" type="submit">Add To Cart</button>
                                </form>

                            </div>
                        </div>
                    )
                }
                return null; /* To fix this issue of " Array.prototype.map() expects a value to be returned at the end of arrow function"
                                return null; statement after the if statement to explicitly return a value for cases where the condition is not met */
            })}
        </>
    )
}

export default ProductDetails