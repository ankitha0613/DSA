 //Remove Discontinued Products 
 let products = ['Laptop', 'Mobile', 'Tablet', 'Camere', 'Watch'];
 products.splice(2, 2);
 console.log(products);

 //Add New Students in Between
 let students = ['Ali', 'Sara ', 'Zoya'];
 students.splice(1, 0, 'Nina', 'Omar');
 console.log(students);

 //Extract Top Performers
 let score = ['Zainab', 'Ali', 'Farhan', 'Nida', 'Ayaan'];
 score.splice(3, 5);
 console.log(score);

 //Show Last2 Day's Sales
 let Sales = [220, 300, 280, 150, 400, 390, 310];
 Sales.splice(0, 5);
 console.log(Sales);

 //Get All Users Who Are Active
 let users = [{
     name: 'Ahmed',
     active: true
 }, {
     name: 'Mira',
     active: false
 }, {
     name: 'John',
     active: true
 }, ];
 const result = users.filter((user) => user.active === true);
 console.log(result);


 //Bolck Short Phone Numbers
 let PhoneNumbers = ['1234567890', '12345', '9876543210', '678901234', ];
 const valid = PhoneNumbers.filter((number) => number.length >= 10);
 console.log(valid);

 //Convert Price to With Tax
 let Prices = [100, 200, 300];
 const WithTax = Prices.map((price) => price + (price * 18) / 100);
 console.log(WithTax);

 //Append   ".com" to Website Names
 let sites = ['google', 'amazon', 'microsoft'];
 const domains = sites.map((site) => `${site}.com`);
 console.log(domains);

 //CalculateTitalCart Price
 let cart = [499, 1299, 299, 799];
 const totalPrice = cart.reduce((total, price) => total + price, 0);
 console.log(totalPrice);

 //Count Frequency of Votes
 let votes = ['A', 'B', 'A', 'C', 'B', 'A'];
 const voteCount = votes.reduce((count, vote) => {
     count[vote] = (count[vote] || 0) + 1;
     return count;
 }, {});
 console.log(voteCount);