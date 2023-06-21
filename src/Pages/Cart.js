import { Link } from "react-router-dom";
import CartList from "../Components/CartList";
import { useState, useEffect } from "react";
import Swal from 'sweetalert2'

function Cart () {
    const btnStyle = "shadow-md p-4 rounded-md hover:text-[#605dec] font-semibold hover:bg-white bg-[#605dec] ease-in duration-200 cursor-pointer hover:scale-[1.1] text-white"
    const SummaryItemStyle = "flex justify-between mt-3 w-[100%]";

    /* In the terminal of the folder that has the file:
        json-server --watch db.json --port 8000

        NOTE: 8000 ==> other port as the normal react app works on 3000
        NOTE: We should run the watch json while running the app
    */

    const [products, setProducts] = useState([])
    
    const getAllProducts = () => {
        fetch("http://localhost:8000/ProductsCart").then((res)=>res.json()).then((data)=>{
            setProducts(data)
        })
    }
    useEffect(() => {
        getAllProducts()
    },[])

    const deleteFromCart = (productData)=>{
        Swal.fire({
            title: ` You are going to delete ${productData.title}`,
            showCancelButton: true
        }).then((data) =>{
            if(data.isConfirmed){
                fetch(`http://localhost:8000/ProductsCart/${productData.id}`,{
                    method: "DELETE"
                }).then((res) => res.json()).then(() => getAllProducts())
            }
        })
    }

    /* This is to get the data from the child (CartList) to the parent (Cart) */
    function handleQuantityFromCartList (Quantity) {
        return Quantity
    }

    /* To make the summary changes when i change the quantity from the cart ==> refresh the page to fetch the data again */
    /* Other way:
            to give the subPrice function a parameter that is the handleQuantityFromCartList then make the web fetch every time:
                - but it's not effective as the server will be crashed 
                if(Quantity !== null) {
                    getAllProducts()
                }*/

    let SubTotal = 0
    let Shipping = 10
    function subPrice () {
        products.forEach((product) => {
            SubTotal += product.totalPrice;
        });
        return SubTotal;
    }

    return(
        <>
        <div className='p-5'>
            <div className='flex items-center justify-around'>
                <Link to="/" className={btnStyle}>Continue Shopping</Link>
                <div className="font-bold tracking-wider text-xl text-[#605dec]">
                    <p>Items in your Cart: {products.length}</p>
                </div>
                <Link className={btnStyle}>Checkout</Link>
            </div>

            <div className='flex mt-7'>
                <div className="flex flex-1 flex-col">
                    {
                        products && products.map((ele, index)=>{
                            return <div key={index}>
                                <CartList ele={ele} sendData={handleQuantityFromCartList}></CartList>
                                <button className="flex mx-auto shadow-md text-white px-4 py-3 rounded-md font-semibold bg-red-500
                                ease-in duration-200 cursor-pointer hover:text-black hover:bg-white hover:scale-[1.1]" onClick={()=>deleteFromCart(ele)}>Delete</button>
                                <hr className='my-7'></hr>
                            </div>
                        })
                    }
                </div>

                <div className='flex-[0.3] flex flex-col items-center border-2 h-[13rem] border-[#dd1f1f9e] rounded-md shadow-lg p-5 '>
                    <h1 className='text-2xl font-bold text-[#dd1f1f9e]'>Summary</h1>
                    <div className={SummaryItemStyle}>
                        <p>SubTotal:</p>
                        <p>{subPrice()}$</p>
                    </div>
                    <div className={SummaryItemStyle}>
                        <p>Shipping:</p>
                        <p>{Shipping}$</p>
                    </div>
                    <div className={SummaryItemStyle + " text-2xl font-bold text-[#dd1f1f9e]"}>
                        <p>Total:</p>
                        <p>{SubTotal+Shipping}$</p>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}
    
export default Cart