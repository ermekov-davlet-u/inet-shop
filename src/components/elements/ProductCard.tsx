


function ProductCard() {
    return (
        <div className="productcard p-4">
            <div className="productcard_container">
                <div className="productcard-header flex justify-between">
                    <div className="productcard-header_content ">
                        <div className="productcard-header_cod text-[12px] text-[#72716E]">
                            2C3M4104
                        </div>
                        <div className="productcard-header_stock text-[12px] text-[#1E1E1E]">
                            есть в наличии (10+)
                        </div>
                    </div>
                    <div className="productcard-header_img_wrap w-[16px] h-[16px]">
                        <img src="card.png" alt="" className="productcard-header_img w-full h-full" />
                    </div>
                </div>
                <div className="productcard_img_wrap">
                    <img src="divan.png" alt="Image not found" className="productcard_img" />
                </div>
                <div className="productcard_name text-center uppercase text-[12px] text-[#1E1E1E]">
                    название товара
                    в две строки
                </div>
                <div className="productcard_count text-center text-[12px] text-[#72716E] pt-[20px]">
                    5 шт – 16 000₽/шт
                </div>
                <div className="productcard_price text-center text-[16px] text-[#4E76C6] pt-[8px]">
                    15 000 ₽
                </div>
            </div>
        </div>
    );
}

export default ProductCard;