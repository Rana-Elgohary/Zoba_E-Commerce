import Hero from "../Components/Hero"
import Slider from "../Components/Slider"
import Categories from "../Components/Categories"

import OfferImg from "../Components/OfferImg"
import hero from "../img/Beauty/hero.jpg"
import img from "../img/Beauty/sales/sale1.webp"
import img2 from "../img/Beauty/sales/sale2.jpg"
import img3 from "../img/Beauty/sales/sale3.webp"

import Brush from "../img/Beauty/categories/1.webp"
import EyeLashes from "../img/Beauty/categories/5.webp"
import Nail from "../img/Beauty/categories/6.webp"
import Tattoos from "../img/Beauty/categories/4.webp"
import Bags from "../img/Beauty/categories/7.webp"
import Hair from "../img/Beauty/categories/2.webp"

import hero2 from "../img/main/hero2.jpg"
import Products from "../Components/Products"

function Beauty () {
    const cat = [Brush, EyeLashes, Nail, Tattoos, Bags, Hair]
    const type = ["MakeUp Brushes", "EyeLashes", "Nail Art & Tools", "Tattoos & Body Arts", "MakeUp Bags & Tools", "Personal Care"]
    const filter = ["Brushes Sets", "Eye & Lip Brushes", "Face Brushes", "All"]
    const filter2 = ["False Eye Lashes", "EyeLashes Tools", "All"]
    const filter3 = ["Press On Nails", "Nail Art Equipments", "Nail Art Tools", "All"]
    const filter4 = ["Temporary Tattoos", "Tattoos Stencils", "All"]
    const filter5 = ["MakeUp Bags", "Sponges & Blenders", "MakeUp Organizers", "All"]
    const filter6 = ["Oral Care", "Skin Care Tools", "Hair Tools", "All"]

    return(
        <>
        <Hero img={hero}></Hero>
        <OfferImg></OfferImg>
        <Slider img={img} img2={img2} img3={img3}></Slider>
        <Categories cat={cat} type={type}></Categories>
        <img className="w-full" src={hero2} alt="hero2"></img>
        <Products title={type[0]} cla="Beauty" filter={filter}></Products>
        <Products title={type[1]} cla="Beauty" filter={filter2}></Products>
        <Products title={type[2]} cla="Beauty" filter={filter3}></Products>
        <Products title={type[3]} cla="Beauty" filter={filter4}></Products>
        <Products title={type[4]} cla="Beauty" filter={filter5}></Products>
        <Products title={type[5]} cla="Beauty" filter={filter6}></Products>
        </>
    )
}

export default Beauty