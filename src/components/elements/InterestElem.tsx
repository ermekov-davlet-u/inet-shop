import { IInterest } from "@/types/props";


function InterestElem({
    title = "Text"
}: IInterest) {
    return (
        <div className="interest-elem p-4 flex gap-4 items-center">
            <div className="interest-round_out rounded-full bg-[#ECEAE7] bg-opacity-20 h-[40px] w-[40px] flex justify-center items-center">
                <div className="interest-round_in rounded-full bg-[#fff] h-[8px] w-[8px]">

                </div>
            </div>
            <div className="interest-round_title text-[16px] font-medium uppercase text-[#FFFFFF]">
                {
                    title
                }
            </div>
        </div>
    );
}

export default InterestElem;