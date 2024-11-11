import { TbMenu } from "react-icons/tb";

function CircleButton({
    label="",
    onClick=() => {}
}:{
    label?: string;
    onClick?: Function
}) {
    return (
        <>
            <div className="burger_menu p-3 bg-[#707E8D] bg-opacity-20 hover:bg-[#4E76C6] text-[#fff] border rounded-full cursor-pointer">
                <TbMenu />
            </div>
        </>
    );
}

export default CircleButton;