import React from 'react';
import Product from './Product';

function Products(props) {
    const arr = props.filter

    return(
        <>
        <div id={props.title} className="flex flex-col items-center font-[Arial,Helvetica,sans-serif!important] my-12">   
            <h1 className=" tracking-wider text-5xl">{props.title}</h1>
            <div>
                <form className="text-xl my-8">
                    <span className="text-[#a52a2aa1] font-extrabold tracking-widest ml-4">Filter By </span>
                    {arr.map((ele,index)=>{
                        return (
                            <div className="inline-block" key={ele} >
                                <input className="ml-4 "type="radio" value={ele} name={props.title}/>{ele}
                            </div>
                        );
                    })}
                </form>
            </div>
            <div className='flex flex-wrap justify-center'>
                <Product title={props.title} cla={props.cla}></Product>
            </div>
        </div>
        </>
    )
}

export default Products