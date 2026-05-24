import React, { useState, useEffect } from "react";

export default function Content() {
  const [recipe, setRecipe] = useState([]);
  const [expand, setExpand] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getRecipe() {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/recipes");
      const data = await response.json();
      setRecipe(data.recipes);
      setLoading(false);
      // console.log(data);
    }
    getRecipe();
  }, []);

  //Toggle Based on Each Card
  function toggleExpand (id) {
    setExpand((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 m-5 mx-auto">
        {loading ? (
          <div className="text-center text-lg text-gray-700 py-24">Loading data...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {recipe.map((recipe) => {
              return (
                <div key={recipe.id} className="p-4">
                  <div className="bg-gray-100 p-6 rounded-lg flex flex-col">
                    <img
                      className="h-48 w-full object-cover object-center overflow-hidden mb-6"
                      src={recipe.image}
                      alt={recipe.name}
                    />
                    <h2 className="tracking-widest text-black text-lg font-medium title-font">
                      {recipe.name}
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