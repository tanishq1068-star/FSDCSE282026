
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
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h1>Products</h1>

            {products.map((product) => (
                <div
                    key={product.id}
                    style={{
                        border: "2px solid black",
                        margin: "20px",
                        padding: "20px",
                        borderRadius: "10px"
                    }}
                >
                    <h2>{product.title}</h2>

                    <p><b>ID:</b> {product.id}</p>
                    <p><b>Description:</b> {product.description}</p>
                    <p><b>Category:</b> {product.category}</p>
                    <p><b>Price:</b> ${product.price}</p>
                    <p><b>Discount:</b> {product.discountPercentage}%</p>
                    <p><b>Rating:</b> {product.rating}</p>
                    <p><b>Stock:</b> {product.stock}</p>
                    <p><b>Brand:</b> {product.brand}</p>
                    <p><b>SKU:</b> {product.sku}</p>
                    <p><b>Weight:</b> {product.weight}</p>

                    <h3>Dimensions</h3>
                    <p>Width: {product.dimensions?.width}</p>
                    <p>Height: {product.dimensions?.height}</p>
                    <p>Depth: {product.dimensions?.depth}</p>

                    <p><b>Warranty:</b> {product.warrantyInformation}</p>
                    <p><b>Shipping:</b> {product.shippingInformation}</p>
                    <p><b>Availability:</b> {product.availabilityStatus}</p>
                    <p><b>Return Policy:</b> {product.returnPolicy}</p>
                    <p><b>Minimum Order:</b> {product.minimumOrderQuantity}</p>

                    <h3>Tags</h3>
                    {product.tags?.map((tag, index) => (
                        <span key={index}>
                            {tag}{" "}
                        </span>
                    ))}

                    <h3>Images</h3>

                    {product.images?.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={product.title}
                            width="150"
                            style={{ margin: "10px" }}
                        />
                    ))}

                    <h3>Reviews</h3>

                    {product.reviews?.map((review, index) => (
                        <div
                            key={index}
                            style={{
                                border: "1px solid gray",
                                margin: "10px",
                                padding: "10px"
                            }}
                        >
                            <p>
                                <b>Reviewer:</b> {review.reviewerName}
                            </p>

                            <p>
                                <b>Rating:</b> {review.rating}
                            </p>

                            <p>
                                <b>Comment:</b> {review.comment}
                            </p>

                            <p>
                                <b>Date:</b> {review.date}
                            </p>
                        </div>
                    ))}

                    <h3>Thumbnail</h3>

                    <img
                        src={product.thumbnail}
                        alt={product.title}
                        width="200"
                    />
                </div>
            ))}
        </div>
    );
}

export default Products;
;
