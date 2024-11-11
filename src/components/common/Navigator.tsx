"use client";
// import { useRouter } from 'next/router'
import NavigatorLink from "../elements/NavigatorLink";
import { INavigator } from '../../types/props';


function Navigator({
    route
}: INavigator) {
    // const route = useRouter()
    console.log(route);
    
    return (
        <>
            <div className="navigator py-[18px] px-[12px]">
                <div className="navigator_container flex flex-col gap-[8px]">
                    <div className="navigator_routes flex ">
                        <NavigatorLink />/
                        <NavigatorLink />/
                        <NavigatorLink />
                    </div>
                    <div className="navigator_title">
                        Популярные товары
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navigator;