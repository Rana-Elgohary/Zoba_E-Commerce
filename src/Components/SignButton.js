function SignButton (props) {
    return(
        <>
        <input className="bg-[#4869bbc6] mt-[20px] text-white rounded-xl text-xl px-5 py-3 
        hover:bg-transparent hover:text-[#4869bbc6] ease-in duration-300" 
        type="submit" id="Sign-in" value={props.title}/>
        </>
    )
}

export default SignButton