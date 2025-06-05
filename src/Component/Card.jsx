import React from 'react';

export default function Card({ products }) {
    const mapUrl = `https://maps.google.com/maps?q=${products.address.geo.lat},${products.address.geo.lng}&z=15&output=embed`;

    return (
        <div className="w-full max-w-sm mx-auto border border-amber-700 rounded-lg p-4 flex flex-col gap-2 shadow-md bg-white">
            <img src="/21104.png" className="w-full h-40 object-contain mb-2" alt="User" />

            <p><span className="font-semibold">Name:</span> {products.name}</p>
            <p><span className="font-semibold">Username:</span> {products.username}</p>
            <p><span className="font-semibold">Email:</span> {products.email}</p>
            <p><span className="font-semibold">Address:</span>
                {products.address.street.slice(0, 10)},
                {products.address.suite.slice(0, 5)},
                {products.address.city.slice(0, 8)},
                {products.address.zipcode.slice(0, 7)}
            </p>
            <p><span className="font-semibold">Company:</span> {products.company.name}</p>

            <div className="w-full h-40 mt-2">
                <iframe
                    src={mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="User Location"
                ></iframe>
            </div>
        </div>
    );
}
