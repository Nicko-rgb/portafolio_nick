// src/hooks/useScreenSize.js
import { useState, useEffect } from 'react';

const useScreenSize = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        
        // Limpieza del listener al desmontar el componente
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return width;
};

export default useScreenSize;
