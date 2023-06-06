import offerimg from "../img/main/offer.png"

function OfferImg () {
    return(
        <>
        <div className="flex flex-row justify-evenly">
            <img src={offerimg} id="imageOffers" alt="offers"/>
        </div>
        </>
    )
}

export default OfferImg