import { useMemo } from 'react'
import SEO from '@/components/seo'
import ProductDetail from '@/components/products/terminals/product-detail'
import valorpay_data from '@/data/products/terminals/valorpay=data'
import pax_data from '@/data/products/terminals/pax-data'
import nmi_data from '@/data/products/terminals/nmi-data'
import firstdata_data from '@/data/products/terminals/firstdata-data'
import dejavoo_data from '@/data/products/terminals/dejavoo-data'
import Wrapper from '@/layout/wrapper'
import Footer from '@/layout/footer/footer'
import Header from '@/layout/header/header'
import { useRouter } from 'next/router'
import productsData from '@/data/products/terminals/products.json'

const ProductDetails = () => {
    const router = useRouter()

    const productName = useMemo(() => {
        return router.query.product
    }, [router.query.product])

    const productDetail = useMemo(() => {
        return productsData.find((item) => item.id === productName)
    }, [productName])

    return (
        <>
            <Wrapper>
                <SEO pageTitle="PAX" />
                <Header />
                {productDetail ? (
                    <ProductDetail item={productDetail} />
                ) : (
                    'NO Product Detail Found'
                )}
                <Footer />
            </Wrapper>
        </>
    )
}

export default ProductDetails
