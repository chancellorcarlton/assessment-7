const sumZero = (arr) => {
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return true;
            };
        };
    };
    return false;
};

// console.log(sumZero([1, 2, -2]))

// Time complexity =O(n^2)
// Space complexity = O(n)

const hasUniqueChars = (str) => {
    let strArr = str.split('');
    console.log(strArr);

    for(let i = 0; i < strArr.length; i++){
        for(let j = i + 1; j < strArr.length; j++){
            if(strArr[i] === strArr[j]){
                return false
            };
        };
    };
    return true
};

// console.log(hasUniqueChars("Monday"))

// Time complexity =O(n)
// Space complexity = O(n)

const isPangram = (str) => {
    str = str.toLowerCase();
    const alphabet = {
        a: 0,
        b: 0,
        c: 0,
        d: 0,
        e: 0,
        f: 0,
        g: 0,
        h: 0,
        i: 0,
        j: 0,
        k: 0,
        l: 0,
        m: 0,
        n: 0,
        o: 0,
        p: 0,
        q: 0,
        r: 0,
        s: 0,
        t: 0,
        u: 0,
        v: 0,
        w: 0,
        x: 0,
        y: 0,
        z: 0
    }

    for(let i = 0; i < str.length; i++){
        if(alphabet[str[i]] === 0){
            alphabet[str[i]] += 1;
        };
    }
    for(let key in alphabet){
        if(alphabet[key] === 0){
            return false
        }
    }
    return true
};

// console.log(isPangram("The quick brown fox jumps over the lazy dog!"))

// Time complexity =O(n)
// Space complexity = O(n)

const findLongestWord = arr => {
    let longestLength = 0;
    arr.forEach(e => {
        if(e.length > longestLength){
            longestLength = e.length
        }
    });
    return longestLength;
};


console.log(findLongestWord(["hi", "hello"]))

// Time complexity =O(n^2)
// Space complexity = O(n)