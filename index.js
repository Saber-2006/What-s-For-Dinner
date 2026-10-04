
const recipes = [
    {
        name: "Chicken Stir-Fry",
        desc: "Quick and healthy stir-fry with colorful vegetables",
        img: "img/photo-1546069901-ba9599a7e63c.jpeg",
        prep: "30 mins",
        cook: "15 mins",
        serve: "4 people",
        rating: "4.5",
        reviews: "(324 reviews)",
        difficulty: "Easy",
        origin: "Asian",

        ingredients: [
            "500g chicken breast, sliced",
            "1 cup broccoli",
            "1 red bell pepper",
            "3 tbsp soy sauce",
            "1 tbsp sesame oil"
        ],

        instructions: [
            "Mix soy sauce, oyster sauce, and sesame oil.",
            "Heat oil and cook chicken until lightly browned.",
            "Add vegetables and stir-fry for 5 minutes.",
            "Pour sauce and cook 2 more minutes."
        ]
    },

    {
        name: "Pasta Alfredo",
        desc: "Creamy Alfredo pasta with parmesan and butter",
        img: "img/photo-1585032226651-759b368d7246.jpeg",
        prep: "20 mins",
        cook: "12 mins",
        serve: "2 people",
        rating: "4.8",
        reviews: "(512 reviews)",
        difficulty: "Medium",
        origin: "Italian",

        ingredients: [
            "200g fettuccine pasta",
            "1 cup heavy cream",
            "2 tbsp butter",
            "1/2 cup parmesan cheese",
            "Salt & pepper"
        ],

        instructions: [
            "Boil pasta until al dente.",
            "Melt butter and add cream.",
            "Mix parmesan until creamy.",
            "Add pasta & mix well."
        ]
    },

    {
        name: "Beef Tacos",
        desc: "Mexican crispy tacos with seasoned beef",
        img: "img/photo-1565299585323-38d6b0865b47.jpeg",
        prep: "15 mins",
        cook: "10 mins",
        serve: "3 people",
        rating: "4.6",
        reviews: "(401 reviews)",
        difficulty: "Easy",
        origin: "Mexican",

        ingredients: [
            "300g minced beef",
            "Taco shells",
            "Taco seasoning",
            "Lettuce & tomato",
            "Cheddar cheese"
        ],

        instructions: [
            "Cook beef with taco seasoning.",
            "Fill shells with beef.",
            "Add vegetables and cheese."
        ]
    }
];

function changecontent() {
    let random = Math.floor(Math.random() * recipes.length);
    let r = recipes[random];

    document.querySelector("#mealName h2").innerText = r.name;
    document.querySelector("#mealName p").innerText = r.desc;
    document.querySelector("#mealPhoto img").src = r.img;
    document.querySelector("#pereptime").innerText = r.prep;
    document.querySelector("#CookTime").innerText = r.cook;
    document.querySelector("#serve").innerText = r.serve;
    document.querySelector("#rating").innerText = r.rating;
    document.querySelector("#noOfRev").innerText = r.reviews;

    document.querySelector("#difculty p").innerText = r.difficulty;
    document.querySelector("#orign").innerText = r.origin;

    const ingrSec = document.querySelector("#a");
    ingrSec.innerHTML = ""; 

    r.ingredients.forEach((item, i) => {
        ingrSec.innerHTML += `
            <div class="step-box">
                <div class="mainCol rounded-circle secAno mx-2">
                    <p class="mt-2">${i + 1}</p>
                </div>
                <p class="mt-1">${item}</p>
            </div>
        `;
    });
    const instSec = document.querySelector("#b");
    instSec.innerHTML = ""; 

    r.instructions.forEach((step, i) => {
        instSec.innerHTML += `
            <div class="step-box">
                <div class="mainCol rounded-3">
                    <p class="mt-2">${i + 1}</p>
                </div>
                <p>${step}</p>
            </div>
        `;
    });
}

