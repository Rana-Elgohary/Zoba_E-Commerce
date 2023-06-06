function SignField (props) {
    return(
        <>
        <div className="relative w-[100%] h-[70px] p-[20px] my-[-5px]">
            {/* Here i gave the input className peer so i can use it when focus on the input, then make changes in label */}
            {/* If i want to make changes on the label after i hover on the parent div so give the dive className group then in the child group-hover */}
            <input className="h-[100%] w-[100%] outline-none p-[15px] text-[17px] border-[1.7px] rounded-2xl border-[#4869bbc6]
            ease-in duration-300 cursor-pointer focus:border-[#cdc5c558] peer" type={props.type} required id={props.type}/>
            <label
            htmlFor={props.type}
            className="absolute top-[25px] left-[50px] text-[#000000b0] ease-in duration-300 cursor-pointer
            peer-focus:translate-y-[-25px] peer-focus:text-[#4869bbc6] peer-focus:font-bold">{props.title}</label>
        </div>
        </>
    )
}

export default SignField