import React, { useEffect, useState } from 'react';
import Card from './Card';

export default function DataFetch() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
                const jsonData = await response.json();
                console.log(jsonData);
                setProducts(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        getData();
    }, []);

    return (
        <div className="">
            <div className="grid grid-cols-1  p-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.map((product, key) => (
                    <Card key={key} products={product} />
                ))}
            </div>
        </div>
    );
}
