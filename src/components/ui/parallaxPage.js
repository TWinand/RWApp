"use client"
import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

export function ParallaxPage() {
    const scrollRef = useRef(null);

    useEffect(() => {
        const scroll = new LocomotiveScroll({
            el: scrollRef.current,
            smooth: true,
        });

        return () => {
            scroll.destroy();
        };
    }, []);

    return (
        <div data-scroll-container ref={scrollRef}>
            <section data-scroll-section style={{ height: '100vh', background: '#111' }}>
                <h1 data-scroll data-scroll-speed="2">Parallax Text</h1>
            </section>
            <section data-scroll-section style={{ height: '100vh', background: '#444' }}>
                <p data-scroll data-scroll-speed="-1">Langsamer Text</p>
            </section>
        </div>
    );
}
