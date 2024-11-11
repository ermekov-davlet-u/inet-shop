import { TbMenu } from "react-icons/tb";
import CircleButton from "../ui/CircleButton";
import { HiDotsVertical } from "react-icons/hi";

function Header() {
    return (
        <header className="flex 
        justify-center 
        align-center 
        p-3 
        border-[#ECEAE7] 
        border-solid 
        border-b-2 
        bg-transparent
        absolute
        top-0
        w-full
        bg-[#ccc]
        ">
            <div className="flex justify-between items-center w-full">
                <div className="header_right flex text-[#fff] gap-8 items-center">
                    <div className="header-burger p-3 hover:border-red-100 hover:border-2 hover:cursor-pointer">
                        <HiDotsVertical/>
                    </div>
                    <div className="header_logo text-[#fff] uppercase font-black text-[28px]">
                        nurs
                    </div>
                </div>
                <div className="header_left flex justify-center gap-2">
                    <CircleButton />
                    <CircleButton />
                    <CircleButton />
                </div>
            </div>
        </header>
    );
}

export default Header;