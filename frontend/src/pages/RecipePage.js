import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import "./RecipePage.css";

function RecipePage() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/recipes/${id}/`)
      .then((res) => setRecipe(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!recipe) return <div>Загрузка...</div>;

  return (
    <div className="container">
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <h3>Ингредиенты:</h3>
      <pre>{recipe.ingredients}</pre>
      <h3>Инструкции:</h3>
      <pre>{recipe.instructions}</pre>
      <Link to="/">Назад на главную</Link>
    </div>
  );
}

export default RecipePage;
