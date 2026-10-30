import useTable from './useTable.js'
import { supabase } from './utils/supabase'
import MealCard from './MealCard.jsx'
import './App.css'
import '@picocss/pico'

function App() {
   const { data, error, reload } = useTable("meals")
   
   const addMeal = async (event) => {
      event.preventDefault()
      const form = event.target
      const meal = {
        meal_name: form.mealName.value,
        guest_name: form.guestName.value,
        serves: Number(form.serves.value),

      }

      const result = await supabase.from("meals").insert(meal)
      if (result.error) {
        console.log(result.error.message)
        return
      } 

      form.reset()
      reload()
    }  


    return (

      <div className = "container">

        <h1>Potluck</h1>
        
        <form onSubmit={addMeal}>
          <input name="mealName" placeholder="Dish" />
          <input name="guestName" placeholder="Your name" />
          <input name="serves" type="number" placeholder="Serves" />
          <button>Add</button>
        </form>
        <p>{error}</p>
        
        {data.map((meal) => <MealCard key={meal.id} meal={meal} />)}
        
      </div> 

    )
}
          
                
   export default App         