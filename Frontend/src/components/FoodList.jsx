import { useEffect, useState } from "react";
import { API } from "../api";

export default function FoodList() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    API.get("/food").then(res => setFoods(res.data));
  }, []);

  return foods.map(f => (
    <div key={f._id}>
      <h3>{f.foodName} - {f.userName}</h3>
      <img src={`http://localhost:5000/uploads/${f.image}`} width="150"/>
      <p>{f.mealType} | {new Date(f.date).toDateString()}</p>
    </div>
  ));
}
