import { useParams } from "react-router-dom";
import ProductsData from "../ProductsData";
import React, { useState } from 'react';

function ProductDetails(props) {
    const params = useParams()
    let ID = params.id

    // To avoid refreshing form
    const formSubmit = (e) => {
        e.preventDefault();
    }

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    console.log(inputValue)

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

                                <form onSubmit={formSubmit}>
                                    <fieldset>
                                        <legend className="text-2xl py-5">Details</legend>
                                        <label className="text-[#efd058]">Choose your size</label> <br/>
                                        <input id="xs" type="radio" name="size" value="XS"  onChange={handleInputChange}/> XS 
                                        <input className="ml-3" id="s" type="radio" name="size" value="S" onChange={handleInputChange}/> S 
                                        <input className="ml-3" id="m" type="radio" name="size" value="M" onChange={handleInputChange}/> M 
                                        <input className="ml-3" id="l" type="radio" name="size" value="L" onChange={handleInputChange}/> L 
                                        <input className="ml-3" id="xl" type="radio" name="size" value="XL" onChange={handleInputChange}/> XL 
                                        <input className="ml-3" id="xxl" type="radio" name="size" value="2XL" onChange={handleInputChange}/> 2XL
                                        <input className="ml-3" id="xxxl" type="radio" name="size" value="3XL" onChange={handleInputChange}/> 3XL 
                                        <br/>
                                        <label className="text-[#efd058]">Choose your color</label> <br/>
                                        <input id="red" type="radio" name="color" value="red" onChange={handleInputChange}/> Red
                                        <input className="ml-3" id="blue" type="radio" name="color" value="blue" onChange={handleInputChange}/> Blue 
                                        <input className="ml-3" id="yellow" type="radio" name="color" value="yellow" onChange={handleInputChange}/> Yellow 
                                        <br/>
                                        <label className="text-[#efd058]">Number of items</label> <br/>
                                        <input className="border-2" id="number" type="number" name="range" min="1" max="10" step="1" defaultValue="1" onChange={handleInputChange}/>
                                    </fieldset>
                                    <br/>
                                    <button className="bg-[#4869bbc6] text-white text-lg p-4 
                                    hover:opacity-70" type="button">Add To Cart</button>
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