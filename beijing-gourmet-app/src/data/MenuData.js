const menuData = () => {
    return {
        "Combination Plates": {
            description: "Served with Appetizer (Egg Roll) and Base (Pork Fried Rice or Chicken Chow Mein)",
            items: [
                {name: "Sweet & Sour Pork", price: 10.95, spicy: false},
                {name: "Cashew Chicken", price: 10.95, spicy: false},
                {name: "Beef Broccoli", price: 10.95, spicy: false},
                {name: "Lemon Chicken", price: 10.95, spicy: false},
                {name: "Chicken with Vegetables", price: 10.95, spicy: false},
                {name: "Mongolian Beef", price: 10.95, spicy: true},
                {name: "B.B.Q. Pork with Vegetables", price: 10.95, spicy: false},
                {name: "Sweet & Sour Chickenn", price: 10.95, spicy: false},
                {name: "Kung Pao Chicken", price: 10.95, spicy: true},
                {name: "Curry Chicken", price: 10.95, spicy: true},
                {name: "General Tao's Chicken", price: 10.95, spicy: true},
                {name: "Orange Chicken", price: 10.95, spicy: true},
                {name: "Sesame Chicken", price: 10.95, spicy: false},
                {name: "Mandarin Chicken", price: 10.95, spicy: true},
                {name: "Kung Pao Shrimp", price: 10.95, spicy: true},
                {name: "Sesame Beef", price: 11.95, spicy: false},
                {name: "Orange Beef", price: 11.95, spicy: true}
            ]
        },
        "Family Style Dinners": {
            description: "Service for 2 or more persons",
            items: [
                {
                    name: "Dinner A", 
                    price: 14.95,
                    base: [
                        {name: "Soup of The Day", spicy: false},
                        {name: "Egg Roll", spicy: false},
                        {name: "Fried Wonton", spicy: false},
                        {name: "Cashew Chicken", spicy: false},
                        {name: "Sweet & Sour Pork", spicy: false},
                        {name: "Pork Fried Rice", spicy: false},
                    ],
                    threePeople: [
                        {name: "Beef with Broccoli", spicy: false},
                    ],
                    fourPeople: [
                        {name: "Shrimp with Mixed Vegetable", spicy: false},
                    ]
                },
                {
                    name: "Dinner B", 
                    price: 15.95,
                    base: [
                        {name: "Hot & Sour Soup", spicy: true},
                        {name: "Egg Roll", spicy: false},
                        {name: "Fried Prawn", spicy: false},
                        {name: "Mongolian Beef", spicy: true},
                        {name: "Lemon Chicken", spicy: false},
                        {name: "Chicken Chow mein", spicy: false},
                    ],
                    threePeople: [
                        {name: "Shrimp with Vegetable", spicy: false},
                    ],
                    fourPeople: [
                        {name: "Orange Chicken", spicy: true},
                    ]
                },
                {
                    name: "Dinner C", 
                    price: 16.95,
                    base: [
                        {name: "Wor Wonton Soup", spicy: false},
                        {name: "Egg Roll", spicy: false},
                        {name: "Fried Wonton", spicy: false},
                        {name: "Fried Prawn", spicy: false},
                        {name: "Shrimp with Snow Peas", spicy: false},
                        {name: "Happy Family", spicy: false},
                        {name: "House Special Fried Rice", spicy: false},
                    ],
                    threePeople: [
                        {name: "General Tao's Chicken", spicy: true},
                    ],
                    fourPeople: [
                        {name: "Crispy Walnut Shrimp", spicy: false},
                    ]
                },
            ]
        },
        "Chef's Specials": {
            items: [
                {name: "Crispy Walnut Shrimp", price: 15.95, spicy: false, description: "Fresh Sauteed Shrimp in our Chef's Special White Sauce"},
                {name: "Seafood Mix Chinese Vegetable", price: 13.95, spicy: false, description: "Seafood with Fresh Vegetables, in the Chef's Special Sauce"},
                {name: "Orange Chicken", price: 13.95, spicy: true, description: "Deep Fried Chicken with House Delicious Orange Sauce"},
                {name: "Sesame Chicken", price: 13.95, spicy: false, description: "Deep Fried Chicken With Our Special Brown Sesame Sauce"},
                {name: "General Tao's Chicken", price: 13.95, spicy: true, description: "Deep Fried Chicken with our Special Tangy Sauce"},
                {name: "Mandarin Chicken", price: 13.95, spicy: true, description: null},
                {name: "Happy Family", price: 13.95, spicy: false, description: "Shrimp, Scallop, Beef, Chicken, and B.B.Q. Pork"},
                {name: "Combination Hot Plate", price: 13.95, spicy: false, description: "Shrimp, Beef, Scallop, and Chicken With fresh Chinese Vegetable in Delicious Chef's Spcial Sauce in Hot Plate"},
                {name: "Kung Pao Three Gem", price: 13.95, spicy: true, description: "Shrimp, Beef, and Chicken with Peanuts in Hot and Spicy Brown Sauce"},
                {name: "Orange Beef", price: 13.95, spicy: true, description: "Deep Fried Beef with House Delicious Orange Sauce"},
                {name: "Sesame Beef", price: 13.95, spicy: false, description: "Deep Fried Beef with our Special Brown Sesame Sauce"},
                {name: "Salt & Pepper Shrimp (No Head and No Shell)", price: 15.95, spicy: true, description: null}
            ]
        },
        "Soup": {
            items: [
                {name: "Won Ton Soup", price: 8.95, spicy: false, description: null},
                {name: "Wor Won Ton Soup", price: 10.95, spicy: false, description: null},
                {name: "Chicken Egg Flower Soup", price: 8.95, spicy: false, description: null},
                {name: "Hot & Sour Soup", price: 8.95, spicy: true, description: null},
                {name: "Sizzling Rice Soup", price: 10.95, spicy: false, description: null},
                {name: "Seafood Deluxe Soup", price: 10.95, spicy: false, description: null},
                {name: "Vegetable with Tofu Soup", price: 8.95, spicy: false, description: null},
            ]
        },
        "Appetizers": {
            items: [
                {name: "Lettuce Wrap", price: 10.95, spicy: false, description: "Diced Chicken and Water Chestnut served with Peanuts"},
                {name: "Egg Rolls (4)", price: 7.95, spicy: false, description: null},
                {name: "Crab Rangoons (8)", price: 7.95, spicy: false, description: null},
                {name: "Fried Prawns (6)", price: 9.95, spicy: false, description: null},
                {name: "Potstickers (6)", price: 9.95, spicy: false, description: null},
                {name: "Paper Wrapped Chicken (8)", price: 9.95, spicy: false, description: null},
                {name: "B.B.Q. Pork", price: 9.95, spicy: false, description: null},
                {name: "Chicken Salad", price: 9.95, spicy: false, description: null},
                {name: "Combination Appetizer", price: 11.95, spicy: false, description: "2 Egg Rolls, 2 Pot Stickers, 2 Crab Rangoons, 2 Fried Prawns, and B.B.Q. Pork"},
            ]
        },
        "Seafood": {
            items: [
                {name: "Shrimp with Snow Peas", price: 13.95, spicy: false, description: null},
                {name: "Shrimp with Broccoli", price: 13.95, spicy: false, description: null},
                {name: "Shrimp with Black Bean Sauce", price: 13.95, spicy: false, description: null},
                {name: "Shrimp with Mix Chinese Vegetable", price: 13.95, spicy: false, description: null},
                {name: "Shrimp with Lobster Sauce", price: 13.95, spicy: false, description: null},
                {name: "Cashew Nut Shrimp", price: 13.95, spicy: false, description: null},
                {name: "Kung Pao Shrimp", price: 13.95, spicy: true, description: null},
                {name: "String Bean Shrimp", price: 13.95, spicy: false, description: null},
                {name: "Curry Shrimp", price: 13.95, spicy: true, description: null},
                {name: "Garlic Shrimp", price: 13.95, spicy: false, description: null},
            ]
        },
        "Beef": {
            items: [
                {name: "Beef with Snow Peas", price: 13.95, spicy: false, description: null},
                {name: "Beef with Broccoli", price: 13.95, spicy: false, description: null},
                {name: "Beef with Mix Chinese Vegetable", price: 13.95, spicy: false, description: null},
                {name: "Beef with Mix Oyster Sauce", price: 13.95, spicy: false, description: null},
                {name: "Tomato Beef", price: 13.95, spicy: false, description: null},
                {name: "Mongolian Beef", price: 13.95, spicy: true, description: null},
                {name: "Hunan Beef", price: 13.95, spicy: true, description: null},
                {name: "Kung Pao Beef", price: 13.95, spicy: true, description: null},
                {name: "String Bean Beef", price: 13.95, spicy: false, description: null},
            ]
        },
        "Szechuan": {
            items: [
                {name: "Szechuan Shrimp", price: 13.50, spicy: true, description: null},
                {name: "Szechuan Chicken", price: 13.50, spicy: true, description: null},
                {name: "Szechuan Beef", price: 13.50, spicy: true, description: null},
            ]
        },
        "Egg Foo Young": {
            items: [
                {name: "Pork Egg Foo Young", price: 12.95, spicy: false, description: null},
                {name: "Chicken Egg Foo Young", price: 13.95, spicy: false, description: null},
                {name: "Shrimp Egg Foo Young", price: 14.95, spicy: false, description: null},
                {name: "Vegetable Egg Foo Young", price: 11.95, spicy: false, description: null},
            ]
        },
        "Vegetables": {
            items: [
                {name: "Vegetable Deluxe", price: 9.95, spicy: false, description: null},
                {name: "Broccoli with Oyster Sauce", price: 9.95, spicy: false, description: null},
                {name: "Braised Tofu", price: 9.95, spicy: false, description: null},
            ]
        },
        "Mu-Shu": {
            description: "Comes with 4 Pancakes",
            items: [
                {name: "Mu Shu Chicken", price: 12.95, spicy: false, description: null},
                {name: "Mu Shu Pork", price: 11.95, spicy: false, description: null},
                {name: "Mu Shu Vegetable", price: 10.95, spicy: false, description: null},
            ]
        },
        "Pork": {
            items: [
                {name: "Sweet & Sour Pork", price: 12.95, spicy: false, description: null},
                {name: "B.B.Q. Pork with Snow Peas", price: 12.95, spicy: false, description: null},
                {name: "B.B.Q. Pork with Vegetable", price: 12.95, spicy: false, description: null},
            ]
        },
        "Chicken": {
            items: [
                {name: "Chicken with Snow Peas", price: 12.95, spicy: false, description: null},
                {name: "Chicken with Broccoli", price: 12.95, spicy: false, description: null},
                {name: "Chicken with Mixed Chinese Vegetable", price: 12.95, spicy: false, description: null},
                {name: "Chicken with Black Bean Sauce", price: 12.95, spicy: false, description: null},
                {name: "Chicken with Cashew", price: 12.95, spicy: false, description: null},
                {name: "Sweet and Sour Chicken", price: 12.95, spicy: false, description: null},
                {name: "Lemon Chicken", price: 12.95, spicy: false, description: null},
                {name: "Curry Chicken", price: 12.95, spicy: true, description: null},
                {name: "Kung Pao Chicken", price: 12.95, spicy: true, description: null},
                {name: "Garlic Chicken", price: 12.95, spicy: false, description: null},
                {name: "String Bean Chicken", price: 12.95, spicy: false, description: null},
            ]
        },
        "Chow Mein": {
            items: [
                {name: "House Chow Mein", price: 10.95, spicy: false, description: null},
                {name: "Shrimp Chow Mein", price: 10.95, spicy: false, description: null},
                {name: "Chicken Chow Mein", price: 10.50, spicy: false, description: null},
                {name: "Beef Chow Mein", price: 10.50, spicy: false, description: null},
                {name: "Pork Chow Mein", price: 10.50, spicy: false, description: null},
                {name: "Tomato Beef Chow Mein", price: 10.50, spicy: false, description: null},
                {name: "Vegetable Chow Mein", price: 9.95, spicy: false, description: null},
            ]
        },
        "Chow Fun": {
            items: [
                {name: "House Chow Fun", price: 10.95, spicy: false, description: null},
                {name: "Shrimp Chow Fun", price: 10.95, spicy: false, description: null},
                {name: "Beef Chow Fun", price: 10.50, spicy: false, description: null},
                {name: "Chicken Chow Fun", price: 10.50, spicy: false, description: null},
                {name: "Pork Chow Fun", price: 10.50, spicy: false, description: null},
                {name: "Vegetable Chow Fun", price: 9.95, spicy: false, description: null},
            ]
        },
        "Fried Rice": {
            items: [
                {name: "House Fried Rice", price: 10.95, spicy: false, description: null},
                {name: "Shrimp Fried Rice", price: 10.95, spicy: false, description: null},
                {name: "Chicken Fried Rice", price: 10.50, spicy: false, description: null},
                {name: "Beef Fried Rice", price: 10.50, spicy: false, description: null},
                {name: "Pork Fried Rice", price: 10.50, spicy: false, description: null},
                {name: "Vegetable Fried Rice", price: 9.95, spicy: false, description: null},
                {name: "Steam Rice", price: 1.50, spicy: false, description: null},
            ]
        },
        "Lunch Specials": {
            description: "Monday to Friday: 11 AM - 2:30 PM\nServed with Appetizer of the day and Base (Chow Mein, Fried Rice, or Steamed Rice)",
            items: [
                {name: "Sesame Chicken", price: 9.95, spicy: false, description: null},
                {name: "General Tao's Chicken", price: 9.95, spicy: true, description: null},
                {name: "Chicken with Mixed Vegetable", price: 9.95, spicy: false, description: null},
                {name: "Chicken with Snow Peas", price: 9.95, spicy: false, description: null},
                {name: "Cashew Nut Chicken", price: 9.95, spicy: false, description: null},
                {name: "Sweet and Sour Chicken", price: 9.95, spicy: false, description: null},
                {name: "Kung Pao Chicken", price: 9.95, spicy: true, description: null},
                {name: "Szechuan Chicken", price: 9.95, spicy: true, description: null},
                {name: "Curry Chicken", price: 9.95, spicy: true, description: null},
                {name: "Chicken with Black Bean Sauce", price: 9.95, spicy: false, description: null},
                {name: "Lemon Chicken", price: 9.95, spicy: false, description: null},
                {name: "Orange Chicken", price: 9.95, spicy: true, description: null},
                {name: "Garlic Chicken", price: 9.95, spicy: false, description: null},
                {name: "Kung Pao Beef", price: 9.95, spicy: true, description: null},
                {name: "Mongolian Beef", price: 9.95, spicy: true, description: null},
                {name: "Beef with Broccoli", price: 9.95, spicy: false, description: null},
                {name: "Beef with Snow Peas", price: 9.95, spicy: false, description: null},
                {name: "Beef with Mixed Vegetables", price: 9.95, spicy: false, description: null},
                {name: "Hunan Beef", price: 9.95, spicy: true, description: null},
                {name: "Shrimp with Mixed Vegetables", price: 9.95, spicy: false, description: null},
                {name: "Shrimp with Snow Peas", price: 9.95, spicy: false, description: null},
                {name: "Kung Pai Shrimp", price: 9.95, spicy: true, description: null},
                {name: "Szechuan Shrimp", price: 9.95, spicy: true, description: null},
                {name: "Shrimp with Lobster Sauce", price: 9.95, spicy: false, description: null},
                {name: "Sweet and Sour Pork", price: 9.95, spicy: false, description: null},
                {name: "Sesame Beef", price: 10.50, spicy: false, description: null},
                {name: "Orange Beef", price: 10.50, spicy: true, description: null},
                {name: "Chicken with String Bean", price: 9.95, spicy: false, description: null},
                {name: "Beef with String Bean", price: 9.95, spicy: false, description: null},
                {name: "Shrimp with String Bean", price: 9.95, spicy: false, description: null},
                {name: "Curry Shrimp", price: 9.95, spicy: true, description: null},
            ]
        },
        "Beverages": {
            items: [
                {name: "Hot Tea", price: 1.50, spicy: false, description: null},
                {name: "Iced Tea", price: 1.50, spicy: false, description: null},
                {name: "Soda", price: 1.50, spicy: false, description: null},
                {name: "Domestic Beers", price: 4.50, spicy: false, description: null},
                {name: "Imported Beers", price: 5.50, spicy: false, description: null},
                {name: "Wine (1 glass)", price: 4.95, spicy: false, description: null},
            ]
        }
    }
}

export default menuData;