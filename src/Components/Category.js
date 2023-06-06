import {Link} from 'react-scroll'

function Category(props) {
    return(
        <>
        <div className="flex flex-row tracking-wider font-[Arial,Helvetica,sans-serif!important] pl-[15px] pt-[100px]">
            <Link activeClass="active" to={props.type} spy={true} smooth={true} offset={-90} duration={500}>
                <img className="w-[195px] h-[220px] rounded-3xl shadow-md" src={props.img} alt={props.type}/>
            </Link>
            <Link activeClass="active" to={props.type} spy={true} smooth={true} offset={-90} duration={500}
            className=" font-[Arial,Helvetica,sans-serif!important] pl-[15px] pt-[100px]">
                {props.type}
            </Link>
        </div>
        </>
    )
}

export default Category