import Categories from "../Components/Categories"
import Hero from "../Components/Hero"
import Slider from "../Components/Slider"

import OfferImg from "../Components/OfferImg"
import hero from "../img/Women/Online shopping-pana.png"
import img from "../img/Women/sales/sale1.jpg"
import img2 from "../img/Women/sales/sale2.jpg"
import img3 from "../img/Women/sales/sale3.jpg"

import Tops from "../img/Women/categories/tshirt.jpg"
import Dresses from "../img/Women/categories/dress.png"
import Blouses from "../img/Women/categories/blouse.jpg"
import Bags from "../img/Women/categories/bag.jpg"
import Shoes from "../img/Women/categories/shose.jpg"
import Bottoms from "../img/Women/categories/bottom.jpg"

import hero2 from "../img/main/hero2.jpg"
import Products from "../Components/Products"

function Women () {
    const cat = [Tops, Dresses, Blouses, Bags, Shoes, Bottoms]
    const type = ["Tops", "Dresses", "Blouses", "Bags", "Shoes", "Bottoms"]
    const filter = ["Vneck", "Boat Neck", "Cold Shoulder", "All"]
    const filter2 = ["Tall", "Short", "Backless", "All"]
    const filter3 = ["Collar", "High Neck", "Hooded", "All"]
    const filter5 = ["Classic", "Casual", "All"]
    const filter6 = ["Skirt", "Pants", "Shorts", "All"]
    return(
        <>
        <Hero img={hero}></Hero>
        <OfferImg></OfferImg>
        <Slider img={img} img2={img2} img3={img3}></Slider>
        <Categories cat={cat} type={type}></Categories>
        <img className="w-full" src={hero2} alt="hero2"></img>
        <Products title={type[0]} cla="Women" filter={filter}></Products>
        <Products title={type[1]} cla="Women" filter={filter2}></Products>
        <Products title={type[2]} cla="Women" filter={filter3}></Products>
        <Products title={type[3]} cla="Women" filter={filter5}></Products>
        <Products title={type[4]} cla="Women" filter={filter5}></Products>
        <Products title={type[5]} cla="Women" filter={filter6}></Products>
        </>
    )
}

export default Women