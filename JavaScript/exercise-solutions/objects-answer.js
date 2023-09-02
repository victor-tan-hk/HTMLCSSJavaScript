
/* Q1. Below are the sample details for a customer at Shopee

Name: Shang Chi
Age: 24
Bank Name: Ten Rings Bank
Bank Account No: 3-534454-2
Country of Residence: Ta Lo
Shopee Coins: 35000
Coin conversion rate: 0.04
Item purchased:
-	Item description: Power Rings
-	Unit price: 52.00
-	Quantity: 10
-	Rating: 4.2
-	Vendor: Marvel Cinematic Universe


Create an object with suitable properties to model this customer (which may include other objects as well).

Add a method to this object that will check whether the customer is able to pay for the item purchased using the Shopee Coins alone. The cash equivalent of the Shopee Coins is obtained by multiplying it with the Coin conversion rate.

Call the object method and change the values for the Shopee Coins and Coin conversion rate to verify that it works correctly.


 */


let customer = {
    name : 'Shang Chi',
    age : 32,
    'Bank Name' : 'Ten Rings Bank',
    'Bank Account No': '3-534454-2',
    country : 'Ta Lo',
    'Shopee Coins': 35000,
    conversion : 0.04,
    itemPurchased : {
        description : 'Power Rings',
        price: 52.00,
        quantity: 10,
        rating: 4.2,
        vendor: 'Marvel Cinematic Universe'
    },

    canPayWithCoins: function() {
        let convertToCash = this["Shopee Coins"] * this.conversion;
        let totalItemsCost = this.itemPurchased.price * this.itemPurchased.quantity;
        return convertToCash >= totalItemsCost;
    }
}

if (customer.canPayWithCoins())
    console.log(customer.name + " can pay with Shopee coins alone. Yay !!!");
else
    console.log(customer.name + " cannot pay with Shopee coins alone. BOO !!!");
