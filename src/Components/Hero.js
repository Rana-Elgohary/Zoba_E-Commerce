function Hero (props) {
    return(
        <>
        <div className="flex flex-row justify-evenly mb-10">
            <div className="w-[50%] tracking-[12px] text-[30px] leading-[75px] p-[65px] my-[65px]">Now You Can Buy Every Thing From Your Home!</div>
            <img className="w-[50%] object-cover h-[475px]" src={props.img} alt="welcome img"/>
        </div>
        </>
    )
}

export default Hero