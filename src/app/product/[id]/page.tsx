'use client'
import { IProductPageProps } from "@/types/props";
import { useParams } from "next/navigation";


export default function Product(props: IProductPageProps) {
    const params = useParams();
    const productId = params.id;
    const a = getProduct()
    // console.log(a);
    
    return ( 
        <>
            Ermekov
        </>
     );
}



async function getProduct() {
    console.log("Davlet");
    
    return {
        product: "Ermekov"
    }
}