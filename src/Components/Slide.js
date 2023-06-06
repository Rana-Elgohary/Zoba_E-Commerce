import SlideContent from "./SlideContent"

function Slide(props) {
    return(
        <>
        <div className="flex flex-row justify-around">
            <SlideContent img={props.img}></SlideContent>
            <SlideContent img={props.img}></SlideContent>
            <SlideContent img={props.img}></SlideContent>
            <SlideContent img={props.img}></SlideContent>
            <SlideContent img={props.img}></SlideContent>
        </div>
        </>
    )
}

export default Slide