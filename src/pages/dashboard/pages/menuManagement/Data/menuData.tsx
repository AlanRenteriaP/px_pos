export type Material = {
    name: string;
    measurement: string;
    quantity: number; // Quantity of the material used
    cost: number; // Cost per unit of the material
};

export type theMenuItem = {
    id: number;
    image: string;
    title: string;
    description: string;
    materials: Material[]; // Change from 'items' to 'materials'
    category: string;
    sellingPrice: number;
};




export const themenuItems: theMenuItem[] = [
    {
        id: 1,
        image: 'https://fakeimg.pl/300x300/?text=Proyecto_Xocolate',
        title: 'Pasta Bolognese',
        description: 'Hearty meat sauce with fresh pasta',
        materials: [
            { name: 'Ground Beef', quantity: 1, cost: 2.50,measurement:'g' },
            { name: 'Tomato Sauce', quantity: 1, cost: 1.00,measurement:'g' },
            { name: 'Pasta', quantity: 1, cost: 1.00,measurement:'g' },
            { name: 'Garlic Bread', quantity: 2, cost: 0.50,measurement:'g' },
            { name: 'Caesar Salad', quantity: 1, cost: 2.00,measurement:'g' }
        ],
        category: 'food',
        sellingPrice: 35
    },
    {
        id: 2,
        image: 'https://fakeimg.pl/300x300/?text=Proyecto_Xocolate',
        title: 'Grilled Cheese Sandwich',
        description: 'Melting cheese between toasted bread',
        materials: [
            { name: 'Bread', quantity: 2, cost: 0.25,measurement:'g' },
            { name: 'Cheese', quantity: 1, cost: 1.50,measurement:'g' },
            { name: 'Butter', quantity: 1, cost: 0.10,measurement:'g' }
        ],
        category: 'food',
        sellingPrice: 55
    },
    {
        id: 3,
        image: 'https://fakeimg.pl/300x300/?text=Proyecto_Xocolate',
        title: 'Chicken Tacos',
        description: 'Spiced chicken with fresh toppings',
        materials: [
            { name: 'Chicken', quantity: 2, cost: 3.00,measurement:'g' },
            { name: 'Tortillas', quantity: 4, cost: 0.50,measurement:'g' },
            { name: 'Salsa', quantity: 5, cost: 0.75,measurement:'g' }
        ],
        category: 'food',
        sellingPrice: 35
    },
    {
        id: 4,
        image: 'https://fakeimg.pl/300x300/?text=Proyecto_Xocolate',
        title: 'Salmon Salad',
        description: 'Grilled salmon with mixed greens',
        materials: [
            { name: 'Salmon', quantity: 1, cost: 5.00,measurement:'g' },
            { name: 'Mixed Greens', quantity: 1, cost: 1.50,measurement:'g' },
            { name: 'Dressing', quantity: 3, cost: 0.50,measurement:'g' }
        ],
        category: 'food',
        sellingPrice: 45
    },
    {
        id: 5,
        image: 'https://fakeimg.pl/300x300/?text=Proyecto_Xocolate',
        title: 'Classic Margarita',
        description: 'Tequila, lime, and Cointreau',
        materials: [
            { name: 'Tequila', quantity: 5, cost: 2.00,measurement:'ml' },
            { name: 'Lime Juice', quantity: 2, cost: 0.30,measurement:'ml' },
            { name: 'Cointreau', quantity: 1, cost: 1.50,measurement:'ml' }
        ],
        category: 'alcohol',
        sellingPrice: 35
    },
    {
        id: 6,
        image: 'https://fakeimg.pl/300x300/?text=Proyecto_Xocolate',
        title: 'Bloody Mary',
        description: 'Vodka with spiced tomato juice',
        materials: [
            { name: 'Vodka', quantity: 5, cost: 2.00,measurement:'ml' },
            { name: 'Tomato Juice', quantity: 1, cost: 1.00,measurement:'ml' },
            { name: 'Celery', quantity: 1, cost: 0.10,measurement:'ml' }
        ],
        category: 'alcohol',
        sellingPrice: 25
    },
    {
        id: 7,
        image: 'https://fakeimg.pl/300x300/?text=Proyecto_Xocolate',
        title: 'Mojito',
        description: 'Rum with fresh mint and lime',
        materials: [
            { name: 'Rum', quantity: 5, cost: 2.00,measurement:'ml' },
            { name: 'Mint', quantity: 1, cost: 0.30,measurement:'ml' },
            { name: 'Lime', quantity: 1, cost: 0.50,measurement:'ml' }
        ],
        category: 'alcohol',
        sellingPrice: 35
    },
    {
        id: 8,
        image: 'https://fakeimg.pl/300x300/?text=Proyecto_Xocolate',
        title: 'Old Fashioned',
        description: 'Whiskey with bitters and sugar',
        materials: [
            { name: 'Whiskey', quantity: 5, cost: 3.00,measurement:'ml' },
            { name: 'Bitters', quantity: 5, cost: 0.20,measurement:'ml' },
            { name: 'Sugar', quantity: 5, cost: 0.05,measurement:'ml' }
        ],
        category: 'alcohol',
        sellingPrice: 60
    },
    {
        id: 9,
        image: 'https://fakeimg.pl/300x300/?text=Proyecto_Xocolate',
        title: 'Iced Coffee',
        description: 'Chilled coffee over ice',
        materials: [
            { name: 'Coffee', quantity: 2, cost: 1.00,measurement:'ml' },
            { name: 'Ice', quantity: 5, cost: 0.05,measurement:'g' },
            { name: 'Milk', quantity: 5, cost: 0.30,measurement:'ml' }
        ],
        category: 'drinks',
        sellingPrice: 55
    },
    {
        id: 10,
        image: 'https://fakeimg.pl/300x300/?text=Proyecto_Xocolate',
        title: 'Strawberry Smoothie',
        description: 'Blended strawberries with yogurt',
        materials: [
            { name: 'Strawberries', quantity: 1, cost: 1.00,measurement:'g' },
            { name: 'Yogurt', quantity: 1, cost: 0.70,measurement:'ml' },
            { name: 'Honey', quantity: 1, cost: 0.30,measurement:'ml' }
        ],
        category: 'drinks'
        ,  sellingPrice: 35
    },
    {
        id: 11,
        image: 'https://fakeimg.pl/300x300/?text=Proyecto_Xocolate',
        title: 'Green Tea',
        description: 'Steamed green tea leaves',
        materials: [
            { name: 'Green Tea Leaves', quantity: 5, cost: 0.50,measurement:'ml' },
            { name: 'Water', quantity: 2, cost: 1.00,measurement:'ml' }
        ],
        category: 'drinks',
        sellingPrice: 25
    },
    {
        id: 12,
        image: 'https://fakeimg.pl/300x300/?text=Proyecto_Xocolate',
        title: 'Cherry Lemonade',
        description: 'Fresh lemonade with cherry flavor',
        materials: [
            { name: 'Lemon Juice', quantity: 5, cost: 0.50,measurement:'ml' },
            { name: 'Cherry Syrup', quantity: 2, cost: 0.40,measurement:'ml' },
            { name: 'Water', quantity: 1, cost: 1.00,measurement:'ml' }
        ],
        category: 'drinks',
        sellingPrice: 35
    },
    {
        id: 13,
        image: 'https://fakeimg.pl/300x300/?text=Proyecto_Xocolate',
        title: 'Chocolate Croissant',
        description: 'Flaky pastry with rich chocolate filling',
        materials: [
            { name: 'Pastry Dough', quantity: 5, cost: 0.50,measurement:'g' },
            { name: 'Chocolate', quantity: 2, cost: 0.70,measurement:'g' }
        ],
        category: 'pastry',
        sellingPrice: 65
    },
    {
        id: 14,
        image: 'https://fakeimg.pl/300x300/?text=Proyecto_Xocolate',
        title: 'Blueberry Muffin',
        description: 'Moist muffin with fresh blueberries',
        materials: [
            { name: 'Flour', quantity: 1, cost: 0.30,measurement:'g' },
            { name: 'Blueberries', quantity: 5, cost: 1.00,measurement:'g' },
            { name: 'Sugar', quantity: 5, cost: 0.20,measurement:'g' }
        ],
        category: 'pastry',
        sellingPrice:55
    },
    {
        id: 15,
        image: 'https://fakeimg.pl/300x300/?text=Proyecto_Xocolate',
        title: 'Apple Pie',
        description: 'Warm apple filling with a flaky crust',
        materials: [
            { name: 'Apples', quantity: 2, cost: 2.00,measurement:'pz' },
            { name: 'Pie Crust', quantity: 1, cost: 1.00,measurement:'g' },
            { name: 'Cinnamon', quantity: 5, cost: 0.10,measurement:'g' }
        ],
        category: 'pastry',
        sellingPrice: 45
    },
    {
        id: 16,
        image: 'https://fakeimg.pl/300x300/?text=Proyecto_Xocolate',
        title: 'Vanilla Cupcake',
        description: 'Soft vanilla cupcake with creamy frosting',
        materials: [
            { name: 'Flour', quantity: 1, cost: 0.30,measurement:'g' },
            { name: 'Vanilla Extract', quantity: 5, cost: 0.50,measurement:'ml' },
            { name: 'Frosting', quantity: 3, cost: 0.60,measurement:'g' }
        ],
        category: 'pastry',
        sellingPrice: 35
    }
    // Add more menu items here...
];