import Link from "next/link";
import ProductCard from "../elements/ProductCard";



function Products() {
    return (
        <div className="products grid grid-cols-[1fr_1fr] pt-5">
            <Link href='catalog'>
                <ProductCard />
            </Link>
            <Link href={'/product/' + 2}>
                <ProductCard />
            </Link>
            <Link href='catalog/1'>
                <ProductCard />
            </Link>
            <Link href='product/1'>
                <ProductCard />
            </Link>
            <Link href='product/1'>
                <ProductCard />
            </Link>
            <Link href='product/1'>
                <ProductCard />
            </Link>
        </div>
    );
}

export default Products;