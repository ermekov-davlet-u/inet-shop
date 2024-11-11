import Link from "next/link";


function NavigatorLink() {
    return ( 
        <>
            <Link className="navigator-link" href={'/product'}>
                <div className="navigator-link_text text-[#444]">
                    Каталог
                </div>
            </Link>
        </>
     );
}

export default NavigatorLink;