function mergeBusyIntervals(userA, userB) {
    // Merge both arrays into one sorted list
    let intervals = [...userA, ...userB].sort((a, b) => a[0] - b[0]);

    let merged = [intervals[0]];
    for (let i = 1; i < intervals.length; i++) {
        let lastMerged = merged[merged.length - 1];
        let current = intervals[i];

        // Check if current interval overlaps or touches the last merged interval
        if (current[0] <= lastMerged[1]) {
            // Merge the current interval with the last merged interval
            lastMerged[1] = Math.max(lastMerged[1], current[1]);
        } else {
            // Add the current interval to the merged list
            merged.push(current);
        }
    }

    return merged;
}

let userA = [
    [9, 11],
    [13, 15],
    [18, 20]
];
let userB = [
    [10, 12],
    [14, 16],
    [17, 18]
];
console.log(mergeBusyIntervals(userA, userB));