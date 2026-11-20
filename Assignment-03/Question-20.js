
// var products = ["Keyboard", "Mouse", "Monitor", "USB", "Headphones"];

// var prices = [2500, 1200, 22000, 800, 3500];
// for (var i = 0; i < products.length; i++) {
//     console.log((i + 1) + ". " + products[i] + " - Rs. " + prices[i]);
// }

// var choice = Number(prompt("Enter product number (1-5):"));

// var quantity = Number(prompt("Enter quantity:"))
// if (choice >= 1 && choice <= 5 && quantity > 0) {
//     var selectedProduct = products[choice - 1];
//     var selectedPrice = prices[choice - 1];

//     var total = selectedPrice * quantity;
//     var discount = 0;

//     if (total >= 5000) {
//         discount = total * 10 / 100;
//     }

//     var finalBill = total - discount;
//     console.log("----- FINAL BILL -----");
//     console.log("Product: " + selectedProduct);
//     console.log("Price: Rs. " + selectedPrice);
//     console.log("Quantity: " + quantity);
//     console.log("Total: Rs. " + total);
//     console.log("Discount: Rs. " + discount);
//     console.log("Final Bill: Rs. " + finalBill);

// } else {
//     console.log("Invalid product selection or quantity!");
// }