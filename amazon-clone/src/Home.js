import React from 'react'
import "./Home.css";
import Product from './Product';
function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img 
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />

                <div className="home__row">
                    <Product 
                    id="123"
                    title="The Lean Startup: How Constant Innovation Creates Radically Successfull Businesses Paperback" price={19.99} image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                    rating={5}
                    />
                    <Product 
                    id="49538094"
                    title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                    price={239.0}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/51xQ8aZHc8L._AC_UL320_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                    id="4903850"
                    title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                    price={199.99}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/61x1EmfGAlL._AC_UL480_FMwebp_QL65_.jpg"
                    />
                    <Product 
                    id="23445930"
                    title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                    price={98.99}
                    rating={5}
                    image="https://i.insider.com/5dd5cf16fd9db27dbe76c1d3"
                    />
                    <Product
                    id="3254354345"
                    title="New Apple iPad Pro (12.9-inch, Wi-Fi, 12GB) - Silver (4th Generation)"
                    price={598.99}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/71UORRbCq9L._AC_UL480_FMwebp_QL65_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                    id="90829332"
                    title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 14440"
                    price={1094.99}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/61e+xSAa1KL._AC_UL480_FMwebp_QL65_.jpg"
                    />
                </div>

            </div>
        </div>
    )
}

export default Home
