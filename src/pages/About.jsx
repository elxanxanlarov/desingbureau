import aboutBg from "../assets/images/bg-images/about-hero.png"
import gsap from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import ofisBg from "../assets/images/bg-images/about-ofis.png"
import kapitalBankImage from "../assets/images/kapital-bank.png"
gsap.registerPlugin(ScrollToPlugin);

export default function About() {
    const handleScroll = (e) => {
        e.preventDefault();
        const targetElement = document.getElementById('down');
        if (targetElement) {
            gsap.to(window, {
                duration: 1,
                scrollTo: {
                    y: targetElement,
                    offsetY: 0
                },
                ease: "power2.inOut"
            });
        }
    };

    return (
        <>
            <section className="w-screen h-screen bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${aboutBg})` }}>
                <div className="flex flex-col items-start gap-20 px-16 justify-center h-full">
                    <h3 className="text-white text-6xl font-bold">About us</h3>
                    <button type="button" className="border cursor-pointer border-white px-10 text-white  py-3 rounded-full w-fit" onClick={handleScroll}>SCROLL DOWN</button>
                </div>
            </section>
            <section className="px-16 pt-16" id="down">
                <div className="flex justify-between w-full border-t border-black/20 pt-10 pb-16">
                    <div className="flex flex-col justify-between w-1/2">
                        <p className="text-2xl font-medium">Who we are</p>
                        <p>MEET THE TEAM</p>
                    </div>
                    <div className="flex  w-1/2">
                        <p className="max-w-2/3">Design Bureau is an innovative architectural company that was founded in June 2021. The objective was to evaluate the potential opportunities for establishing a specialized and independent internal unit that would cater to the increasing demand for high-quality design services in the external market.</p>
                    </div>
                </div>
                <div className="flex justify-between w-full border-t border-black/20 pt-10 pb-16">
                    <div className="flex flex-col justify-between w-1/2">
                        <p className="text-2xl font-medium">Highlights</p>

                    </div>
                    <div className="flex flex-col gap-20 w-1/2">
                        <div className="flex justify-between max-w-2/3 w-full">
                            <div>
                                <span>Years</span>
                                <p className="text-8xl font-medium">4+</p>
                            </div>
                            <div>
                                <span>Years</span>
                                <p className="text-8xl font-medium">45+</p>
                            </div>
                        </div>
                        <div className="flex justify-between max-w-2/3 w-full">
                            <div>
                                <span>Type of works</span>
                                <p className="text-8xl font-medium">10+</p>
                            </div>
                            <div>
                                <span>Team members</span>
                                <p className="text-8xl font-medium">56+</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section
                className="px-16 h-screen">
                <div className="flex justify-center h-full" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${ofisBg})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                    <div className="flex flex-col justify-end h-full px-16 py-16 md:pl-100">
                        <h3 className="text-white text-3xl mb-8">Working with leading clients</h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12 p-10 pl-0">
                            <div>
                                <img src={kapitalBankImage} alt="ofisBg" />
                            </div>
                            <div>
                                <img src={kapitalBankImage} alt="ofisBg" />
                            </div>
                            <div>
                                <img src={kapitalBankImage} alt="ofisBg" />
                            </div>
                            <div>
                                <img src={kapitalBankImage} alt="ofisBg" />
                            </div>
                            <div>
                                <img src={kapitalBankImage} alt="ofisBg" />
                            </div>
                            <div>
                                <img src={kapitalBankImage} alt="ofisBg" />
                            </div>
                            <div>
                                <img src={kapitalBankImage} alt="ofisBg" />
                            </div>
                            <div>
                                <img src={kapitalBankImage} alt="ofisBg" />
                            </div>
                            <div>
                                <img src={kapitalBankImage} alt="ofisBg" />
                            </div>
                            <div>
                                <img src={kapitalBankImage} alt="ofisBg" />
                            </div>
                            <div>
                                <img src={kapitalBankImage} alt="ofisBg" />
                            </div>
                            <div>
                                <img src={kapitalBankImage} alt="ofisBg" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="px-16 pt-16" id="down">
                <div className="flex justify-between w-full border-t border-black/20 pt-10 pb-16">
                    <div className="flex flex-col justify-between w-1/2">
                        <p className="text-2xl font-medium">Creative vision</p>
                    </div>
                    <div className="flex  w-1/2">
                        <p className="max-w-2/3">Since its inception, Design Bureau has been committed to providing creative and sustainable architectural solutions that meet the needs of its clients. The company’s team of highly skilled and experienced architects works closely with clients to understand their specific requirements and to deliver exceptional designs that meet their expectations.</p>
                    </div>
                </div>
                <div className="flex justify-between w-full border-t border-black/20 pt-10 pb-16">
                    <div className="flex flex-col justify-between w-1/2">
                        <p className="text-2xl font-medium">Highlights</p>

                    </div>
                    <div >
                        <p>Request more information</p>
                        <p>info@designbureau.az</p>
                    </div>
                </div>
            </section>
            <section className="px-16 pb-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
                <div className="h-90 bg-[#D9D9D9]"></div>
                <div className="h-90 bg-[#D9D9D9]"></div>
                <div className="h-90 bg-[#D9D9D9]"></div>
                <div className="h-90 bg-[#D9D9D9]"></div>
            </section>

        </>
    )
}