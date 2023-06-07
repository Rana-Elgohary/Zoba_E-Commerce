import { Link } from "react-router-dom";
import ProductsData from "../ProductsData";

function Product(props) {

    return(
        <>
        {
            ProductsData.map((e)=>{
                if(e.category===props.title && e.class===props.cla){
                    if(props.catFilter==="" || props.catFilter==="All"){
                        return( 
                            <div key={e.id} className="relative mx-5 mb-20">
                                <img src={e.image} alt={e.title} className="w-[350px] h-[450px]"></img>
                                <div className="bg-[#1313134f] absolute z-10 w-[70%] translate-y-[-50%] translate-x-[25%] rounded-xl p-4
                                text-[#fdfdfd] font-bold text-lg text-center">
                                    <p>{e.title}</p>
                                    <p>{e.price}</p>
                                    <Link to={`/product/${e.id}`}
                                    className="border-2 p-2 hover:bg-white hover:border-transparent hover:text-[#262626] transition-all ease-in duration-75">Show Details</Link>
                                </div>
                            </div>
                        )
                    }
                    if(props.catFilter===e.filter){
                        return( 
                            <div key={e.id} className="relative mx-5 mb-20">
                                <img src={e.image} alt={e.title} className="w-[350px] h-[450px]"></img>
                                <div className="bg-[#1313134f] absolute z-10 w-[70%] translate-y-[-50%] translate-x-[25%] rounded-xl p-4
                                text-[#fdfdfd] font-bold text-lg text-center">
                                    <p>{e.title}</p>
                                    <p>{e.price}</p>
                                    <Link to={`/product/${e.id}`}
                                    className="border-2 p-2 hover:bg-white hover:border-transparent hover:text-[#262626] transition-all ease-in duration-75">Show Details</Link>
                                </div>
                            </div>
                        )
                    }
                }
                return null; /* To fix this issue of " Array.prototype.map() expects a value to be returned at the end of arrow function"
                                return null; statement after the if statement to explicitly return a value for cases where the condition is not met */
            })
        }
        </>
    )
}

export default Product