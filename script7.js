// //1.Insert New Delivery Order
let ordersArray = [
    { orderId: 1, deliveryTime: "12:00" },
    { orderId: 2, deliveryTime: "12:30" }
];

let newOrder = { orderId: 3, deliveryTime: "12:15" };

function insertOrder(ordersArray, newOrder) {
    for (let i = 0; i < ordersArray.length; i++) {
        if (newOrder.deliveryTime < ordersArray[i].deliveryTime) {
            ordersArray.splice(i, 0, newOrder);
            return ordersArray;
        };
    };
    //if newOrder(delivery-time) > existing orders(delivery-time)
    ordersArray.push(newOrder);
    return ordersArray;
}
console.log(insertOrder(ordersArray, newOrder));

//2.Remove Inactive Users 
let users = [
    { username: "ali", isActive: true },
    { username: "sara", isActive: false },
    { username: "john", isActive: true }
];

function removeInactive(users) {
    return users.filter(user => user.isActive);
};
let activeUsers = removeInactive(users);
console.log(activeUsers);

//3.Movie Pair Watch Time
let movieDurations = [90, 85, 75, 60, 120, 150, 125];
let targetTime = 250;

movieDurations.sort((a, b) => a - b);

function findTarget(movieDurations, targetTime) {
    let left1 = 0;
    let right1 = movieDurations.length - 1;

    while (left1 < right1) {
        const sum = movieDurations[left1] + movieDurations[right1];

        if (sum === targetTime) {
            return [movieDurations[left1], movieDurations[right1]];
        } else if (sum < targetTime) {
            left1++;
        } else {
            right1--;
        }
    }
    return null;
}
console.log(findTarget(movieDurations, targetTime));