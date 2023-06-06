import Hero from "../Components/Hero"
import Slider from "../Components/Slider"
import Categories from "../Components/Categories"

import OfferImg from "../Components/OfferImg"
import hero from "../img/Home/shopp.jpg"
import img from "../img/Home/sales/sale1.jpg"
import img2 from "../img/Home/sales/sale2.jpg"
import img3 from "../img/Home/sales/sale3.jpg"

import HomeDecore from "../img/Home/categories/home.jpg"
import Bedding from "../img/Home/categories/bedd.jpg"
import Kitchen from "../img/Home/categories/kitchenn.jpg"
import Lighting from "../img/Home/categories/light.jpg"
import Dinning from "../img/Home/categories/dinnig.jpg"
import Garden from "../img/Home/categories/garden.jpg"

import hero2 from "../img/main/hero2.jpg"
import Products from "../Components/Products"

function Home () {
    const cat = [HomeDecore, Bedding, Kitchen, Lighting, Dinning, Garden]
    const type = ["Home Decore", "Bedding", "Kitchen", "Lighting", "Dinning", "Garden"]
    const filter = ["Decorative Pillows", "RUGS & CARPETS", "WALL DECOR", "All"]
    const filter2 = ["BED SKIRTS", "DUVET COVERS & SETS", "BLANKETS & THROWS","All"]
    const filter3 = ["Table runners", "Place mats", "Aprons", "All"]
    const filter4 = ["Novelty Lighting", "INDOOR LIGHTING", "All"]
    const filter5 = ["Dinning Sets", "Plates", "All"]
    const filter6 = ["Garden supplies", "All"]
    return(
        <>
        <Hero img={hero}></Hero>
        <OfferImg></OfferImg>
        <Slider img={img} img2={img2} img3={img3}></Slider>
        <Categories cat={cat} type={type}></Categories>
        <img className="w-full" src={hero2} alt="hero2"></img>
        <Products title={type[0]} cla="Home" filter={filter}></Products>
        <Products title={type[1]} cla="Home" filter={filter2}></Products>
        <Products title={type[2]} cla="Home" filter={filter3}></Products>
        <Products title={type[3]} cla="Home" filter={filter4}></Products>
        <Products title={type[4]} cla="Home" filter={filter5}></Products>
        <Products title={type[5]} cla="Home" filter={filter6}></Products>
        </>
    )
}

export default Home