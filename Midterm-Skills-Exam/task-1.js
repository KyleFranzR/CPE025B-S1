function sumDeepStrictNumbers(arr) {
    var sum = 0;
    if (!Array.isArray(arr)) return 0;
    for (let i = 0; i < arr.length; i++) {
        const val = arr[i];
        if (Array.isArray(val)) {
            sum += sumDeepStrictNumbers(val);
        } else if (typeof val === 'number' && Number.isFinite(val)) {
            sum += val;
        }
    }

    return sum;
}

// Test Code
const testArray1 = [10, ['5', [true, 5]], null, [undefined, [10, NaN]]];
console.log(sumDeepStrictNumbers(testArray1));