import Link from 'next/link'
import { useRouter } from 'next/router'

import Product from './product'

import productsData from '@/data/products/terminals/products.json'

const PaxProductDetails = (props) => {
    const { item } = props
    const router = useRouter()

    // Function to calculate similarity based on shared features
    const getRelatedProducts = (selectedProduct, productsList) => {
        const scoredProducts = productsList.map((product) => {
            const sharedFeatures = product.features.filter((feature) =>
                selectedProduct.features.includes(feature)
            )
            return {
                ...product,
                score: sharedFeatures.length,
            }
        })

        const sortedProducts = scoredProducts.sort((a, b) => b.score - a.score)
        const topRelatedProducts = sortedProducts
            .filter((product) => product.id !== selectedProduct.id)
            .slice(0, 4)
        return topRelatedProducts
    }

    // Compute related products
    const relatedProducts = getRelatedProducts(item, productsData)

    const moveToProductDetail = (e) => (terminalId, productId) => {
        e.preventDefault()
        router.push(`/products/terminals/details/${productId}`)
    }

    return (
        <>
            <div className="shop-area pt-50 pb-130">
                <div className="container">
                    <Link href="/products/terminals" className='mb-2 d-flex align-items-center gap-2'>
                        <i className="fa-solid fa-chevron-left"></i><span className='text-link fw-bold'>Back to results</span>
                    </Link>

                    <div className="row gx-5">
                        <div className="col-lg-6 col-xl-5">
                            <div className="detailed-shop tpshopitem__thumb p-relative fix p-relative mb-35">
                                <img src={item.img} alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-7">
                            <img src={item.brandImg} height="30px" alt="" />
                            <h1 className="mt-20 mb-30">{item.title}</h1>
                            <p>{item.description}</p>

                            <ul
                                className="nav tp-nav-tavs mt-40 nav-fill"
                                id="myTab"
                                role="tablist"
                            >
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="w-100 nav-link active"
                                        id="home-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#key-features"
                                        type="button"
                                        role="tab"
                                        aria-controls="key-features"
                                        aria-selected="true"
                                        tabIndex="-1"
                                    >
                                        KEY FEATURES
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="w-100 nav-link "
                                        id="mission-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#specifications"
                                        type="button"
                                        role="tab"
                                        aria-controls="specifications"
                                        aria-selected="false"
                                        tabIndex="-1"
                                    >
                                        SPECIFICATIONS
                                    </button>
                                </li>
                            </ul>

                            <div
                                className="tab-content pt-30"
                                id="myTabContent"
                            >
                                <div
                                    className="tab-pane fade show active"
                                    id="key-features"
                                    role="tabpanel"
                                    aria-labelledby="key-features"
                                >
                                    <div class="tp-about__info-list ab-check-list mb-55">
                                        <ul>
                                            {item.features &&
                                                item.features.map((feature) => (
                                                    <li key={feature}>
                                                        <i className="fa-solid fa-check"></i>{' '}
                                                        {feature}
                                                    </li>
                                                ))}
                                        </ul>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="specifications"
                                    role="tabpanel"
                                    aria-labelledby="specifications"
                                >
                                    <div class="tp-about__info-list ab-check-list mb-55">
                                        <ul>
                                            {item.specifications &&
                                                item.specifications.map(
                                                    (specification) => (
                                                        <li key={specification}>
                                                            <i className="fa-solid fa-check"></i>{' '}
                                                            {specification}
                                                        </li>
                                                    )
                                                )}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-12 text-center">
                            <h3 className='mt-60'>Explore related items</h3>
                        </div>
                        <div className="mt-4 col-12">
                            {relatedProducts.length ? (
                                <div className="row">
                                    {relatedProducts.map((relatedItem) => (
                                        <Product
                                            key={relatedItem.id}
                                            item={relatedItem}
                                            moveToProductDetail={
                                                moveToProductDetail
                                            }
                                            className="col-sm-6 col-md-4 col-lg-3"
                                        />
                                    ))}
                                </div>
                            ) : (
                                <span>No related products found</span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaxProductDetails
