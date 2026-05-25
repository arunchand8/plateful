import React, { useState, useEffect } from "react";
import Items from "../components/Items";

function escapeRegExp(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function highlightMatch(text, query) {
  if (!query) return text;
  const regex = new RegExp(`(${escapeRegExp(query)})`, "gi");
  return text.split(regex).map((part, index) =>
    regex.test(part) ? (
      <span key={index} className="bg-yellow-200 text-black">
        {part}
      </span>
    ) : (
      part
    ),
  );
}
export default function Pasta({ search }) {
  const [products, setProducts] = useState([]);
  const [expand, setExpand] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getPasta() {
      try {
      setLoading(true);
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=pasta",
      );
      const data = await response.json();
      setProducts(data.meals || []);
    } catch (error) {
      console.error("Error fetching pasta", error);      
    } finally {
      setLoading(false);
      // console.log(data);
    }
    }
    getPasta();
  }, []);

  //Toggle Based on Each Card
  function toggleExpand(id) {
    setExpand((prev) => ({ ...prev, [id]: !prev[id] }));
  }
  const filteredProducts = (products || []).filter((product) => {
    if (!search) return true;
    return product.strMeal.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
      <Items />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          {loading ? (
            <div className="text-center text-lg text-gray-700 py-24">
              Loading data...
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="text-center text-lg text-gray-700 bg-yellow-100 rounded-lg p-8">
              No item found for "{search}".
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 items-start">
              {filteredProducts.map((product) => {
                const isMatch =
                  search &&
                  product.strMeal.toLowerCase().includes(search.toLowerCase());
                return (
                  <div key={product.idMeal} className="p-4">
                    <div className="p-6 rounded-lg flex flex-col bg-gray-100">
                      <img
                        className="h-48 w-full object-cover object-center overflow-hidden mb-6"
                        src={product.strMealThumb}
                        alt={product.strMeal}
                      />
                      <h2 className="tracking-widest text-black text-lg font-medium title-font">
                        {highlightMatch(product.strMeal, search)}
                      </h2>
                      <p
                        className={`leading-relaxed text-sm flex-grow ${expand[product.idMeal] ? "" : "line-clamp-3"}`}
                      >
                        {product.strInstructions}
                      </p>
                      <div className="flex justify-between mt-4">
                        <button
                          className="text-indigo-500 text-sm mt-2 cursor-pointer self-start"
                          onClick={() => toggleExpand(product.idMeal)}
                        >
                          {expand[product.idMeal]
                            ? "Show Less ▲"
                            : "Show More ▼"}
                        </button>
                        <button className="w-fit bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium py-2 px-4 rounded-lg cursor-pointer transition-colors duration-200">
                          Order Now
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}