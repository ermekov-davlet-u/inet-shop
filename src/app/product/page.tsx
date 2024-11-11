import Hero from "@/components/common/Hero";
import Products from "@/components/common/Products";
import RecentList from "@/components/common/RecentList";
import Recent from "@/components/elements/Recent";


function Product() {
    return ( 
        <div className=" w-full h-[100vh]">
            <RecentList/>
            <Products/>
            {/* <Hero/> */}
        </div>
     );
}

export default Product;