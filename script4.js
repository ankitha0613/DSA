// let invoices = [1001, 1002, 1003, 1004];
// let formattedInvoices = invoices.map(invoice => `INV - $ { invoice }`);
// console.log(formattedInvoices);


// function twoSumBasic(arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[i] + arr[j] == target) {
//                 return true;
//             }
//         }
//     }
// }
// console.log(twoSumBasic([1, 2, 3, 4, 5, 6]));
// let left = 0;
// let right = arr.length - 1;
// // arr = [1, 2, 3, 4, 5, 6];
// // target = 11;

// function twoSumBasic(arr) {
//     let left = 0;
//     let right = arr.length - 1;
//     while (left < right) {
//         const sum = arr
//     }
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[left] + arr[right] === 11) {
//                 return true;
//             }
//         }
//     }
// }
// console.log(twoSumBasic([1, 2, 3, 4, 5, 6]));

// function reversearray(arr) {
//     let result = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         result.push(arr[i]);
//     }
// }
// console.log(reversearray([1, 2, 3, 4, 5, 6]));

// 


// function reverseDuplicates(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (!result.includes(arr[i])) {
//             result.push(arr[i]);
//         }
//     }
// }
// console.log(reverseDuplicates([1, 2, 2, 3, 4]));
function reverseDuplicates(arr) {
    let i = 0;
    for (ley j = 1; j < arr.length; j++); {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return arr.slice(0, i + 1);
}
console.log(reverseDuplicates([1, 2, 3, 4]));