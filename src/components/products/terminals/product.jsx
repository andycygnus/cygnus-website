import React from 'react'

const Product = ({ item, moveToProductDetail, selectedTerminalId }) => {
    return (
        <div
            key={item.id}
            className="col-xl-4 col-lg-4 col-md-6"
            onClick={(e) => moveToProductDetail(e)(selectedTerminalId, item.id)}
        >
            <div className="tpshopitem mb-50 wow fadeInUp" data-wow-delay=".6s">
                <div className="tpshopitem__thumb p-relative fix p-relative mb-35">
                    <img src={item.img} alt="shop-thumb" />
                </div>
                <div className="tpshopitem__content text-center">
                    <span className="tpshopitem__title mb-0">
                        <h4>{item.title}</h4>
                    </span>
                    <span className="tpshopitem__title mb-5">{item.title}</span>
                </div>
            </div>
        </div>
    )
}

export default Product
