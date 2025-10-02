import React from "react";

export default function Location() {
    const latitude = 52.51334;
    const longitude = 1.00301;

    // Google Maps URL
    const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;

    // Apple Maps URL
    const appleMapsUrl = `http://maps.apple.com/?ll=${latitude},${longitude}`;

    // Detect Apple device
    const isApple = /iPad|iPhone|iPod|Macintosh/.test(navigator.userAgent);

    return (
        <div className="flex justify-center mt-4">
            <a
                href={isApple ? appleMapsUrl : googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    src="../assets/Map.png"
                    alt="Local town"
                    className="w-64 h-auto rounded-lg shadow-md cursor-pointer hover:opacity-80 transition"
                />
            </a>
        </div>
    );
}
