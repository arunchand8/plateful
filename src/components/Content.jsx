import React, { useState, useEffect } from "react";

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

export default function Content({ search = "" }) {
  const [recipe, setRecipe] = useState([]);
  const [expand, setExpand] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getRecipe() {
      try {
        setLoading(true);
        const response = await fetch("https://dummyjson.com/recipes");
        const data = await response.json();
        setRecipe(data.recipes);
      } catch (error) {
        console.error("Error fetching recipe data:", error);
      } finally {
        setLoading(false);
      }
    }
    getRecipe();
  }, []);

  //Toggle Based on Each Card
  function toggleExpand (id) {
    setExpand((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  const filteredRecipes = (recipe || []).filter((item) => {
    if (!search) return true;
    return item.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 m-5 mx-auto">
        {loading ? (
          <div className="text-center text-lg text-gray-700 py-24">Loading data...</div>
        ) : filteredRecipes.length === 0 ? (
          <div className="text-center text-lg text-gray-700 bg-yellow-100 rounded-lg p-8">
            No item found for "{search}".
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {filteredRecipes.map((recipe) => {
              const isMatch = search && recipe.name.toLowerCase().includes(search.toLowerCase());
              return (
                <div key={recipe.id} className="p-4">
                  <div className="p-6 rounded-lg flex flex-col bg-gray-100">
                    <img
                      className="h-48 w-full object-cover object-center overflow-hidden mb-6"
                      src={recipe.image}
                      alt={recipe.name}
                    />
                    <h2 className="tracking-widest text-black text-lg font-medium title-font">
                      {highlightMatch(recipe.name, search)}
                    </h2>
                    <p className={`leading-relaxed text-sm flex-grow ${expand[recipe.id] ? "" : "line-clamp-3"}`}>
                      {recipe.instructions.join(" ")}
                    </p>
                    <button
                      className="text-indigo-500 text-xs mt-2 cursor-pointer self-end"
                      onClick={() => toggleExpand(recipe.id)}
                    >
                      {expand[recipe.id] ? "Show Less ▲" : "Show More ▼"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}