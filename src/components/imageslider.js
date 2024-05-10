"use client";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import ImageZoom from "react-image-zooom";

export default function ImageSlider({ urls }) {
    const transformedUrls = urls.map(url => {
        return `https://autoland-storage.s3.eu-central-1.amazonaws.com/${url}`
    });
    const [imageIndex, setImageIndex] = useState(0);

    const showNextImg = () => {
        setImageIndex((index) => {
            if (index === urls.length - 1) return 0;
            return index + 1;
        });
    };

    const showPrevImg = () => {
        setImageIndex((index) => {
            if (index === 0) return urls.length - 1;
            return index - 1;
        });
    };

    return (
        <div
            className="relative sm:aspect-video group overflow-hidden sm:aspect-w-16 sm:aspect-h-9 aspect-w-1 aspect-h-1 w-full"
        >
            <div className="flex h-full w-full overflow-hidden rounded-lg relative">
                {transformedUrls.map((image, index) => {
                    return (
                        <div
                            key={image}
                            className="w-full h-full flex-shrink-0 flex-grow-0 transition-transform ease-in-out duration-300 relative flex justify-center items-center"
                            style={{
                                transform: `translateX(-${100 * imageIndex}%)`,
                                zIndex: index === imageIndex ? 10 : 0,
                            }}
                        >
                            <ImageZoom
                                className="block flex-shrink-0 flex-grow-0 max-w-full max-h-full overflow-hidden object-fill select-none cursor-zoom-in"
                                src={image}
                                alt={`img${index + 1}`}
                            />
                        </div>
                    );
                })}
            </div>
            <button
                onClick={showPrevImg}
                className="z-20 absolute group-hover:sm:translate-x-[32px] -left-[32px] translate-x-[32px] h-full flex top-0 justify-center items-center bg-black bg-opacity-50 p-1 sm:opacity-50 opacity-30 hover:opacity-100 transition-all"
            >
                <ChevronLeftIcon className="h-6 w-6 text-white" />
            </button>
            <button
                onClick={showNextImg}
                className="z-20 absolute group-hover:sm:-translate-x-[32px] -right-[32px] -translate-x-[32px] h-full flex top-0 justify-center items-center bg-black bg-opacity-50 p-1 sm:opacity-50 opacity-30 hover:opacity-100 transition-all"
            >
                <ChevronRightIcon className="h-6 w-6 text-white" />
            </button>
            <div className="z-20 absolute top-0 left-1/2 -translate-x-1/2 text-white bg-black bg-opacity-50 p-1 rounded-y-lg rounded-b-lg">
                {imageIndex + 1} z {urls.length}
            </div>
        </div>
    );
}