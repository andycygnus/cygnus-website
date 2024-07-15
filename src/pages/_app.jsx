import '../styles/index.scss'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Ga4React from 'ga-4-react'

if (typeof window !== 'undefined') {
    require('bootstrap/dist/js/bootstrap')
}

const measurementId = 'G-7288K2MRD8'

const MyApp = ({ Component, pageProps }) => {
    const router = useRouter()

    useEffect(() => {
        const ga4react = new Ga4React(measurementId)

        ga4react
            .initialize()
            .then((ga) => {
                // Send initial pageview
                ga.pageview(window.location.pathname + window.location.search)

                const handleRouteChange = (url) => {
                    ga.pageview(url)
                }

                router.events.on('routeChangeComplete', handleRouteChange)

                return () => {
                    router.events.off('routeChangeComplete', handleRouteChange)
                }
            })
            .catch((err) => {
                console.error('GA initialization error:', err)
            })
    }, [router.events])

    return <Component {...pageProps} />
}

export default MyApp
