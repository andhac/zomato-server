## API Planning

- Auth (Authenticating the user and creating the user in the database)
- Foods (Food Items and their details)
- Restaurants (Restaurant and their details)
- Menu (Menu and their details) Adding new menu, Updating menu
- Order (Order and their details)
- Images (Images and their details)
- User (User and their details)
- Payment (Payment and their details)
- Reviews (Reviews and their details)
- Mail (Mail and their details)



// NOTE: Redux data reference
restaurant
    "name": "",
    "city": "",
    "address": "",
    "mapLocation": "",
    "cuisine": ["", ""],
    "restaurantTimings": "",
    "contactNumber": "",
    "website": "",
    "popularDishes": ["", ""],
    "averageCost": 300,
    "amenties": ["", ""],
    "menuImages": referencing => Images Collection document,
    "menu": references => Menu Collection document,
    "reviews": [" references => Reviews Collection document,", " references => Reviews Collection document,"],
    "photos":  references => Images Collection document,

Menus 
menus: [{
        "name": "Recommended",
        "items": [
            references => Items Collection document,
        ]
    }],
    "recommended": [
        references => Images Collection document,
    ]