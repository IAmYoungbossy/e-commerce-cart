# Shopping Cart

## Introduction

This is an e-commerce shopping cart application. It handles the loading of products, rendering them as `<Product />` components, and implementing features such as adding and removing items from the cart, updating quantities, calculating prices, and applying discounts.

## Functionality

#### Loading Products

The component loads products using the provided `getProducts()` function. It displays a loading icon until all the product data has been successfully loaded.

#### Rendering Products

The `<Checkout />` component renders each product object as a `<Product />` component. It passes the necessary props to each `<Product />` component for proper rendering and display.

#### Adding and Removing Items

The component implements methods for adding and removing items from the cart. These methods are triggered when the user interacts with the add and remove buttons associated with each product.

The add and remove buttons adjust the ordered quantity of each product. The ordered quantity cannot be negative, and it cannot exceed the available count for that particular product. The add and remove buttons are enabled or disabled accordingly to ensure these constraints are met.

#### Calculating Product Totals

The total amount shown for each product is calculated based on the ordered quantity and the price. The calculation takes into account the specific decimal format required, displaying all dollar amounts to 2 decimal places.

#### Cart Functionality

The `<Checkout />` component also implements cart functionality to display only the products that have been added to the cart. This allows the user to easily see the selected items and manage their quantities.

## Order Summary

The order summary section of the checkout displays the total amount for all items in the cart. For orders totaling over $1000, a 10% discount is applied to the order. If a discount has been applied, the discount text is displayed. The total amount reflects any applied discount.
