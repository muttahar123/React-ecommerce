import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import CategoryChip from "../components/CategoryChip";

function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [chosenCategory, setChosenCategory] = useState("All");
  const [sortOption, setSortOption] = useState('default');

  useEffect(() => {
    console.log("Use effect Call Hogya");
    const url =
      chosenCategory === "All"
        ? "https://dummyjson.com/products"
        : `https://dummyjson.com/products/category/${chosenCategory}`;
    axios
      .get(url)
      .then((res) => {
        let productsData = res.data.products;

        // Sort products based on sortOption
        if (sortOption === 'price-asc') {
          productsData = productsData.sort((a, b) => a.price - b.price);
        } else if (sortOption === 'price-desc') {
          productsData = productsData.sort((a, b) => b.price - a.price);
        } else if (sortOption === 'rating') {
          productsData = productsData.sort((a, b) => b.rating - a.rating);
        }

        setProducts(productsData);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [chosenCategory, sortOption]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((res) => {
        setCategories(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mx-auto">
      {loading ? (
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <div>
          <div className="flex gap-3 flex-wrap mb-4">
            <CategoryChip
              onClick={() => setChosenCategory("All")}
              isChosen={chosenCategory === "All"}
              category={{
                slug: "All",
                name: "All",
              }}
            />
            {categories.map((category) => (
              <CategoryChip
                onClick={() => setChosenCategory(category.slug)}
                isChosen={category.slug === chosenCategory}
                category={category}
                key={category.slug}
              />
            ))}
          </div>

          <div className="mb-4">
            <label htmlFor="sort" className="mr-2">Sort by:</label>
            <select
              id="sort"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="p-2 border border-gray-300"
            >
              <option value="default">Default</option>
              <option value="price-asc">Price (Low to High)</option>
              <option value="price-desc">Price (High to Low)</option>
              <option value="rating">Rating</option>
            </select>
          </div>

          <div className="flex flex-wrap -m-4 my-4">
            {products.map((item) => (
              <ProductCard item={item} key={item.id} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;
