## Coffee Beans Shop

This repo is the home of a practice react app build on top of create-react-app, theme as a coffee beans shop.

The shop will showcase a catalog fetched from a firebase database and have a cart that keeps track of the items. 
With at least one item added to cart, the user can place an orderd that will be saved in firebase.

## Gif showing page interaction

![gif](https://github.com/sovejero/ecom/blob/8-router/public/pageInteraction.gif)

## Functionality and structure

Custom CSS for extra simplicity as the focus is on functionality.

### Main Components

* App: Handle routes  with react-router-dom.
* Firebase: Imports firebase to fetch items and save orders.
* Navbar: contains CartWidget, Logo, Categories links and a cart icon.
* ItemListContainer: Homepage of the website, fetches data from firbease.
* ItemList: Visual component of ItemListContainer.
* Cart: Saves orders to firebase.
* CartContext: Context for CartItems.

### Running project locally

To run it make sure you have firebase and react-router-dom packages installed or simply run `npm install` and npm should take care of it. 

Afterwards run `npm start` and the website will open automatically on `http://localhost:3000`
