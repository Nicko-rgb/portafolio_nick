// Avatar.js
import React, { useEffect, useState } from "react";

const Avatar = () => {
    const [eyePos, setEyePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;

            const dx = (clientX - centerX) / 50;
            const dy = (clientY - centerY) / 50;

            setEyePos({ x: dx, y: dy });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <svg
            width="200"
            height="200"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Head */}
            <circle cx="100" cy="100" r="80" fill="#FFD700" />
            {/* Left Eye */}
            <g transform={`translate(${eyePos.x}, ${eyePos.y})`}>
                <circle cx="70" cy="80" r="20" fill="#FFF" />
                <circle cx="70" cy="80" r="10" fill="#000" />
            </g>
            {/* Right Eye */}
            <g transform={`translate(${eyePos.x}, ${eyePos.y})`}>
                <circle cx="130" cy="80" r="20" fill="#FFF" />
                <circle cx="130" cy="80" r="10" fill="#000" />
            </g>
            {/* Smile */}
            <path
                d="M 70 120 Q 100 160 130 120"
                stroke="#000"
                strokeWidth="4"
                fill="transparent"
            />
        </svg>
    );
};

export default Avatar;
