"use client"
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const CoverImage = () => {
    // Particle animation logic
    const particlesRef = useRef();
    useEffect(() => {
        const canvas = particlesRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        let animationId;
        const dpr = window.devicePixelRatio || 1;
        const width = window.innerWidth;
        const height = window.innerHeight;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        canvas.style.width = width + "px";
        canvas.style.height = height + "px";
        ctx.scale(dpr, dpr);
        // Particle setup
        const particles = Array.from({ length: 30 }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            r: 1 + Math.random() * 2,
            dx: -0.2 + Math.random() * 0.4,
            dy: -0.2 + Math.random() * 0.4,
            alpha: 0.2 + Math.random() * 0.3,
        }));
        function animate() {
            ctx.clearRect(0, 0, width, height);
            for (const p of particles) {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
                ctx.fillStyle = `rgba(0,255,255,${p.alpha})`;
                ctx.shadowColor = "#0ff";
                ctx.shadowBlur = 8;
                ctx.fill();
                ctx.shadowBlur = 0;
                p.x += p.dx;
                p.y += p.dy;
                if (p.x < 0) p.x = width;
                if (p.x > width) p.x = 0;
                if (p.y < 0) p.y = height;
                if (p.y > height) p.y = 0;
            }
            animationId = requestAnimationFrame(animate);
        }
        animate();
        return () => cancelAnimationFrame(animationId);
    }, []);

    // Grid visibility state
    const [showGrid, setShowGrid] = useState(true);
    useEffect(() => {
        const interval = setInterval(() => {
            setShowGrid((prev) => !prev);
        }, 4000); // 4 seconds visible, 4 seconds hidden
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden animate-tech-gradient">
            {/* Animated SVG grid overlay with timed fade */}
            <svg
                className={`pointer-events-none absolute inset-0 w-full h-full transition-opacity duration-1000 z-0 ${showGrid ? 'opacity-10' : 'opacity-0'}`}
                width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <pattern id="smallGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0ff" strokeWidth="0.5" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#smallGrid)" />
            </svg>
            {/* Particle canvas */}
            <canvas ref={particlesRef} className="pointer-events-none absolute inset-0 w-full h-full z-0" />
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-5 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px]"></div>
            </div>

            {/* Main content container */}
            <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-8 lg:px-16">
                <div className="max-w-6xl w-full">
                    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                        {/* Image section */}
                        <div className="flex-shrink-0">
                            <div className="relative group">
                                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition duration-500"></div>
                                <Image 
                                    width={1000} 
                                    height={1000} 
                                    src="/ldnam.jpg" 
                                    alt="Duy-Nam Ly" 
                                    className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full object-cover border-4 border-white/10 shadow-2xl transition-all duration-300 hover:scale-105 hover:border-white/20"
                                />
                            </div>
                        </div>

                        {/* Text content */}
                        <div className="flex-1 text-center lg:text-left">
                            <div className="space-y-6">
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                                    <span className="bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">
                                        Duy-Nam Ly (Nam)
                                    </span>
                                    
                                </h1>
                                
                                <p className="text-xl sm:text-2xl text-slate-300 leading-relaxed max-w-2xl">
                                    Researcher at the University of Science, VNUHCM
                                </p>
                                
                                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                                    <span className="cursor-default px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full text-slate-200 text-sm font-medium border border-white/10 hover:bg-white/10 hover:border-white/20 transition-colors duration-200">
                                        Human-Computer Interaction
                                    </span>
                                    <span className="cursor-default px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full text-slate-200 text-sm font-medium border border-white/10 hover:bg-white/10 hover:border-white/20 transition-colors duration-200">
                                        eXtended Reality
                                    </span>
                                    <span className="cursor-default px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full text-slate-200 text-sm font-medium border border-white/10 hover:bg-white/10 hover:border-white/20 transition-colors duration-200">
                                        Intelligent User Interfaces
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="w-6 h-10 border-2 border-slate-400/30 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-slate-400/50 rounded-full mt-2 animate-pulse"></div>
                </div>
            </div>
        </div>
    );
}

export default CoverImage;