import Hero from "../Components/Hero"
import Slider from "../Components/Slider"
import Categories from "../Components/Categories"

import OfferImg from "../Components/OfferImg"
import hero from "../img/Men/Measure-pana.png"
import img from "../img/Men/sales/sale1.jpg"
import img2 from "../img/Men/sales/sale2.jpg"
import img3 from "../img/Men/sales/sale3.jpg"

import Casual from "../img/Men/categories/cau.jpg"
import Sports from "../img/Men/categories/sport.jpg"
import Shorts from "../img/Men/categories/swim.jpg"
import Coatses from "../img/Men/categories/wov.jpg"
import Home from "../img/Men/categories/home.jpg"

import hero2 from "../img/main/hero2.jpg"
import Products from "../Components/Products"

function Men () {
    const cat = [Casual, Sports, Shorts, Coatses, Home]
    const type = ["Casual", "Sports", "Shorts", "Coates", "Home"]
    const filter = ["Men suit", "Men's blazer", "suit pants", "All"]
    const filter2 = ["Jackets", "T-shirts", "Pants", "All"]
    const filter3 = ["Swimming shorts", "Beach shorts", "All"]
    const filter4 = ["Jacket", "Rain Coats", "All"]
    const filter5 = ["Robe", "Pajamas", "All"]
    return(
        <>
        <Hero img={hero}></Hero>
        <OfferImg></OfferImg>
        <Slider img={img} img2={img2} img3={img3}></Slider>
        <Categories cat={cat} type={type}></Categories>
        <img className="w-full" src={hero2} alt="hero2"></img>
        <Products title={type[0]} cla="Men" filter={filter}></Products>
        <Products title={type[1]} cla="Men" filter={filter2}></Products>
        <Products title={type[2]} cla="Men" filter={filter3}></Products>
        <Products title={type[3]} cla="Men" filter={filter4}></Products>
        <Products title={type[4]} cla="Men" filter={filter5}></Products>
        </>
    )
}

export default Men