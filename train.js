//MIT task #G

function getHighestIndex(a) {
    let maxIndex = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i] > a[maxIndex]) {
            maxIndex = i;
        }
    }
    return maxIndex;
}

console.log(getHighestIndex([5, 21, 12, 21, 8]));
console.log(getHighestIndex([5, 12, 21, 8, 2]));
console.log(getHighestIndex([5, 12, 35, 45, 55]));