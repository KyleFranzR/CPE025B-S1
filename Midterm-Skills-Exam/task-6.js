function firstUniqueChar(str) {
    const strNum = {};
    const lowerStr = str.toLowerCase();

    for (let char of lowerStr) {
        strNum[char] = (strNum[char] || 0) + 1;
    }

    for (let i = 0; i < lowerStr.length; i++) {
        if (strNum[lowerStr[i]] === 1) {return str[i];}
    }
}

// Test Code
console.log(firstUniqueChar('sTreSS'));
console.log(firstUniqueChar('aabbc')); 