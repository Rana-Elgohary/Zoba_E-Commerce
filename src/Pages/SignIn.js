import { Link } from "react-router-dom"
import SignField from "../Components/SignField"
import SignButton from "../Components/SignButton";
import Icons from "../Components/Icons";

function SignIn () {
    return(
        <>  
        <div className="flex flex-row w-[800px] h-[500px] my-[40px] mx-auto text-center shadow-lg">
            <div className="w-[50%] bg-[#cdc5c558]">
                <h2 className="text-5xl font-semibold text-[#000000b0] pt-[50px]">Sign-in</h2>
                <Icons></Icons>
                <form className="px-[30px] py-[20px]">
                    <SignField type="email" title="E-mail Address"></SignField>
                    <SignField type="password" title="Password"></SignField>
                    <p className="text-[#000000b0] ease-in duration-300 hover:cursor-pointer hover:underline">Forget your password?</p>
                    <SignButton title="Sign-in"></SignButton>
                </form>
            </div>

            <div className="flex flex-wrap w-[50%] bg-[#4869bbc6] justify-center content-center">
                <h2 className="text-5xl font-semibold text-white">Sign-Up</h2>
                <p className="text-[#000000b0] py-3">If you don't have any accounts so please sign-up</p>
                <br/>
                <Link className="border-2 border-[#cdc5c558] text-white rounded-xl text-xl px-5 py-3 
                hover:bg-white hover:text-[#000000b0] hover:border-white ease-in duration-300" to="/signup">Sign-Up</Link>
            </div>
        </div>
        </>
    )
}

export default SignIn