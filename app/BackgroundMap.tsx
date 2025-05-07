// pages/index.js
'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import React from "react";
import nextConfig from "../next.config";

const BackgroundMap: React.FC = () => {
    const base = nextConfig.basePath;
    const [scrollY, setScrollY] = useState(0);
    const [maxScroll, setMaxScroll] = useState(1000);
    const [showPlane, setShowPlane] = useState(false);
    const [coordinates, setCoordinates] = useState({ x1: 0, y1: 0, x2: 0, y2: 0, offset: 0 , rotate: 103});

    const marker = base+'/marker.png';
    const planeIcon = base+'/plane.png';
    const mapImage = base+'/Terr_3.png';

    useEffect(() => {
        const updateCoordinates = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;

            if (width < 640) {
                setCoordinates({
                    x1: width * 0.15,
                    y1: height * 0.2,
                    x2: width * 0.85,
                    y2: height * 0.4,
                    offset: height / 1.5,
                    rotate: 140
                });
            } else if (width >= 640 && width < 1024) {
                setCoordinates({
                    x1: width * 0.1,
                    y1: height * 0.25,
                    x2: width * 0.7,
                    y2: height * 0.55,
                    offset: height / 1.3,
                    rotate: 130
                });
            } else {
                setCoordinates({
                    x1: width * 0.1,
                    y1: height * 0.25,
                    x2: width * 0.88,
                    y2: height * 0.55,
                    offset: height / 1.3,
                    rotate: 130
                });
            }
        };

        const handleScroll = () => setScrollY(window.scrollY);

        updateCoordinates();
        const updateMaxScroll = () => {
            const totalHeight = document.documentElement.scrollHeight;
            setMaxScroll(totalHeight - 2 * window.innerHeight);
        };

        updateMaxScroll();
        window.addEventListener("resize", updateMaxScroll);
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("resize", updateMaxScroll);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const { x1, y1, x2, y2, offset } = coordinates;

    const progress = Math.min(Math.max(scrollY - offset, 0) / maxScroll, 1);

    const planeX = x1 + progress * (x2 - x1);
    const planeY = y1 + progress * (y2 - y1);


    useEffect(() => {
        setShowPlane(scrollY > offset);
    }, [scrollY, offset]);

    return (
        <div className="relative w-full">

            <div className="fixed top-0 left-0 w-full h-full -z-10"
            style={{
                filter: "blur(1px)",
                opacity: 0.37
            }}>
                <Image src={mapImage}
                       alt="Map Background"
                       layout="fill"
                       objectFit="cover"
                       objectPosition="bottom right "/>
            </div>

            {showPlane && (
                <div className="fixed transition-transform duration-300"
                 style={{
                    left: `${planeX}px`,
                    top: `${planeY}px`,
                    transform: "translate(-50%, -50%)",
                    width: '60px',
                    opacity: 0.7,
                    filter: x1+10 < planeX && !(y2 === planeY)? "drop-shadow(-10px 20px 0px rgba(0, 0, 0, 0.4))": "none",
                    transition: "transform 2.5s linear, filter 1.8s ease-in-out, left 0.7s linear, top 0.7s linear",
                }}>
                <Image className="rotate-103" src={planeIcon} alt="Plane" width={60} height={60} />
                </div>)
            }

            {showPlane && (
                <div>
                    <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-9">
                        <Image src={marker} alt="Marker" width={50} height={50}
                               style={{
                                   position: "absolute",
                                   left: `${x1-20}px`,
                                   top: `${y1-45}px`
                               }} className="sm:hidden" />
                    </div>
                    {y2 === planeY && (
                        <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-9">
                            <Image src={marker} alt="Marker" width={50} height={50}
                                   style={{
                                       position: "absolute",
                                       left: `${x2-27}px`,
                                       top: `${y2-45}px`
                                   }}/>
                        </div>
                    )}
                </div>)}
        </div>
    );
}

export default BackgroundMap;