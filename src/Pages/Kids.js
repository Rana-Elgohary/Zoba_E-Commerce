import Hero from "../Components/Hero"
import Slider from "../Components/Slider"
import Categories from "../Components/Categories"

import OfferImg from "../Components/OfferImg"
import hero from "../img/Kids/FirstPhoto.png"
import img from "../img/Kids/sales/sale1.webp"
import img2 from "../img/Kids/sales/sale2.webp"
import img3 from "../img/Kids/sales/sale3.jpg"

import Girls from "../img/Kids/categories/girl.webp"
import Boys from "../img/Kids/categories/boy.webp"
import Babies from "../img/Kids/categories/baby.webp"
import Shoes from "../img/Kids/categories/shoes.webp"
import Socks from "../img/Kids/categories/socks.webp"
import Accessories from "../img/Kids/categories/accessories.webp"

import hero2 from "../img/main/hero2.jpg"
import Products from "../Components/Products"

function Kids () {
    const cat = [Girls, Boys, Babies, Shoes, Socks, Accessories]
    const type = ["Girls", "Boys", "Babies", "Shoes", "Socks", "Accessories"]
    const filter = ["Pants", "Skirts", "Dresses", "Jumpsuits", "Full Outfits", "Winter", "All"]
    const filter2 = ["Fulloutfit", "Pants", "T-shirts", "Winter", "All"]
    const filter3 = ["Full outfit", "Dresses", "Pyjama", "All"]
    const filter5 = ["Girls", "Boys", "All"]
    const filter6 = ["Hair", "Hand", "All"]
    return(
        <>
        <Hero img={hero}></Hero>
        <OfferImg></OfferImg>
        <Slider img={img} img2={img2} img3={img3}></Slider>
        <Categories cat={cat} type={type}></Categories>
        <img className="w-full" src={hero2} alt="hero2"></img>
        <Products title={type[0]} filter={filter}></Products>
        <Products title={type[1]} filter={filter2}></Products>
        <Products title={type[2]} filter={filter3}></Products>
        <Products title={type[3]} filter={filter5}></Products>
        <Products title={type[4]} filter={filter5}></Products>
        <Products title={type[5]} filter={filter6}></Products>
        </>
    )
}

export default Kids