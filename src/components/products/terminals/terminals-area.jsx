import React, { useMemo, useState, useEffect, useRef } from 'react'
import valorpay_data from '@/data/products/terminals/valorpay=data'
import pax_data from '@/data/products/terminals/pax-data'
import nmi_data from '@/data/products/terminals/nmi-data'
import firstdata_data from '@/data/products/terminals/firstdata-data'
import dejavoo_data from '@/data/products/terminals/dejavoo-data'
import { terminals } from '@/data/term-solutions'
import { useRouter } from 'next/router'
import Image from 'next/image'

const ProductArea = (props) => {
    const { firstSelected } = props
    const [selectedTerminalId, setSelectedTerminalId] = useState(1)
    const router = useRouter()
    const [search, setSearch] = useState("");
    const [searchError, setSearchError] = useState(false);
    
    const mergedProducts = useMemo(() => {
    return [
            ...pax_data,
            ...dejavoo_data,
            ...firstdata_data,
            ...nmi_data,
            ...valorpay_data,
        ]
    }, [])
        
        const [filterSearch, setFilterSearch] = useState(mergedProducts);


    const moveToProductDetail = (e) => (terminalId, productId) => {
        e.preventDefault()
        const defaultPathName = router.pathname
        router.push(`${defaultPathName}/details/${terminalId}/${productId}`)
    }

    const changeSelectionOfProduct = (e) => (id) => {
        e.preventDefault()
        setSelectedTerminalId(id)
    }


    const debounceTimeoutRef = useRef(null);
    const debounce = (func, delay) => {
        clearTimeout(debounceTimeoutRef.current);
        debounceTimeoutRef.current = setTimeout(func, delay);
    };

    const onDelaySearch = (search) => {
        if (search.trim().length < 1) {
            setFilterSearch(mergedProducts); // Show all products if search is empty
            setSearchError(false);
        } else {
            const result = mergedProducts.filter(item => item.title.toLowerCase().includes(search.toLowerCase()));
            setFilterSearch(result);
            setSearchError(result.length === 0);
        }
    };

    const handleInputChange = (e) => {
        const searchValue = e.target.value;
        setSearch(searchValue);
        debounce(() => onDelaySearch(searchValue), 500); // Reduced delay for quicker response
    };


    useEffect(() => {
        setFilterSearch(mergedProducts);
    }, [mergedProducts]);

    

    console.log("all filter results", filterSearch)

    return (
        <>
            <div className="shop-area pt-50 pb-130">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1>Terminal Solutions</h1>
                            <div className="contactform mb-60 mt-40">
                                <form id="contact-form" method="post">
                                    <div className="row text-center justify-content-center">
                                        <div className="col-lg-6">
                                            <div className="product-search contactform__input position-relative">
                                                <input
                                                    name="name"
                                                    type="text"
                                                    placeholder="Search your product here"
                                                    onChange={(e) => handleInputChange(e)}
                                                    value={search}
                                                />
                                                <div className="text-primary">
                                                    <i class="fa-light fa-search fa-lg"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-3">
                            {/* <ul
                                className="nav tp-nav-tavs right-border mb-70 flex-column gap-4"
                                id="myTab"
                                role="tablist"
                            >
                                {terminals.map((terminal) => {
                                    return (
                                        <li
                                            className="w-100 nav-item"
                                            role="presentation"
                                            key={terminal.id}
                                        >
                                            <button
                                                className={`w-100 nav-link ${
                                                    firstSelected &&
                                                    terminal.id === 1
                                                        ? 'active'
                                                        : ''
                                                }`}
                                                onClick={(e) =>
                                                    changeSelectionOfProduct(e)(
                                                        terminal.id
                                                    )
                                                }
                                                id="home-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#home-tab-pane"
                                                type="button"
                                                role="tab"
                                                aria-controls="home-tab-pane"
                                                aria-selected="false"
                                                tabIndex="-1"
                                            >
                                                <Image
                                                    priority
                                                    src={terminal.img}
                                                    height={40}
                                                    width={90}
                                                    alt=""
                                                />
                                            </button>
                                        </li>
                                    )
                                })}
                            </ul> */}
                            <h4 className="d-flex align-items-center gap-2 mb-4">
                                <i class="fa-light fa-grid-2"></i> Filter
                            </h4>
                            <div class="accordion" id="accordionExample">
                                <div class="accordion-item border-top-0">
                                    <h2 class="accordion-header">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#TerminalTypes" aria-expanded="true" aria-controls="TerminalTypes">
                                        Terminal Types
                                    </button>
                                    </h2>
                                    <div id="TerminalTypes" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <div class="form-check">
                                                <input
                                                    class="form-check-input"
                                                    name="name"
                                                    type="checkbox"
                                                    id="Standalone"
                                                />
                                                <label class="form-check-label" for="Standalone">Standalone</label>
                                            </div>
                                            <div class="form-check">
                                                <input
                                                    class="form-check-input"
                                                    name="name"
                                                    type="checkbox"
                                                    id="Semi-Integrated"
                                                />
                                                <label class="form-check-label" for="Semi-Integrated">Semi-Integrated</label>
                                            </div>
                                            <div class="form-check">
                                                <input
                                                    class="form-check-input"
                                                    name="name"
                                                    type="checkbox"
                                                    id="Pin-Pad"
                                                />
                                                <label class="form-check-label" for="Pin-Pad">Pin-Pad</label>
                                            </div>
                                            <div class="form-check">
                                                <input
                                                    class="form-check-input"
                                                    name="name"
                                                    type="checkbox"
                                                    id="MobileApp"
                                                />
                                                <label class="form-check-label" for="MobileApp">Mobile App</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#ConnectionType" aria-expanded="false" aria-controls="ConnectionType">
                                        Connection Type
                                    </button>
                                    </h2>
                                    <div id="ConnectionType" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <div class="form-check">
                                                <input
                                                    class="form-check-input"
                                                    name="name"
                                                    type="checkbox"
                                                    id="Ethernet"
                                                />
                                                <label class="form-check-label" for="Ethernet">Ethernet</label>
                                            </div>
                                            <div class="form-check">
                                            <input
                                                    class="form-check-input"
                                                    name="name"
                                                    type="checkbox"
                                                    id="Wifi"
                                                />
                                                <label class="form-check-label" for="Wifi">Wifi</label>
                                            </div>
                                            <div class="form-check">
                                                <input
                                                    class="form-check-input"
                                                    name="name"
                                                    type="checkbox"
                                                    id="Cellular"
                                                />
                                                <label class="form-check-label" for="Cellular">Cellular</label>
                                            </div>
                                            <div class="form-check">
                                                <input
                                                    class="form-check-input"
                                                    name="name"
                                                    type="checkbox"
                                                    id="Dial"
                                                />
                                                <label class="form-check-label" for="Dial">Dial</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#BatteryEquipped" aria-expanded="false" aria-controls="BatteryEquipped">
                                        Battery Equipped
                                    </button>
                                    </h2>
                                    <div id="BatteryEquipped" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <div class="form-check">
                                                <input
                                                    class="form-check-input"
                                                    name="Battery Equipped"
                                                    type="radio"
                                                    id="BatteryEquipped-Yes"
                                                    checked
                                                />
                                                <label class="form-check-label" for="BatteryEquipped-Yes">Yes</label>
                                            </div>
                                            <div class="form-check">
                                            <input
                                                    class="form-check-input"
                                                    name="Battery Equipped"
                                                    type="radio"
                                                    id="BatteryEquipped-No"
                                                />
                                                <label class="form-check-label" for="BatteryEquipped-No">No</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#ReceiptPrinter" aria-expanded="false" aria-controls="ReceiptPrinter">
                                        Receipt Printer
                                    </button>
                                    </h2>
                                    <div id="ReceiptPrinter" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <div class="form-check">
                                                <input
                                                    class="form-check-input"
                                                    name="Receipt Printer"
                                                    type="radio"
                                                    id="ReceiptPrinter-Yes"
                                                    checked
                                                />
                                                <label class="form-check-label" for="ReceiptPrinter-Yes">Yes</label>
                                            </div>
                                            <div class="form-check">
                                            <input
                                                    class="form-check-input"
                                                    name="Receipt Printer"
                                                    type="radio"
                                                    id="ReceiptPrinter-No"
                                                />
                                                <label class="form-check-label" for="ReceiptPrinter-No">No</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#Features" aria-expanded="false" aria-controls="Features">
                                        Features
                                    </button>
                                    </h2>
                                    <div id="Features" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <div class="form-check">
                                                <input
                                                    class="form-check-input"
                                                    name="name"
                                                    type="checkbox"
                                                    id="SupportsPin-Pad"
                                                />
                                                <label class="form-check-label" for="SupportsPin-Pad">Supports Pin-Pad</label>
                                            </div>
                                            <div class="form-check">
                                            <input
                                                    class="form-check-input"
                                                    name="name"
                                                    type="checkbox"
                                                    id="Contactless"
                                                />
                                                <label class="form-check-label" for="Wifi">Contactless</label>
                                            </div>
                                            <div class="form-check">
                                                <input
                                                    class="form-check-input"
                                                    name="name"
                                                    type="checkbox"
                                                    id="EmailReceipt"
                                                />
                                                <label class="form-check-label" for="EmailReceipt">Email Receipt</label>
                                            </div>
                                            <div class="form-check">
                                                <input
                                                    class="form-check-input"
                                                    name="name"
                                                    type="checkbox"
                                                    id="SMSReceipt"
                                                />
                                                <label class="form-check-label" for="SMSReceipt">SMS Receipt</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#PricingProgram" aria-expanded="false" aria-controls="PricingProgram">
                                        Pricing Program
                                    </button>
                                    </h2>
                                    <div id="PricingProgram" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <div class="form-check">
                                                <input
                                                    class="form-check-input"
                                                    name="name"
                                                    type="checkbox"
                                                    id="CygnusCashDiscount"
                                                />
                                                <label class="form-check-label" for="CygnusCashDiscount">Cygnus Cash Discount</label>
                                            </div>
                                            <div class="form-check">
                                            <input
                                                    class="form-check-input"
                                                    name="name"
                                                    type="checkbox"
                                                    id="Surcharge"
                                                />
                                                <label class="form-check-label" for="Surcharge">Surcharge</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8 col-lg-9">
                            <div className="row">
                                {console.log("In UI", filterSearch)}
                                {filterSearch?.map((item) => (
                                    <div
                                        key={item.id}
                                        className="col-xl-4 col-lg-4 col-md-6"
                                        onClick={(e) =>
                                            moveToProductDetail(e)(
                                                selectedTerminalId,
                                                item.id
                                            )
                                        }
                                    >
                                        <div
                                            className="tpshopitem mb-50 wow fadeInUp"
                                            data-wow-delay=".6s"
                                        >
                                            <div className="tpshopitem__thumb p-relative fix p-relative mb-35">
                                                <img
                                                    src={item.img}
                                                    alt="shop-thumb"
                                                />
                                            </div>
                                            <div className="tpshopitem__content text-center">
                                                <span className="tpshopitem__title mb-0">
                                                    <h4>{item.title}</h4>
                                                </span>
                                                <span className="tpshopitem__title mb-5">
                                                    {item.title}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductArea
