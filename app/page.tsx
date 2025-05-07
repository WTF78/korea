'use client'

import './globals.css';
import React, {useState,  useRef, useEffect} from "react";
import Image from "next/image";
import BackgroundVideo from "@/app/BackgroundVideo";
import BackgroundMap from "@/app/BackgroundMap";
import nextConfig from "../next.config";


export default function Home() {
    const base = nextConfig.basePath;

    const scrollOnePage = () => {
        window.scrollBy({
            top: window.innerHeight,
            behavior: 'smooth',
        });
    };

    const topRef = useRef(null);
    const bottomRef = useRef(null);

    const [isTopVisible, setIsTopVisible] = useState(true);
    const [isBottomVisible, setIsBottomVisible] = useState(false);

    useEffect(() => {
        const topEl = topRef.current;
        const bottomEl = bottomRef.current;

        if (!topEl || !bottomEl) return;

        const topObserver = new IntersectionObserver(
            ([entry]) => {
                setIsTopVisible(entry.isIntersecting);
            },
            {
                root: null,
                threshold: 0.1,
            }
        );

        const bottomObserver = new IntersectionObserver(
            ([entry]) => {
                setIsBottomVisible(entry.isIntersecting);
            },
            {
                root: null,
                threshold: 0.1,
            }
        );

        topObserver.observe(topEl);
        bottomObserver.observe(bottomEl);

        return () => {
            topObserver.unobserve(topEl);
            bottomObserver.unobserve(bottomEl);
        };
    }, []);

    const image = [
        `${base}/korea_2.jpg`,
        `${base}/korea_4.jpg`,
        `${base}/korea_1.jpg`,
        `${base}/korea_3.jpg`,
    ]

    return (
        <div>
            <main>
                <div className="relative">
                    <section id="home" className="relative w-full h-screen">
                        <div ref={topRef}>
                            <BackgroundVideo/>
                        </div>

                        <div className="relative z-10 flex items-center justify-center h-full">
                            <div onClick={scrollOnePage} className="relative -mt-10 hover:scale-110 transition-all cursor-pointer heartbeat">
                                <Image src="/Logo3.png" alt="Charm" width="320" height="320" className="logo-dark"/>
                            </div>
                        </div>
                    </section>
                    <section className="relative pb-8">
                        <BackgroundMap/>

                        <div className="w-full max-w-screen-sm sm:max-w-screen-md md:max-w-screen-lg mx-auto px-4">
                            <section id="about_us" className="text-lg">
                                <h1>About us</h1>
                                <p>
                                    <strong>Our agency </strong>
                                    - is your reliable guide to the world of hostess work in South Korea. We are
                                    proud of our many years of experience and professionalism in the field of
                                    employment, providing our employees with only the best conditions and opportunities
                                    for career growth.
                                </p>
                                <p>
                                    We value honesty and transparency in our relationships with our employees and
                                    partners. Each of our actions is aimed at ensuring maximum safety and comfort for
                                    you. We officially work with leading institutions in South Korea, which guarantees
                                    the legality and reliability of your employment.
                                </p>
                                <p>
                                    Our agency provides full information support, starting with consultation and ending
                                    with support throughout the entire period of work. We will help you adapt to new
                                    conditions, provide free accommodation and ensure maximum safety at every stage.
                                </p>
                                <p>
                                    Join us and discover unique opportunities to work in South Korea with the best
                                    agency! We will do our best to make your experience not only profitable but also
                                    enjoyable.
                                </p>
                            </section>
                            <section id="describe">
                                <h1>Description</h1>
                                <div className="flex justify-between space-x-12">
                                    <div className="w-1/2">
                                        <div className="text-2xl font-bold">Vacancy:</div>
                                        <br/>
                                        <div className="text-xl font-semibold">Hostess</div>
                                    </div>
                                    <div>
                                        Hostess jobs in South Korea offer a unique opportunity to immerse yourself in a
                                        dynamic and culturally rich environment. Duties include greeting and interacting
                                        with guests, singing karaoke, creating a festive atmosphere and maintaining the
                                        comfort of visitors. The work takes place in a cozy and safe environment, with
                                        flexible hours and competitive wages. With our help, you can not only
                                        significantly increase your income, but also gain an unforgettable experience,
                                        getting to know the culture and hospitality of South Korea.
                                    </div>
                                </div>
                            </section>
                            <section id="rules">
                                <h1>Rules</h1>

                                <div className="">
                                    <div className="flex flex-wrap gap-4 justify-around text-start">
                                        <div className="w-full sm:w-[46%] lg:w-[30%] bg-base-100/40 border border-base-400 rounded-box p-2">
                                            <div className="text-center font-semibold pb-2">No pitfalls or hidden responsibilities!</div>
                                            <div>
                                                <ul className="text-sm leading-relaxed list-disc pl-4">
                                                    <li>Hostess work in South Korea is becoming increasingly popular among
                                                        girls looking for an opportunity to earn money in comfortable conditions.</li>
                                                    <li>One of the main advantages is the absence of pitfalls and hidden responsibilities.</li>
                                                    <li>All that is required of employees is communication with guests,
                                                        creating a pleasant atmosphere.</li>
                                                    {/*<li>No unpleasant surprises or unexpected demands.</li>*/}
                                                    <li>Transparent and clear responsibilities guarantee
                                                        peace of mind and confidence in the future.</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="w-full sm:w-[46%] lg:w-[30%] bg-base-100/40 border border-base-400 rounded-box p-2">
                                            <div className="text-center font-semibold pb-2">Intimacy are strictly prohibited!</div>
                                            <div>
                                                <ul className="text-sm leading-relaxed list-disc pl-4">
                                                    <li>One of the most important principles of hostess work in South Korea is a
                                                        strict ban on any intimate services, going out with clients and other
                                                        questionable offers.
                                                    </li>
                                                    <li>The employer strictly monitors compliance with these
                                                        rules, which ensures safety and comfort for all employees.
                                                    </li>
                                                    {/*<li>Your job is*/}
                                                    {/*    solely about communication and creating a pleasant atmosphere, and no*/}
                                                    {/*    additional services are required or welcomed.*/}
                                                    {/*</li>*/}
                                                    <li>This approach allows girls
                                                        to work in comfortable and safe conditions, without fear for their
                                                        reputation and safety.
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="w-full sm:w-[46%] lg:w-[30%] bg-base-100/40 border border-base-400 rounded-box p-2">
                                            <div className="text-center font-semibold pb-2">Transparent working conditions!</div>
                                            <div>
                                                <ul className="text-sm leading-relaxed list-disc pl-4">
                                                    <li>Transparent working conditions are the key to your peace of mind and
                                                        confidence. Working as a hostess in South Korea, you can be sure that all
                                                        the conditions agreed upon during employment will be strictly observed.
                                                    </li>
                                                    <li>Salary, working hours, days off - all this is agreed upon in advance and
                                                        fixed in the contract. No hidden payments or sudden changes in conditions.
                                                    </li>
                                                    <li>Your rights and interests are protected, and you can always count on honest
                                                        and fair treatment.
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </section>

                            <section id="feedback">
                                <h1>Feedback</h1>
                                <div className="flex justify-center items-center pb-5">
                                    <div className="carousel rounded-box w-64">
                                        <div id="slide_1" className="carousel-item w-full">
                                            <Image
                                                src={image[0]}
                                                className="object-cover"
                                                fill
                                                alt="1" />
                                        </div>
                                        <div id="slide_2" className="carousel-item w-full">
                                            <Image
                                                src={image[1]}
                                                className="object-cover"
                                                fill
                                                alt="2" />
                                        </div>
                                        <div id="slide_3" className="carousel-item w-full">
                                            <Image
                                                src={image[2]}
                                                className="object-cover"
                                                fill
                                                alt="3" />
                                        </div>
                                        <div id="slide_4" className="carousel-item w-full">
                                            <Image
                                                src={image[3]}
                                                className="object-cover"
                                                fill
                                                alt="4" />
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section id="faq">
                                <h4 className="text-4xl text-center pt-12 pb-4">FAQ (Frequently Asked Questions)</h4>
                                <div className="w-full max-w-screen-sm sm:max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl mx-auto px-4">
                                    <div tabIndex={0} className="collapse collapse-arrow bg-base-100/60 border-base-300 border">
                                        <div className="collapse-title font-semibold">What are the responsibilities of a hostess?</div>
                                        <div className="collapse-content text-sm">
                                            Duties include greeting guests, communicating with them (possibly through a
                                            translator), participating in karaoke, creating a festive atmosphere, and
                                            maintaining the comfort of visitors.
                                        </div>
                                    </div>
                                    <div tabIndex={1} className="collapse collapse-arrow bg-base-100/60 border-base-200 border">
                                        <div className="collapse-title font-semibold">What are the working conditions and schedule?</div>
                                        <div className="collapse-content text-sm">
                                            Work is from 19:00 to 05:00, 2 days off per month. Different payment options
                                            are possible: salary + rate or rate per hour.
                                        </div>
                                    </div>
                                    <div tabIndex={2} className="collapse collapse-arrow bg-base-100/60 border-base-200 border">
                                        <div className="collapse-title font-semibold">Is accommodation provided?</div>
                                        <div className="collapse-content text-sm">
                                            Yes, free accommodation is provided in apartments within walking distance to
                                            all necessary places.
                                        </div>
                                    </div>
                                    <div tabIndex={3} className="collapse collapse-arrow bg-base-100/60 border-base-200 border">
                                        <div className="collapse-title font-semibold">What is the salary of a hostess?</div>
                                        <div className="collapse-content text-sm">
                                            Salary depends on the number of hours worked and can range from $3,000 to
                                            $7,500 for two months, including tips.
                                        </div>
                                    </div>
                                    <div tabIndex={4} className="collapse collapse-arrow bg-base-100/60 border-base-200 border">
                                        <div className="collapse-title font-semibold">Is knowledge of Korean required?</div>
                                        <div className="collapse-content text-sm">
                                            No, knowledge of Korean is not required as you can use a translator to
                                            communicate with guests.
                                        </div>
                                    </div>
                                    <div tabIndex={5} className="collapse collapse-arrow bg-base-100/60 border-base-300 border">
                                        <div className="collapse-title font-semibold">What documents are needed to work as a hostess?</div>
                                        <div className="collapse-content text-sm">
                                            A valid passport and visa, as well as a medical certificate, are required.
                                        </div>
                                    </div>
                                    <div tabIndex={6} className="collapse collapse-arrow bg-base-100/60 border-base-300 border">
                                        <div className="collapse-title font-semibold">How does the employment process work?</div>
                                        <div className="collapse-content text-sm">
                                            First, you need to go through an interview by phone or video call, after
                                            which the agency helps with the preparation of all documents.
                                        </div>
                                    </div>
                                    <div tabIndex={7} className="collapse collapse-arrow bg-base-100/60 border-base-300 border">
                                        <div className="collapse-title font-semibold">What education is required to work as a hostess?</div>
                                        <div className="collapse-content text-sm">
                                            Education does not matter, what is more important is having good
                                            communication skills and a desire to work.
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </section>
                    {/*Section 3 no*/}
                    <section>
                        <div ref={bottomRef} className="flex flex-wrap items-center justify-center gap-4 text-base">
                            <div className="px-4 pb-8">
                                <a href="https://t.me/username?text=Hi, I'm interested!)" target="_blank" data-theme="winter"
                                   className="btn btn-outline btn-neutral text-black hover:text-white py-7 text-lg" rel="nofollow noopener noreferrer">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="#24A1DE"
                                        width="48"
                                        height="48"
                                        viewBox="0 0 32 32"
                                        className="mr-1">
                                        <path
                                            d="M22.122 10.040c0.006-0 0.014-0 0.022-0 0.209 0 0.403 0.065 0.562 0.177l-0.003-0.002c0.116 0.101 0.194 0.243 0.213 0.403l0 0.003c0.020 0.122 0.031 0.262 0.031 0.405 0 0.065-0.002 0.129-0.007 0.193l0-0.009c-0.225 2.369-1.201 8.114-1.697 10.766-0.21 1.123-0.623 1.499-1.023 1.535-0.869 0.081-1.529-0.574-2.371-1.126-1.318-0.865-2.063-1.403-3.342-2.246-1.479-0.973-0.52-1.51 0.322-2.384 0.221-0.23 4.052-3.715 4.127-4.031 0.004-0.019 0.006-0.040 0.006-0.062 0-0.078-0.029-0.149-0.076-0.203l0 0c-0.052-0.034-0.117-0.053-0.185-0.053-0.045 0-0.088 0.009-0.128 0.024l0.002-0.001q-0.198 0.045-6.316 4.174c-0.445 0.351-1.007 0.573-1.619 0.599l-0.006 0c-0.867-0.105-1.654-0.298-2.401-0.573l0.074 0.024c-0.938-0.306-1.683-0.467-1.619-0.985q0.051-0.404 1.114-0.827 6.548-2.853 8.733-3.761c1.607-0.853 3.47-1.555 5.429-2.010l0.157-0.031zM15.93 1.025c-8.302 0.020-15.025 6.755-15.025 15.060 0 8.317 6.742 15.060 15.060 15.060s15.060-6.742 15.060-15.060c0-8.305-6.723-15.040-15.023-15.060h-0.002q-0.035-0-0.070 0z"/>
                                    </svg>
                                    Connect via Telegram
                                </a>
                            </div>
                        </div>
                    </section>

                </div>
                {/*    Buttons   Telegram Fixed*/}
                <div className={`${isBottomVisible || isTopVisible ? "opacity-0 pointer-events-none" : "opacity-100"} fixed bottom-[2vh] right-[5vw] lg:bottom-8 lg:right-8 text-black`}>
                    <button>
                        <div>
                            <div>
                                <a href="https://t.me/username?text=Hi, I'm interested!)" target="_blank" data-theme="winter"
                                   className="btn btn-dash btn-neutral rounded-full text-black hover:text-white py-6" rel="nofollow noopener noreferrer">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="#24A1DE"
                                        width="42"
                                        height="42"
                                        viewBox="0 0 32 32">
                                        <path
                                            d="M22.122 10.040c0.006-0 0.014-0 0.022-0 0.209 0 0.403 0.065 0.562 0.177l-0.003-0.002c0.116 0.101 0.194 0.243 0.213 0.403l0 0.003c0.020 0.122 0.031 0.262 0.031 0.405 0 0.065-0.002 0.129-0.007 0.193l0-0.009c-0.225 2.369-1.201 8.114-1.697 10.766-0.21 1.123-0.623 1.499-1.023 1.535-0.869 0.081-1.529-0.574-2.371-1.126-1.318-0.865-2.063-1.403-3.342-2.246-1.479-0.973-0.52-1.51 0.322-2.384 0.221-0.23 4.052-3.715 4.127-4.031 0.004-0.019 0.006-0.040 0.006-0.062 0-0.078-0.029-0.149-0.076-0.203l0 0c-0.052-0.034-0.117-0.053-0.185-0.053-0.045 0-0.088 0.009-0.128 0.024l0.002-0.001q-0.198 0.045-6.316 4.174c-0.445 0.351-1.007 0.573-1.619 0.599l-0.006 0c-0.867-0.105-1.654-0.298-2.401-0.573l0.074 0.024c-0.938-0.306-1.683-0.467-1.619-0.985q0.051-0.404 1.114-0.827 6.548-2.853 8.733-3.761c1.607-0.853 3.47-1.555 5.429-2.010l0.157-0.031zM15.93 1.025c-8.302 0.020-15.025 6.755-15.025 15.060 0 8.317 6.742 15.060 15.060 15.060s15.060-6.742 15.060-15.060c0-8.305-6.723-15.040-15.023-15.060h-0.002q-0.035-0-0.070 0z"/>
                                    </svg>
                                    Connect
                                </a>
                            </div>
                        </div>
                    </button>
                </div>
            </main>

            <footer data-theme="black" className="footer sm:footer-horizontal items-center justify-around bg-base-300/90 text-base-content p-6">
                <nav>
                    <h5 className="footer-title">Navigation</h5>
                    <a href="#home" className="link link-hover">Home</a>
                    <a href="#about_us" className="link link-hover">About us</a>
                    <a href="#describe" className="link link-hover">Description</a>
                </nav>
                <nav>
                    <h5 className="footer-title">Support</h5>
                    <a href="#rules" className="link link-hover">Rules</a>
                    <a href="#feedback" className="link link-hover">Feedback</a>
                    <a href="#faq" className="link link-hover">F.A.Q</a>
                </nav>
                <nav>
                    <h5 className="footer-title">Social</h5>
                    <div className="grid grid-flow-col gap-4">
                        <a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path
                                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                            </svg>
                        </a>
                        <a href="https://t.me/username?text=Hi, I'm interested!)" target="_blank" rel="nofollow noopener noreferrer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 32 32"
                                className="fill-current">
                                <path
                                    d="M22.122 10.040c0.006-0 0.014-0 0.022-0 0.209 0 0.403 0.065 0.562 0.177l-0.003-0.002c0.116 0.101 0.194 0.243 0.213 0.403l0 0.003c0.020 0.122 0.031 0.262 0.031 0.405 0 0.065-0.002 0.129-0.007 0.193l0-0.009c-0.225 2.369-1.201 8.114-1.697 10.766-0.21 1.123-0.623 1.499-1.023 1.535-0.869 0.081-1.529-0.574-2.371-1.126-1.318-0.865-2.063-1.403-3.342-2.246-1.479-0.973-0.52-1.51 0.322-2.384 0.221-0.23 4.052-3.715 4.127-4.031 0.004-0.019 0.006-0.040 0.006-0.062 0-0.078-0.029-0.149-0.076-0.203l0 0c-0.052-0.034-0.117-0.053-0.185-0.053-0.045 0-0.088 0.009-0.128 0.024l0.002-0.001q-0.198 0.045-6.316 4.174c-0.445 0.351-1.007 0.573-1.619 0.599l-0.006 0c-0.867-0.105-1.654-0.298-2.401-0.573l0.074 0.024c-0.938-0.306-1.683-0.467-1.619-0.985q0.051-0.404 1.114-0.827 6.548-2.853 8.733-3.761c1.607-0.853 3.47-1.555 5.429-2.010l0.157-0.031zM15.93 1.025c-8.302 0.020-15.025 6.755-15.025 15.060 0 8.317 6.742 15.060 15.060 15.060s15.060-6.742 15.060-15.060c0-8.305-6.723-15.040-15.023-15.060h-0.002q-0.035-0-0.070 0z"/>
                            </svg>
                        </a>
                        <a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path
                                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                            </svg>
                        </a>
                    </div>
                </nav>
            </footer>
        </div>
    );
}
