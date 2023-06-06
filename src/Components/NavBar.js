import { Link } from "react-router-dom"
import peopleIcon from "../img/main/People-Icon-File.png"
import NavBarLink from "./NavBarLink"

function NavBar() {
    return(
        <>
        <div className="bg-[whitesmoke] h-full py-3 text-xl sticky top-0">
            <div className="flex justify-center font-[Muli,Arial,Helvetica,sans-serif]">
                <div>
                    <NavBarLink></NavBarLink>
                </div>

                <div className="text-[#dd1f1f9e] mx-32 tracking-[6px]">ZOBA</div>

                <Link to='cart' className="mr-10">Cart</Link>
                
                <div className="">
                    <input type="search" className="text-center mx-10 w-44 border bg-searchIcon  bg-no-repeat bg-left bg-[length:15px]" 
                    name="search" placeholder="shoes"/>
                </div>
                
                <div className="text-lg">
                    <Link to="signin">
                        <img className="inline w-4 mr-2" src={peopleIcon} alt="people-icon"/>
                    </Link>
                    
                    <Link to="signin" className="hover:text-[#605dec]">Sign in/Register</Link>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default NavBar