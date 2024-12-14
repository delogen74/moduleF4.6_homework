import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import "./CategoryPage.css";

function CategoryPage() {
  const { id } = useParams();
  const [category, setCategory] = useState(null);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/categories/${id}/`)
      .then((res) => setCategory(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!category) return <div>Загрузка...</div>;

  return (
    <div className="container">
      <h1>{category.name}</h1>
      <p>{category.description}</p>
      <h2>Рецепты</h2>
      <ul className="recipe-list">
        {category.recipes.map((recipe) => (
          <li key={recipe.id} className="recipe-item">
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </li>
        ))}
      </ul>
      <Link to="/">Назад на главную</Link>
    </div>
  );
}

export default CategoryPage;
