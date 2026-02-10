import AddFood from "./components/AppFood";
import FoodList from "./components/FoodList";

function App() {
  return (
    <div>
      <h2>Nutrition Tracker</h2>
      <AddFood />
      <FoodList />
    </div>
  );
}

export default App;
