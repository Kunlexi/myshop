import { useState } from "react";
import Card from "../../card/Card";
import styles from "./AddProduct.module.scss";

const categories = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Electronics" },
  { id: 3, name: "Fashion" },
  { id: 4, name: "Phone" },
];

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    brand: "",
    desc: "",
  });

  const handleInputeChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };
  const handleImageChange = (e) => {};

  const addProduct = (e) => {
    e.preventDefault();
    console.log(product);
  };

  return (
    <div className={styles.product}>
      <h1>Add New Product</h1>
      <Card cardClass={styles.card}>
        <form onSubmit={addProduct}>
          <label>Product Name:</label>

          <input
            type="text"
            placeholder="Product name"
            required
            name="name"
            value={product.name}
            onChange={(e) => handleInputeChange(e)}
          />
          <label>Product Image:</label>
          <Card cardClass={styles.group}>
            <div className={styles.progress}>
              <div className={styles["progress-bar"]} style={{ width: "50%" }}>
                Uploading 50%
              </div>
            </div>
            <input
              type="file"
              accept="image/*"
              placeholder="Product Image"
              name="image"
              onChange={(e) => handleImageChange(e)}
            />
            <input
              type="text"
              // required
              placeholder="Image URL"
              name="imageURL"
              value={product.imageURL}
              disabled
            />
          </Card>
          <label>Product price:</label>

          <input
            type="number"
            placeholder="Product price"
            required
            name="price"
            value={product.price}
            onChange={(e) => handleInputeChange(e)}
          />
          <label>Product category</label>
          <select
            required
            name="category"
            value={product.category}
            onChange={(e) => handleInputeChange}
          >
            <option value="" disabled>
              -- choose product category --
            </option>
            {categories.map((cat) => {
              return (
                <option key={cat.id} value={cat.name}>
                  {cat.name}
                </option>
              );
            })}
          </select>

          <label>Product Company/Brand:</label>

          <input
            type="text"
            placeholder="Product brand"
            required
            name="brand"
            value={product.brand}
            onChange={(e) => handleInputeChange(e)}
          />

          <label>Product Description:</label>
          <textarea
            name="desc"
            required
            value={product.desc}
            onChange={(e) => handleInputeChange(e)}
            cols="30"
            rows="10"
          ></textarea>
          <button className="--btn --btn-primary">Save Product</button>
        </form>
      </Card>
    </div>
  );
};

export default AddProduct;
