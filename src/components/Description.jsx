import React from "react";
import "./Card.css";
import { useLocation } from "react-router-dom";

const process = {
  pizza: {
    pro: [
      {
        step: 1,
        description:
          "Combine flour, sugar, and salt in a large bowl. Add the yeast and mix well.",
      },
      {
        step: 2,
        description:
          "Add warm water and olive oil to the dry ingredients. Stir until dough starts to form.",
      },
      {
        step: 3,
        description:
          "Knead the dough on a floured surface for about 10 minutes until smooth.",
      },
      {
        step: 4,
        description:
          "Place the dough in a greased bowl and cover with a damp towel. Let it rise for 1-2 hours.",
      },
      {
        step: 5,
        description:
          "While the dough is rising, prepare the sauce by heating olive oil in a pan. Add minced garlic and cook for 1 minute.",
      },
      {
        step: 6,
        description:
          "Add crushed tomatoes, oregano, salt, and pepper. Simmer for 10-15 minutes.",
      },
      {
        step: 7,
        description:
          "Preheat the oven to 475°F (245°C). Once the dough has risen, punch it down and roll it out to your desired shape.",
      },
      {
        step: 8,
        description:
          "Spread the pizza sauce evenly over the dough. Top with shredded mozzarella and your favorite toppings.",
      },
      {
        step: 9,
        description:
          "Bake in the preheated oven for 12-15 minutes or until the crust is golden and cheese is bubbly.",
      },
      {
        step: 10,
        description:
          "Remove from the oven, garnish with fresh basil leaves, and slice the pizza.",
      },
    ],
    ingri: [
      "Tomato Sauce",
      "Mozzarella Cheese",
      "Cheddar Cheese",
      "Parmesan Cheese",
      "Pepperoni",
      "Sausage",
      "Mushrooms",
      "Olives",
      "Bell Peppers",
      "Onions",
      "Tomatoes",
      "Basil",
      "Garlic",
      "Pineapple",
      "Ham",
      "Bacon",
      "Chicken",
      "Anchovies",
      "Spinach",
      "Arugula",
      "Feta Cheese",
      "Ricotta Cheese",
      "Olive Oil",
      "Chili Flakes",
      "Oregano",
    ],
  },

  noodles: {
    pro: [
      {
        step: 1,
        description: "Boil water in a large pot, and add a pinch of salt.",
      },
      {
        step: 2,
        description:
          "Add noodles to the boiling water and cook according to the package instructions.",
      },
      {
        step: 3,
        description:
          "While noodles cook, prepare your sauce (e.g., tomato sauce, creamy Alfredo, etc.) by heating it in a separate pan.",
      },
      {
        step: 4,
        description:
          "Once the noodles are done, drain the water and add them to the sauce.",
      },
      {
        step: 5,
        description:
          "Toss the noodles in the sauce, ensuring they are evenly coated.",
      },
      {
        step: 6,
        description:
          "Garnish with herbs, cheese, or any additional toppings of your choice.",
      },
      {
        step: 7,
        description: "Serve hot and enjoy your delicious noodles.",
      },
    ],
    ingri: [
      "Noodles",
      "Water",
      "Salt",
      "Olive Oil",
      "Tomato Sauce",
      "Alfredo Sauce",
      "Cheese",
      "Garlic",
      "Basil",
      "Parmesan Cheese",
      "Spinach",
      "Mushrooms",
      "Chicken",
      "Bacon",
      "Olives",
      "Peppers",
      "Onions",
      "Chili Flakes",
    ],
  },

  burger: {
    pro: [
      {
        step: 1,
        description:
          "Season the ground beef with salt, pepper, and any other desired spices.",
      },
      {
        step: 2,
        description:
          "Form the ground beef into patties, making a small indentation in the center of each patty.",
      },
      {
        step: 3,
        description:
          "Preheat the grill or a skillet over medium-high heat. Grill or cook the patties for 3-4 minutes per side or until the desired doneness is achieved.",
      },
      {
        step: 4,
        description:
          "Toast the burger buns lightly on the grill or in a skillet until golden brown.",
      },
      {
        step: 5,
        description:
          "Assemble the burger by placing the cooked patty on the bottom bun. Add cheese, lettuce, tomato, onions, pickles, and any other desired toppings.",
      },
      {
        step: 6,
        description:
          "Top with the other bun, and serve with fries or any sides of your choice.",
      },
    ],
    ingri: [
      "Ground Beef",
      "Burger Buns",
      "Cheddar Cheese",
      "Lettuce",
      "Tomato",
      "Onions",
      "Pickles",
      "Ketchup",
      "Mustard",
      "Mayonnaise",
      "Bacon",
      "Avocado",
      "Salt",
      "Pepper",
      "Olive Oil",
    ],
  },

  pasta: {
    pro: [
      {
        step: 1,
        description: "Boil water in a large pot and add a pinch of salt.",
      },
      {
        step: 2,
        description:
          "Add pasta to the boiling water and cook according to the package instructions.",
      },
      {
        step: 3,
        description:
          "While pasta is cooking, heat olive oil in a pan. Add garlic and cook until fragrant.",
      },
      {
        step: 4,
        description:
          "Add your favorite sauce (e.g., marinara, Alfredo) to the pan and simmer.",
      },
      {
        step: 5,
        description:
          "Once pasta is done, drain it and add it to the sauce. Toss to coat.",
      },
      {
        step: 6,
        description:
          "Serve with grated cheese, basil, or any other desired toppings.",
      },
    ],
    ingri: [
      "Pasta",
      "Water",
      "Salt",
      "Olive Oil",
      "Garlic",
      "Tomato Sauce",
      "Alfredo Sauce",
      "Parmesan Cheese",
      "Basil",
      "Olives",
      "Chicken",
      "Mushrooms",
      "Spinach",
      "Bacon",
    ],
  },

  biryani: {
    pro: [
      {
        step: 1,
        description: "Rinse the rice and soak it for about 30 minutes.",
      },
      {
        step: 2,
        description:
          "Fry onions, garlic, ginger, and whole spices in oil until fragrant.",
      },
      {
        step: 3,
        description:
          "Add marinated meat (chicken, lamb, or beef) to the pan and cook until browned.",
      },
      {
        step: 4,
        description:
          "Layer the rice on top of the cooked meat, add saffron, and cook on low heat until done.",
      },
      {
        step: 5,
        description: "Serve with raita or a side salad.",
      },
    ],
    ingri: [
      "Basmati Rice",
      "Chicken",
      "Lamb",
      "Onions",
      "Garlic",
      "Ginger",
      "Whole Spices",
      "Yogurt",
      "Tomatoes",
      "Cilantro",
      "Mint",
      "Saffron",
      "Olive Oil",
      "Salt",
      "Pepper",
      "Raita",
    ],
  },

  fries: {
    pro: [
      {
        step: 1,
        description: "Peel and cut potatoes into thin strips.",
      },
      {
        step: 2,
        description:
          "Soak the potato strips in water for 30 minutes to remove excess starch.",
      },
      {
        step: 3,
        description: "Heat oil in a deep fryer or pot.",
      },
      {
        step: 4,
        description:
          "Fry the potatoes in batches until golden brown and crispy.",
      },
      {
        step: 5,
        description: "Drain on paper towels and season with salt.",
      },
    ],
    ingri: ["Potatoes", "Oil", "Salt", "Pepper"],
  },

  icecream: {
    pro: [
      {
        step: 1,
        description: "Mix heavy cream, whole milk, sugar, and vanilla extract.",
      },
      {
        step: 2,
        description: "Chill the mixture for a few hours in the refrigerator.",
      },
      {
        step: 3,
        description:
          "Pour the mixture into an ice cream maker and churn according to the manufacturer's instructions.",
      },
      {
        step: 4,
        description:
          "Once thickened, transfer to a container and freeze until solid.",
      },
    ],
    ingri: ["Heavy Cream", "Whole Milk", "Sugar", "Vanilla Extract"],
  },

  pancake: {
    pro: [
      {
        step: 1,
        description: "Mix flour, baking powder, sugar, and salt in a bowl.",
      },
      {
        step: 2,
        description:
          "In another bowl, whisk together eggs, milk, and melted butter.",
      },
      {
        step: 3,
        description:
          "Pour the wet ingredients into the dry ingredients and mix until just combined.",
      },
      {
        step: 4,
        description:
          "Heat a griddle or skillet over medium heat and grease with butter.",
      },
      {
        step: 5,
        description:
          "Pour batter onto the griddle and cook until bubbles form. Flip and cook until golden brown.",
      },
    ],
    ingri: [
      "Flour",
      "Baking Powder",
      "Sugar",
      "Salt",
      "Eggs",
      "Milk",
      "Butter",
    ],
  },

  waffle: {
    pro: [
      {
        step: 1,
        description: "Mix flour, sugar, baking powder, and salt in a bowl.",
      },
      {
        step: 2,
        description:
          "In another bowl, whisk together eggs, milk, and melted butter.",
      },
      {
        step: 3,
        description:
          "Pour the wet ingredients into the dry ingredients and mix until smooth.",
      },
      {
        step: 4,
        description:
          "Preheat a waffle iron and grease it with non-stick spray.",
      },
      {
        step: 5,
        description:
          "Pour batter into the waffle iron and cook until golden brown and crispy.",
      },
    ],
    ingri: [
      "Flour",
      "Sugar",
      "Baking Powder",
      "Salt",
      "Eggs",
      "Milk",
      "Butter",
    ],
  },

  samosa: {
    pro: [
      {
        step: 1,
        description:
          "Prepare the filling by cooking potatoes, peas, onions, and spices.",
      },
      {
        step: 2,
        description: "Roll out dough and cut into circles.",
      },
      {
        step: 3,
        description:
          "Fill the dough circles with the filling and fold into a triangle.",
      },
      {
        step: 4,
        description: "Fry the samosas until golden brown and crispy.",
      },
    ],
    ingri: [
      "Potatoes",
      "Peas",
      "Onions",
      "Ginger",
      "Garlic",
      "Cumin",
      "Coriander",
      "Chili Powder",
      "Salt",
      "Samosa Wrappers",
      "Oil",
    ],
  },

  wrap: {
    pro: [
      {
        step: 1,
        description: "Warm flatbread or tortillas.",
      },
      {
        step: 2,
        description:
          "Add protein (chicken, beef, or tofu), vegetables, and sauces.",
      },
      {
        step: 3,
        description:
          "Roll up the flatbread, folding in the sides to create a wrap.",
      },
    ],
    ingri: [
      "Flatbread",
      "Chicken",
      "Beef",
      "Tofu",
      "Lettuce",
      "Tomatoes",
      "Cucumber",
      "Hummus",
      "Tahini",
      "Hot Sauce",
    ],
  },

  tacos: {
    pro: [
      {
        step: 1,
        description: "Warm taco shells or tortillas.",
      },
      {
        step: 2,
        description:
          "Prepare fillings like seasoned ground beef, chicken, or beans.",
      },
      {
        step: 3,
        description: "Top with lettuce, cheese, tomatoes, and salsa.",
      },
    ],
    ingri: [
      "Taco Shells",
      "Ground Beef",
      "Chicken",
      "Beans",
      "Lettuce",
      "Cheese",
      "Tomatoes",
      "Salsa",
      "Sour Cream",
    ],
  },

  smoothie: {
    pro: [
      {
        step: 1,
        description:
          "Blend your choice of fruits (e.g., berries, bananas, mango).",
      },
      {
        step: 2,
        description: "Add yogurt, milk, or a juice base.",
      },
      {
        step: 3,
        description: "Blend until smooth and serve immediately.",
      },
    ],
    ingri: [
      "Berries",
      "Bananas",
      "Mango",
      "Yogurt",
      "Milk",
      "Orange Juice",
      "Honey",
    ],
  },

  salad: {
    pro: [
      {
        step: 1,
        description:
          "Chop vegetables like lettuce, tomatoes, cucumbers, and onions.",
      },
      {
        step: 2,
        description:
          "Prepare a dressing with olive oil, lemon juice, salt, and pepper.",
      },
      {
        step: 3,
        description: "Toss the veggies and dressing together.",
      },
      {
        step: 4,
        description: "Add toppings like nuts, cheese, or avocado if desired.",
      },
    ],
    ingri: [
      "Lettuce",
      "Tomatoes",
      "Cucumbers",
      "Onions",
      "Olive Oil",
      "Lemon Juice",
      "Salt",
      "Pepper",
      "Nuts",
      "Cheese",
      "Avocado",
    ],
  },

  curry: {
    pro: [
      {
        step: 1,
        description:
          "Heat oil in a pot and cook onions, garlic, and ginger until fragrant.",
      },
      {
        step: 2,
        description:
          "Add spices like cumin, coriander, turmeric, and garam masala.",
      },
      {
        step: 3,
        description: "Add meat or vegetables and cook until tender.",
      },
      {
        step: 4,
        description:
          "Add tomatoes and coconut milk or yogurt to form the curry sauce.",
      },
      {
        step: 5,
        description: "Simmer for 20 minutes and serve with rice or bread.",
      },
    ],
    ingri: [
      "Onions",
      "Garlic",
      "Ginger",
      "Cumin",
      "Coriander",
      "Turmeric",
      "Garam Masala",
      "Chicken",
      "Vegetables",
      "Tomatoes",
      "Coconut Milk",
      "Yogurt",
    ],
  },

  dosa: {
    pro: [
      {
        step: 1,
        description: "Soak rice and urad dal for several hours.",
      },
      {
        step: 2,
        description: "Grind the soaked ingredients into a smooth batter.",
      },
      {
        step: 3,
        description: "Ferment the batter overnight.",
      },
      {
        step: 4,
        description:
          "Heat a non-stick pan and pour a ladle of batter, spreading it into a thin pancake.",
      },
      {
        step: 5,
        description: "Cook until crispy and serve with chutney.",
      },
    ],
    ingri: ["Rice", "Urad Dal", "Water", "Salt", "Oil", "Chutney"],
  },

  idli: {
    pro: [
      {
        step: 1,
        description: "Soak rice and urad dal for several hours.",
      },
      {
        step: 2,
        description: "Grind into a smooth batter and let it ferment.",
      },
      {
        step: 3,
        description:
          "Pour the batter into idli molds and steam for 10-15 minutes.",
      },
    ],
    ingri: ["Rice", "Urad Dal", "Water", "Salt"],
  },

  cake: {
    pro: [
      {
        step: 1,
        description: "Preheat the oven and grease a cake pan.",
      },
      {
        step: 2,
        description: "Mix flour, sugar, and baking powder.",
      },
      {
        step: 3,
        description: "Add eggs, milk, and butter, and mix until smooth.",
      },
      {
        step: 4,
        description: "Pour the batter into the pan and bake for 30-35 minutes.",
      },
      {
        step: 5,
        description: "Allow to cool and frost with your choice of icing.",
      },
    ],
    ingri: [
      "Flour",
      "Sugar",
      "Baking Powder",
      "Eggs",
      "Milk",
      "Butter",
      "Icing",
    ],
  },

  coffee: {
    pro: [
      {
        step: 1,
        description: "Boil water and prepare coffee grounds or espresso.",
      },
      {
        step: 2,
        description:
          "Brew the coffee using a coffee maker, French press, or espresso machine.",
      },
      {
        step: 3,
        description: "Serve with milk, sugar, or any desired flavorings.",
      },
    ],
    ingri: ["Coffee Grounds", "Water", "Milk", "Sugar", "Flavorings"],
  },

  tea: {
    pro: [
      {
        step: 1,
        description: "Boil water in a kettle.",
      },
      {
        step: 2,
        description: "Place tea leaves or a tea bag into a cup.",
      },
      {
        step: 3,
        description: "Pour hot water over the tea and steep for 3-5 minutes.",
      },
      {
        step: 4,
        description: "Serve with milk, honey, or lemon.",
      },
    ],
    ingri: ["Tea Leaves", "Water", "Milk", "Honey", "Lemon"],
  },
};

export default function Description() {
  const location = useLocation();
  const { url, name } = location.state || {};

  const names = name.toLowerCase();
  console.log(names);
  return (
    <div className="process">
      <div className="image" style={{ backgroundImage: `url(${url})` }}></div>
      <h1>Ingridients</h1>
      <div className="ing">
        <ul>
          {process[names].ingri.map((x, index) => {
            return <li key={index}>{x}</li>;
          })}
        </ul>
      </div>
      <h1>Process</h1>
      <div className="proc">
        {process[names].pro.map((x) => {
          return (
            <div className="details">
              step{x.step}:{x.description}
            </div>
          );
        })}
      </div>
    </div>
  );
}
