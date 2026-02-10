import { API } from "../api";
import { useState } from "react";

export default function AddFood() {
  const [data, setData] = useState({});
  const [image, setImage] = useState(null);

  const submit = async () => {
    const formData = new FormData();
    Object.keys(data).forEach(key =>
      formData.append(key, data[key])
    );
    formData.append("image", image);

    await API.post("/food", formData);
    alert("Food Added");
  };

  return (
    <div>
      <input placeholder="User Name" onChange={e => setData({...data, userName:e.target.value})}/>
      <input placeholder="Food Name" onChange={e => setData({...data, foodName:e.target.value})}/>
      <select onChange={e => setData({...data, mealType:e.target.value})}>
        <option>Breakfast</option>
        <option>Lunch</option>
        <option>Dinner</option>
      </select>
      <input type="date" onChange={e => setData({...data, date:e.target.value})}/>
      <input type="file" onChange={e => setImage(e.target.files[0])}/>
      <button onClick={submit}>Submit</button>
    </div>
  );
}
