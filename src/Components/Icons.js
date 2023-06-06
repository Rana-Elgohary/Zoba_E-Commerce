import {FaFacebook, FaGooglePlus, FaGithub} from "react-icons/fa";

function Icons () {
    let cls="text-[#989798c6] border-[#ffffffc6] border-4 mt-5 rounded-full w-[50px] h-[50px] hover:shadow-xl hover:p-2"
    return(
        <>
        <div className="flex flex-row justify-around px-5">
            <FaFacebook className={cls}></FaFacebook>
            <FaGooglePlus className={cls}></FaGooglePlus>
            <FaGithub className={cls}></FaGithub>
        </div>
        </>
    )
}

export default Icons