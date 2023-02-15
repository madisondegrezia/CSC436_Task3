# CSC436_Task3

## Table of contents  
* [Task Description](#Task-description)
* [ScreenShots](#ScreenShots)

## Task Description
Using this data (put it in its own file to be exported)

const products = [
{ id: 1, name: 'Apple iPhone', price: 999, onSale: false },
{ id: 2, name: 'Samsung Galaxy S21', price: 799, onSale: true },
{ id: 3, name: 'Google Pixel 5', price: 699, onSale: false },
{ id: 4, name: 'OnePlus 9 Pro', price: 899, onSale: true },
{ id: 5, name: 'AirPods Pro', price: 249, onSale: false },
];
Scenario: You are working on an e-commerce website where users can purchase products. The website stores the products in an array of objects.

1. Create a separate React component pulling in the data from an imported file and using Array.reduce(), calculate the total cost of all the products in the array.

2. Create a separate React component pulling in the data from an imported file and using Array.map(), render a list of all the product names on the website.

3. Create a separate React component pulling in the data from an imported file and using Array.sort(), sort the products in the array by their price in ascending order.

4. Create a separate React component pulling in the data from an imported file and using Array.filter(), create a new array that only includes the products that are on sale. Render the sale products in a list on the website.


## Screenshots
<img src="https://user-images.githubusercontent.com/89614960/218943492-c36230e2-de0a-4820-9bea-b7b8bba78d44.png" width=60% height=60%>

The above image shows the output on the screen when clicking the button which uses Array.reduce() to calculate the total cost of products.

<img src="https://user-images.githubusercontent.com/89614960/218944185-2108b2ea-5585-4584-b6a0-ee8c830bb293.png" width=60% height=60%>

The above image shows the output on the screen when clicking the button which uses Array.map() to show the product list.

<img src="https://user-images.githubusercontent.com/89614960/218944266-a5712743-ecce-47e1-a3bb-13331e0193ca.png" width=60% height=60%>

The above image shows the output on the screen when clicking the button which uses Array.sort() to sort the prices in ascending order.

<img src="https://user-images.githubusercontent.com/89614960/218944356-e65f0d6e-1098-4a54-878f-f215653f1416.png" width=60% height=60%>

The above image shows the output on the screen when clicking the button which uses Array.filter() to only show the products on sale.
