/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

let arrs = [
  {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
  },
  {
		id: 2,
		timestamp: 1656076800000,
		price: 20,
		category: 'Park',
		itemName: 'Ride',
  },
  {
		id: 1,
		timestamp: 1656076800000,
		price: 16,
		category: 'Food',
		itemName: 'Pizza2',
	}
]




function calculateTotalSpentByCategory(transactions) {
	// let category = arrs.map((arr) => arr.category)
	let category = arrs.reduce((arr, cv) => 
		arr.category
	)
  
  return [];
}

module.exports = calculateTotalSpentByCategory;
