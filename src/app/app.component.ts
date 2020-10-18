import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Burger Jawn!';
  priceText = 'Price: ';
  total = 0;
  foodMenu = [{
    'item': 'Fries',
    'description': 'Description: Oily, salty, and hot',
    'comment1': "You'll love our fries",
    'comment2': "No Fries today?",
    'amount': 0,
    'image': "https://assets.stickpng.com/images/585abfdf4f6ae202fedf2936.png",
    'price': 50,
    'feature': false
},
{
  'item': 'Burgers',
  'description': 'Description: Beefy, fresh, & hot',
  'comment1': "You'll love our burgers",
  'comment2': "No Burgers today?",
  'amount': 0,
  'image': "https://i2.wp.com/freepngimages.com/wp-content/uploads/2016/11/bacon-burger.png?fit=895%2C895",
  'price': 10,
  'feature': true
},
{
  'item': 'Soda',
  'description': 'Description: Sweeter than water',
  'comment1': "You'll love our Soda",
  'comment2': "No Soda today?",
  'amount': 0,
  'image': "https://www.jing.fm/clipimg/full/195-1952265_coca-cola-can-png-image-transparent-background-soda.png",
  'price': 30,
  'feature': false
}
]

//METHODS BEGIN HERE
totalItems(){
  let items = 0;
  for(let item of this.foodMenu){
    items += item.amount;
  }
  return items;
}
//take the total amount of items in cart and multiply them by the price of item
totalPrice(){
  let priceTotal = 0;
  for(let item of this.foodMenu){
    priceTotal += (item.amount * item.price);
  }
  return priceTotal;
}

upQuantity(foodItem){
  foodItem.amount++;
  this.total += foodItem.price;
}

lowerQuantity(foodItem){
  if(foodItem.amount != 0){
    foodItem.amount--;
  this.total -= foodItem.price;
  }
}
//Method to stop the negative input amounts.
noNegativeInput(foodItem){
  if(foodItem.amount < 0){
    foodItem.amount = 0;
  }
}
}
