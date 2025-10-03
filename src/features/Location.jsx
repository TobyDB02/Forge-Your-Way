import React from "react";
import Map from "../assets/Map.png"

export default function Location() {
    const latitude = 52.51830;
    const longitude = 1.01601;

    const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
    const appleMapsUrl = `http://maps.apple.com/?ll=${latitude},${longitude}`;
    const isApple = /iPad|iPhone|iPod|Macintosh/.test(navigator.userAgent);

    return (
        <div
            className=
                "flex justify-center mt-4"
        >
            <a
                href={isApple ? appleMapsUrl : googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    src={Map}
                    alt="Local town"
                    className="w-64 h-auto rounded-lg
                    shadow-md cursor-pointer hover:opacity-80
                    transition textcontent-img"
                    style={{
                        cursor: "pointer",
                        width: "100%",
                        height: 'auto',
                        maxWidth: '50vw'
                }}
                />
            </a>
        </div>
    );
}
