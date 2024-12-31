import Hheadar from "../Hheadar"
import Nav from "../Nav"
import Table from "../Table"
import Photo2 from "../Photo2";
import Footer from "../Footer"
import TitelImage from "../TitelImage";

function TablePage(){
    return(
        <>
        <Hheadar/>
        <Nav/>
        <TitelImage/>
        <Table 
        title="*The table contains 1000 calories" 
        rows={[
          { meal: "Breakfast", food: "Half a small Samra cup + two tablespoons of labneh + a small tablespoon of olive oil + a cup of fresh vegetables /A piece of brown toast + a boiled egg + two spoons of avocado + a cup of fresh vegetables/Half a small brown bag + a square of cheese the size of a matchbox + a small spoon of olive oil + a cup of fresh vegetables", insulin: "1 units" },
          { meal: "Snack 1", food: "Medium banana + half a tablespoon of peanut butter /Medium apple + 10 pistachios /1 kiwi + 6 almonds", insulin: "1 unit" },
          { meal: "Lunch", food: "10 spoons of rice (2/3 cup) + half a grilled chicken breast without the skin + two scoops of molokhiya /15 tablespoons of bulgur (a cup) + two pieces of turkey meat the size of a matchbox + two scoops of green beans /15 spoons of freekeh + half a grilled chicken breast without the skin + a cup of salad + side vegetables", insulin: "3 units" },  { meal: "Snack 2", food: "3 small dates + a cup of low-fat milk/coffee with milk (sugar-free)/Homemade shake (a cup of low-fat milk + a banana)/ A handful of berries + two-thirds of a cup of raw milk", insulin: "1 unit" },
          { meal: "Dinner", food: "3 spoons of chickpeas + cucumber and carrot sticks /Half a small cup + a square of cheese + vegetables /Half a cup of boiled beans + vegetables", insulin: "1 units" },
        ]}
      />
      <Table 
        title="*The table contains 1600 calories" 
        rows={[
          { meal: "Breakfast", food: "1 cup of milk + half a cup of oats + 1 apple./1 cup of milk + 1 crisp biscuit (without chocolate) + 1 apple./1 cup of milk + 1 slice of bread + 5 strawberries", insulin: "3 units" },
          { meal: "Snack 1", food: "A cup of corn or cob", insulin: "2 units" },
          { meal: "Lunch", food: "Grilled chicken breast + grilled vegetables (tomatoes, peppers, carrots, onions) + 3 slices of toast./3 kofta fingers + grilled vegetables (tomatoes, peppers, carrots, onions) + 3 slices of toast./ A cup of tuna fish + 3 slices of toast + vegetables", insulin: "3 units" },
          { meal: "Snack 2", food: "A handful of nuts, equivalent to 12 pieces.", insulin: "0 units" },
          { meal: "Dinner", food: "Manakish with oil and thyme, topped with small pieces of cheese + vegetables./2 tablespoons olive oil + thyme + 2 tablespoons labneh + 3 slices of toast./ Boiled egg + 2 tablespoons avocado + 3 slices of toast.", insulin: "3 units" },
        ]}
      />
         <Table 
        title="*The table contains 1800 calories" 
        rows={[
          { meal: "Breakfast", food: "1 small loaf of brown bread + 2 tablespoons avocado + 2 eggs fried with a tablespoon of olive oil + a plate of vegetables./1 small loaf of brown bread + 2 tablespoons of olive oil + thyme + 4 tablespoons of labneh + a plate of vegetables./ Half a loaf of small brown bread + 3 tablespoons of chickpeas + 1 tablespoon of olive oil + 2 cubes of cheese the size of a matchbox + a plate", insulin: "2 units" },
          { meal: "Snack 1", food: "1 cup of milk or yoghurt + 1 small banana + 10 pistachios./ 1 cup of milk or laban + 3 small dates + half a tablespoon of peanut butter./ 1 cup of milk + half a cup of pomegranate + 6 almonds or cashew nuts.", insulin: "2 units" },
          { meal: "Lunch", food: "A cup of kabsa rice or maqluba beans (7 to 8 tablespoons) + a whole chicken breast without fat + 2 cups of Arabic salad + 1 cup of yoghurt./ 1 small loaf of brown bread + a tray of potatoes (half a medium-sized potato + a whole chicken breast without fat) + 2 cups of Arabic salad + 1 cup of milk./ A cup of rice (7 to 8 tablespoons) or a loaf and a half of small brown bread + fajitas (cut whole fat-free chicken breast + mixed vegetables, peppers, corn, onions, tomatoes) + 1 cup of milk", insulin: "4 units" },
          { meal: "Snack 2", food: "Half a cup of balila (cooked chickpeas) or Qadma + 3 dates./ Half a cup of thermos + 1 small apple./Half a cup of cooked beans + 1 orange.", insulin: "2 units" },
          { meal: "Dinner", food: "1 small loaf of brown bread + 1 boiled egg + 2 tablespoons avocado + plate of vegetables./ 1 loaf of small brown bread + 2 tablespoons of labneh + 1 tablespoon of olive oil + thyme + a plate of vegetables./ 1 small loaf of brown bread + 2 cubes of cheese the size of a matchbox + 10 olives + a plate of vegetables.", insulin: "2 units" },
        ]}
        />
          <Photo2/>
          <Footer/>
          </>
      
      );
  }
  
  export default TablePage;
