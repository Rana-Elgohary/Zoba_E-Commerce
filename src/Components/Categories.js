import Category from "./Category"

function Categories(props) {
    const cat = props.cat
    const type = props.type
    return(
        <>
        <div className="my-16">
            <h1 className=" text-center tracking-wider font-[Arial,Helvetica,sans-serif!important] text-5xl">Shop By Categories</h1>
            <div className="grid grid-cols-3 ml-[8%]">
                {cat.map((ele, index)=>{
                    return <Category key={index} img={ele} type={type[index]}></Category> 
                })}
            </div>
        </div>
        </>
    )
}

export default Categories