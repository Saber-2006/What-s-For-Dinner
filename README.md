# 🍽️ What's For Dinner

**What's For Dinner** is a responsive recipe discovery web application designed to provide quick meal inspiration through an interactive and easy-to-use interface.

Users can explore recipe information including preparation time, cooking time, servings, ratings, difficulty, origin, ingredients, instructions, nutrition information, and chef's tips.

The application also allows users to instantly generate another recipe using the **Try Another Recipe** feature.

## ✨ Features

* 🍴 Interactive recipe display
* 🔄 Random recipe generation
* 🖼️ Dynamic recipe images
* ⏱️ Preparation and cooking times
* 👥 Serving information
* ⭐ Recipe ratings and review counts
* 🌎 Recipe origin and difficulty
* 🥕 Dynamic ingredient lists
* 📝 Dynamic cooking instructions
* 🥗 Nutrition information
* 👨‍🍳 Chef's tips
* 📱 Responsive user interface
* 🎨 Bootstrap-based layout and styling
* ⚡ Dynamic DOM manipulation with JavaScript

## 🛠️ Technologies Used

* **HTML5** – Page structure and content
* **CSS3** – Custom styling and responsive design
* **Bootstrap 5** – Layout and UI components
* **JavaScript** – Dynamic content, DOM manipulation, event handling, and random recipe selection
* **Font Awesome** – Icons

## 🧠 JavaScript Concepts

This project was built to practice and demonstrate several JavaScript concepts:

* Arrays of objects
* Functions
* Random number generation
* DOM selection and manipulation
* Event handling
* Template literals
* `forEach()` loops
* Dynamic HTML generation
* Updating images and text dynamically

The recipe data is organized into JavaScript objects, allowing the interface to update dynamically without duplicating the HTML structure for every recipe.

## 📂 Project Structure

```text
whats-for-dinner/
│
├── index.html
├── style.css
├── index.js
├── README.md
│
└── img/
    ├── recipe images
    └── avatar images
```

## ⚙️ How It Works

The application stores recipe information in a JavaScript array.

When the user clicks **Try Another Recipe**, the application:

1. Generates a random number.
2. Selects a recipe from the recipe array.
3. Updates the recipe name and description.
4. Changes the recipe image.
5. Updates preparation time, cooking time, and servings.
6. Updates rating, reviews, difficulty, and origin.
7. Dynamically generates the ingredient list.
8. Dynamically generates the cooking instructions.

This allows multiple recipes to be displayed using the same interface.

## 🚀 Getting Started

### Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/whats-for-dinner.git
```

### Open the project

```bash
cd whats-for-dinner
```

Open `index.html` in your browser.

For development, **Visual Studio Code + Live Server** is recommended.

## 🎯 Project Goals

This project was created to practice building an interactive front-end application using JavaScript.

The main goals were to:

* Practice manipulating the DOM
* Work with structured JavaScript data
* Generate content dynamically
* Handle user interactions
* Build a responsive interface
* Combine JavaScript with Bootstrap and custom CSS

## 🔮 Future Improvements

Possible improvements include:

* 🔍 Search recipes by name
* 🏷️ Filter recipes by difficulty or origin
* ❤️ Save favorite recipes
* 💾 Store favorites using `localStorage`
* 📊 Make nutrition information dynamic for each recipe
* 👨‍🍳 Make chef's tips dynamic for each recipe
* 🌐 Load recipes from an external API
* 🌓 Add dark mode
* 🔗 Add recipe sharing functionality

## 📸 Preview

*Add screenshots or a GIF of the application here.*

## 👨‍💻 Author

**Mostafa Mohamed Saber**

This project was created as part of my front-end development portfolio.

---

⭐ Feel free to explore the repository and check out my other projects.
