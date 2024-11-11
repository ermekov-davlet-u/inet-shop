import InterestElem from "../elements/InterestElem";



function Hero() {
    return (
        <>
            <div className="hero w-[90vw] h-[80vh] overflow-hidden">
                <div className="hero_bg bg-[url('/hero.jpg')] w-full h-[80vh] absolute left-0 top-0 -z-10 bg-center bg-no-repeat bg-cover">

                </div>
                <div className="hero_content w-[90vw]">
                    <InterestElem />
                    <InterestElem />
                    <InterestElem />
                    <InterestElem />
                </div>
            </div>
        </>
    );
}



export default Hero;