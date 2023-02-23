import React from "react";
import logo from '../images/logo.svg'
import facebook from '../images/icon-facebook.svg'
import twitter from '../images/icon-twitter.svg'
import pinterest from '../images/icon-pinterest.svg'
import instagram from '../images/icon-instagram.svg'

function Footer() {
    return (
        <>
        {/* CTA Section */}
        <section id="cta" className="py-24 bg-darkViolet">
            <div className="flex flex-col p-2 space-y-6">
                <h5 className="mx-auto space-y-10 text-4xl font-bold text-center text-white">
                    Boost your links today
                </h5>
                <button className="px-10 py-5 mx-auto text-2xl font-bold text-white rounded-full bg-cyan hover:bg-cyanLight md:text-base md:py-3 focus:outline-none">
                    Get Started
                </button>
            </div>
        </section>
        
        <footer className="py-16 bg-veryDarkViolet">
            <div className="container flex flex-col items-center justify-between mx-auto space-y-16 md:flex-row md:space-y-0 md:items-start">
                {/* Logo */}
                <img src={logo} alt="logo" />

                {/* Menus Container */}
                <div className="flex flex-col space-y-16 md:space-x-20 md:flex-row md:space-y-0">
                    {/* Menu 1 */}
                    <div className="flex flex-col items-center w-full md:items-start">
                        <div className="mb-5 font-bold text-white capitalize">Features</div>
                        <div className="flex flex-col items-center space-y-3 md:items-start">
                            <button className="capitalize text-grayishViolet hover:text-cyan">Link shortening</button>
                            <button className="capitalize text-grayishViolet hover:text-cyan">Branded links</button>
                            <button className="capitalize text-grayishViolet hover:text-cyan">Analytics</button>
                        </div>
                    </div>

                    {/* Menu 2 */}
                    <div className="flex flex-col items-center w-full md:items-start">
                        <div className="mb-5 font-bold text-white capitalize">Resources</div>
                        <div className="flex flex-col items-center space-y-3 md:items-start">
                            <button className="capitalize text-grayishViolet hover:text-cyan">Blog</button>
                            <button className="capitalize text-grayishViolet hover:text-cyan">Developers</button>
                            <button className="capitalize text-grayishViolet hover:text-cyan">Support</button>
                        </div>
                    </div>

                    {/* Menu 3 */}
                    <div className="flex flex-col items-center w-full md:items-start">
                        <div className="mb-5 font-bold text-white capitalize">Company</div>
                        <div className="flex flex-col items-center space-y-3 md:items-start">
                            <button className="capitalize text-grayishViolet hover:text-cyan">About</button>
                            <button className="capitalize text-grayishViolet hover:text-cyan">Our Team</button>
                            <button className="capitalize text-grayishViolet hover:text-cyan">Careers</button>
                            <button className="capitalize text-grayishViolet hover:text-cyan">Contact</button>
                        </div>
                    </div>

                </div>

                {/* Social Container */}
                <div className="flex space-x-6">
                    <button>
                        <img src={facebook} alt="facebook" className="ficon" />
                    </button>
                    <button>
                        <img src={twitter} alt="twitter" className="ficon" />
                    </button>
                    <button>
                        <img src={pinterest} alt="pinterest" className="ficon" />
                    </button>
                    <button>
                        <img src={instagram} alt="instagram" className="ficon" />
                    </button>
                    
                </div>

            </div>
        </footer>

        </>
    )
}

export default Footer