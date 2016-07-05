/* A large eCommerce Co. wants to list our their best selling products overall and by category. Describe how to design a system for this feature. */

// Can we imagine what such a system might look like?
// This is a good place to explore the scope of what we're building with the interviewer
// How long are sales tracked for our rankings? 1 week
// Can a product be in multiple categories? Yes
// How current does our data need to be? Updated daily

// In our system, we'll have a database that stores data from every order relevant to our ranking
// Once we have the orders in the database we can periodically sort them to get rankings
// Rankings are accessible to our front-end so that customers can group and sort by popular items

// Depending on how often we need to update our rankings and the rate of sales, we could store data about sales to memory and then save the data to the database in batches
// This would help mitigate the expensive cost of multiple database requests

// If we have 1 million total products and we sell at least 1 of everything per day, then we'd need to hold 8 * 2 bytes (for 2 floats) * 1 million = 16 MB of memory

// We can design a schema for tracking which product is tied to which categories
// Once we have the sales data for individual ids we can join that data with our categories schema to get the best sellers

// Maintain a cache and a product list
function OrderCache() {
  this.cache = {};
  this.productList = [3597, 1354, 2395, 9384, 0345, 8356, 7243, 1345, 2863, 7672];
}
// The productList initializes our cache with 0 sales for every item at day's start
OrderCache.prototype.initProductList = function() {
  for (var i = 0; i < this.productList.length; i++) {
    this.cache[productList[i]] = 0;
  }
};

// Individual orders get sent to our system as arrays of objects
var order = [
  { "id": 3597, "num": 2 },
  { "id": 9384, "num": 1 }
];
// Orders are broken down by type 
OrderCache.prototype.storeSalesData = function(order) {
  
  for (var i = 0; i < order.length; i++) {
    if (this.cache.hasOwnProperty(order.id)) {
      this.cache[order.id] += order.num;
    } else {
      console.log("Product not found, id: " + order.id);
    }
  }
};

var itemKey = {
  "3597": ["nike", "soccer"],
  "1345": ["soccer", "apparel"]
  // Etc. { ... } : [ ... ]
};
// Calculate day of the week and then replace the sales data for that index in our sales array
var dayOfWeek = new Date().getDay();

// This schema contains our sales data per category per product id
var weeklySalesByCategoryPerItem = {
  "nike": {
    "3597": [14, 4, 8, 12, 19, 22, 3],
    "9384": [5, 17, 4, 8, 12, 15, 2],
    "0345": [14, 6, 17, 2, 9, 10, 5]
  },
  "soccer": {
    "8356": [4, 5, 10, 15, 3, 5, 12],
    "1345": [8, 0, 2, 6, 11, 4, 9],
    "3597": [4, 1, 8, 2, 6, 9, 2, 8]
  },
  "apparel": {
    "1345": [4, 5, 10, 15, 3, 5, 12],
    "2863": [8, 0, 2, 6, 11, 4, 9],
    "7672": [4, 1, 8, 2, 6, 9, 2, 8]
  }
  // Etc. { ... } : [ ... ]
};

// Each day we can update our sales by importing our cache and updating the products under each category
function getBestSellersByCategory(cache) {
  // For each product in our cache
  for (var product in cache) {
    // Get the associated categories
    var categories = itemKey[product];
    // Now add in our product sales for each place it appears in a category
    for (var i = 0; i < categories.length; i++) {
      weeklySalesByCategoryPerItem[categories[i]][product][dayOfWeek] = cache[product];
    }
  }
}

// In an actual implementation using JS, we could use Node.js with MongoDB to update collections based on product categories
// Then we can sum and sort total sales by category and return a object to the front end with an ordered list of products divided by category