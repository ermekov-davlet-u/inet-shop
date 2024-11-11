

function Recent() {
    return (
        <>
            <div className="recent flex justify-between gap-[28px] p-[18px]">
                <div className="recent_img_wrap min-w-[108px] max-w-[158px]">
                    <img src="divan.png" alt="Not found" className="recent_img w-full" />
                </div>
                <div className="recent_contentflex min-w-[168px] flex flex-col gap-[8px]">
                    <div className="recent_title text-[#72716E] text-[18px] ">
                        Lorem ipsum dolor sit, amet consectetur.
                    </div>
                    <div className="recent_price text-[14px] text-[#4E76C6]">
                        18 000₽
                    </div>
                </div>
            </div>
        </>
    );
}

export default Recent;