

function RecomendCard() {
    return (
        <div className="recomend-card w-[90vw] max-w-[380px]">
            <div className="recomend-card_container flex-row gap-6 items-start justify-start">
                <div className="recomend-card_img_wrap w-full relative flex justify-start overflow-hidden">
                    <img src="/hero.jpg" alt="Not found" className="recomend-card_img w-full h-auto" />
                    <div className="recomend-card_content absolute h-full w-[80%] py-[24px] px-[20px] ">
                        <div className="recomend-card_title text-[32px] text-white font-medium uppercase">
                            новая коллекция
                        </div>
                        <div className="recomend-card_desc text-[14px] text-white font-light">
                            У каждого принта «Моллен» есть своя история, которую мы вам сейчас расскажем.
                        </div>
                    </div>
                </div>
                <div className="recomend-card_text px-[20px]">
                    В незапамятные времена наши предки-славяне называли
                </div>
            </div>
        </div>
    );
}

export default RecomendCard;