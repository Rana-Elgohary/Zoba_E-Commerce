import { Link } from "react-router-dom"

function FooterCol (props) {
    const arr = props.forA
    return(
        <>
        <div className="flex flex-col text-[#7c8db0] ">
            <p className="font-bold mb-5">{props.forP}</p>
            <ul>
                {
                    arr.map((ele)=> <li key={ele} className="mb-2"><Link to="">{ele}</Link></li>)
                }
            </ul>
        </div>

        </>
    )
}
export default FooterCol