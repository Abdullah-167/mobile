import React, { useState, useEffect } from 'react';

const ProgressBar = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            const scrollTop = document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight;
            const clientHeight = document.documentElement.clientHeight;
            const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
            setProgress(progress)
        }

        window.addEventListener("scroll", onScroll)

        return () => {
            window.removeEventListener("scroll", onScroll)
        }
    }, [])


    return (
        <div className="hidden lg:block fixed top-[108px] left-0 w-full h-1.5 bg-black rounded-r-lg z-[20000]">
            <div
                className="h-full main-grd"
                style={{ width: `${progress}%` }}
            ></div>
        </div>
    );
};

export default ProgressBar;