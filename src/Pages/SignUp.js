import SignField from "../Components/SignField";
import SignButton from "../Components/SignButton";

function SignUp () {
    return(
        <>
        <div className="flex flex-row w-[800px] h-[500px] my-[40px] mx-auto text-center shadow-lg">
            <div className="w-[50%] bg-[#cdc5c558]">
                <h2 className="text-5xl font-semibold text-[#000000b0] pt-[50px]">Sign-Up</h2>
                <form className="px-[30px] py-[20px]">

                    <div className="flex flex-row justify-around">
                        <div>
                            <input type="radio" name="radiogroup1" id="rd1"/>
                            <label htmlFor="rd1">Male</label>
                        </div>
                        <div>
                            <input type="radio" name="radiogroup1" id="rd2"/>
                            <label htmlFor="rd2">Female</label>
                        </div>
                    </div>

                    <SignField type="text" title="User Name"></SignField>
                    <SignField type="email" title="E-mail Address"></SignField>
                    <SignField type="password" title="Password"></SignField>
                    <SignField type="confirm password" title="Confirm Password"></SignField>
                    <SignButton title="Register"></SignButton>
                </form>
            </div>

            <div className="flex flex-wrap w-[50%] bg-[#4869bbc6] justify-center content-center">
                <div className="bg-[#ebe7e74b] p-3 m-7 shadow-xl border-2 border-white">
                    <h2 className="text-[30px]">ZOBA STORE</h2>
                    <h1 className="text-[52px] text-white">Buy From Home</h1>
                </div>
            </div>
        </div>
        </>
    )
}

export default SignUp