import { useState } from "react";

function CartList(props) {
    const QuantityStyle = "bg-[#dd1f1f9e] text-white w-7 flex items-center justify-center cursor-pointer";
    const [quantity, setQuantity] = useState(props.ele.quantity)
    const [price, setPrice] = useState(props.ele.totalPrice)

    const minus = ()=>{
        if(quantity === 1 ){
            setQuantity(1)
        }else{
            setQuantity(quantity-1)
            editQuantity(props.ele.id, quantity-1, props.ele.price*(quantity - 1))
            props.sendData(quantity-1)
        }
    }
    const add = ()=>{
        setQuantity(quantity+1)
        editQuantity(props.ele.id, quantity+1, props.ele.price*(quantity + 1))
        props.sendData(quantity+1)
    }

    const editQuantity = (productID, q, p) => {
        fetch(`http://localhost:8000/ProductsCart/${productID}`,{
            method: "PUT",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify({
                id: props.ele.id,
                title: props.ele.title,
                price: props.ele.price,
                totalPrice: p,
                description: props.ele.description,
                size: props.ele.size,
                color: props.ele.color,
                quantity: q,
                image: props.ele.image,
            })
        }).then((res)=>res.json()).then((data)=>{
            setQuantity(q)
            setPrice(p)
        })
    }

    return(
        <>
        <div className='flex w-[100%] items-center justify-around'>
            <div> 
                <img className="w-[10rem] shadow-lg rounded-lg" alt="product_img" src={props.ele.image}/>
            </div>
            <div className='flex flex-col'>
                <p className="mb-5"><b className="mr-2">Product:</b>{props.ele.title}</p>
                <p className="flex mb-5"> <b className="mr-2">Color:</b>
                    <span className="rounded-full border-2 p-[10px] cursor-pointer bg-blue-500 ml-1 w-[20px] h-[20px]"></span>
                </p>
                <p> <b className="mr-2">Size:</b>{props.ele.size}</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <div className="counter flex items-center text-xl justify-start">
                    Quantity
                    <div className="ml-2 shadow-md flex">
                        <div className={QuantityStyle+` rounded-l-lg`} onClick={minus}>-</div>
                        <div className="w-8 flex items-center justify-center border-[1px] border-[#dd1f1f9e]">{quantity}</div>
                        <div className={QuantityStyle+` rounded-r-lg`} onClick={add}>+</div>
                    </div>
                </div>
                <p className="flex items-center justify-center text-3xl font-bold mt-3">
                    {price}$
                </p>
            </div>
        </div>
        </>
    )
}

export default CartList