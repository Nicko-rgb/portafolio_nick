import React from 'react'
import './anima.css'


export const MiniCubo = () => {
    return (
        <div className="cubo">
            <div className="esqui esquina1"></div>
            <div className="esqui esquina2"></div>
            <div className="esqui esquina3"></div>
            <div className="esqui esquina4"></div>
            <div className="scene">
                <div className="cube">
                    <div className="face front"></div>
                    <div className="face back"></div>
                    <div className="face left"></div>
                    <div className="face right"></div>
                    <div className="face top"></div>
                    <div className="face bottom"></div>
                </div>
            </div>
        </div>
    )
}





