function SlideContent(props) {
    return(
        <>
        <div className="shadow-md h-[260px]">
            <img className="h-[230px] w-[265px] object-cover" src={props.img} alt="sale1"/>
            <div className="pl-[100px] text-[19pt] font-[Arial,Helvetica,sans-serif!important] tracking-[2px] ">-80%</div>
        </div>
        </>
    )
}

export default SlideContent