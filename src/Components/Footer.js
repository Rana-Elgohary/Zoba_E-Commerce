import FooterCol from "./FooterCol";

function Footer() {
    function myTimer() {
        var d = new Date();
        document.getElementById("clock").innerHTML = d.toLocaleTimeString();
    }
    return(
        <>
        <div className="flex justify-around py-16 border-t">
            <div>
                <h2 className="text-[#605dec] text-3xl font-bold">ZOBA</h2>
            </div>

            <FooterCol forP="About" forA={["About ZOBA", "How it works", "Careers"]}></FooterCol>
            <FooterCol forP="Partner with us" forA={["Partnership programs", "Payment program", "Connectivity partners"]}></FooterCol>
            <FooterCol forP="Support" forA={["Help Center", "Contact us", "Privacy policy"]}></FooterCol>

            <div>
                <p className="text-[#7c8db0] font-bold mb-5" id="clock">
                    {
                        setInterval(function () {
                            myTimer();
                        }, 1000)
                    }
                </p>
            </div>
        </div>
        </>
    )
}

export default Footer