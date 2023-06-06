import { Link } from "react-router-dom"

function NavBarLink() {
    const arr = ["WOMEN", "KIDS", "HOME", "MEN", "BEAUTY"]
    
    return(
        <>
        {arr.map((ele) => <Link key={ele} className="px-5 hover:text-[#605dec]" to={ele==="WOMEN" ? "/" : `/${ele}`}>{ele}</Link>)}
        </>
    )
}

export default NavBarLink