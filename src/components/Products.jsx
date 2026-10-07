
import React, { useEffect, useState } from 'react';

function Products() {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        async function getData() {
            try {
                const response = await fetch("https://dummyjson.com/products");

                const data = await response.json();

                setProducts(data.products);
            }
            catch (e) {
                console.log(e);
            }
            finally {
                console.log("Data Fetched");
            }
        }

        getData();

    }, []);

    return (
        <div style={{ textAlign: "center", marginTop: "20px" ,color:"yellow"}}>
            <h1>Products</h1>

            {products.map((product) => (
                <div key={product.id}>
                    <h3>{product.title}</h3>
                    <p>Price: ${product.price}</p>
                </div>
            ))}
        </div>
    );
}

export default Products;
;
