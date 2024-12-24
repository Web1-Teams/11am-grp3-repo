import Challengeee from './components/Challengeee';
import Table from './components/Table';
function App() {
  return (
    
    <div>
      <Table title="*The table contains 1000 calories"
      Breakfast="Half a small Samra cup + two tablespoons of labneh + a small tablespoon of olive oil + a cup of fresh vegetables /A piece of brown toast + a boiled egg + two spoons of avocado + a cup of fresh vegetables/Half a small brown bag + a square of cheese the size of a matchbox + a small spoon of olive oil + a cup of fresh vegetables"
      Insulin0="1"
      Snack1="Medium banana + half a tablespoon of peanut butter /Medium apple + 10 pistachios /1 kiwi + 6 almonds"
      Insulin1="1"
      Lunch="10 spoons of rice (2/3 cup) + half a grilled chicken breast without the skin + two scoops of molokhiya /15 tablespoons of bulgur (a cup) + two pieces of turkey meat the size of a matchbox + two scoops of green beans /15 spoons of freekeh + half a grilled chicken breast without the skin + a cup of salad + side vegetables"
      Insulin2="3"
      Snack2="3 small dates + a cup of low-fat milk/coffee with milk (sugar-free)/Homemade shake (a cup of low-fat milk + a banana)/ A handful of berries + two-thirds of a cup of raw milk"
      Insulin3="1 "
      Dinner="3 spoons of chickpeas + cucumber and carrot sticks /Half a small cup + a square of cheese + vegetables /Half a cup of boiled beans + vegetables"
      Insulin4="1"
      
      />
      <Table title="*The table contains 1600 calories"
      Breakfast="1 cup of milk + half a cup of oats + 1 apple./1 cup of milk + 1 crisp biscuit (without chocolate) + 1 apple./1 cup of milk + 1 slice of bread + 5 strawberries "
      Insulin0="3"
      Snack1="A cup of corn or cob"
      Insulin1="2"
      Lunch="Grilled chicken breast + grilled vegetables (tomatoes, peppers, carrots, onions) + 3 slices of toast./3 kofta fingers + grilled vegetables (tomatoes, peppers, carrots, onions) + 3 slices of toast./ A cup of tuna fish + 3 slices of toast + vegetables"
      Insulin2="3"
      Snack2="A handful of nuts, equivalent to 12 pieces."
      Insulin3="0"
      Dinner="Manakish with oil and thyme, topped with small pieces of cheese + vegetables./2 tablespoons olive oil + thyme + 2 tablespoons labneh + 3 slices of toast./ Boiled egg + 2 tablespoons avocado + 3 slices of toast."
      Insulin4="3"

      />
      <Table title="*The table contains 1800 calories"
          Breakfast="1 small loaf of brown bread + 2 tablespoons avocado + 2 eggs fried with a tablespoon of olive oil + a plate of vegetables./1 small loaf of brown bread + 2 tablespoons of olive oil + thyme + 4 tablespoons of labneh + a plate of vegetables./ Half a loaf of small brown bread + 3 tablespoons of chickpeas + 1 tablespoon of olive oil + 2 cubes of cheese the size of a matchbox + a plate "
          Insulin0="2"
          Snack1="1 cup of milk or yoghurt + 1 small banana + 10 pistachios./ 1 cup of milk or laban + 3 small dates + half a tablespoon of peanut butter./ 1 cup of milk + half a cup of pomegranate + 6 almonds or cashew nuts."
          Insulin1="2"
          Lunch="A cup of kabsa rice or maqluba beans (7 to 8 tablespoons) + a whole chicken breast without fat + 2 cups of Arabic salad + 1 cup of yoghurt./ 1 small loaf of brown bread + a tray of potatoes (half a medium-sized potato + a whole chicken breast without fat) + 2 cups of Arabic salad + 1 cup of milk./ A cup of rice (7 to 8 tablespoons) or a loaf and a half of small brown bread + fajitas (cut whole fat-free chicken breast + mixed vegetables, peppers, corn, onions, tomatoes) + 1 cup of milk"
          Insulin2="4"
          Snack2="Half a cup of balila (cooked chickpeas) or Qadma + 3 dates./ Half a cup of thermos + 1 small apple./Half a cup of cooked beans + 1 orange."
          Insulin3="2"
          Dinner="1 small loaf of brown bread + 1 boiled egg + 2 tablespoons avocado + plate of vegetables./ 1 loaf of small brown bread + 2 tablespoons of labneh + 1 tablespoon of olive oil + thyme + a plate of vegetables./ 1 small loaf of brown bread + 2 cubes of cheese the size of a matchbox + 10 olives + a plate of vegetables."
          Insulin4="2"
      />

      <div className="container">
    <Challengeee cha="Food Challenge"/>
    <Challengeee cha="Snack Challenge"/>
    </div>
    
    </div>
  );
}


export default App;
