const palindromes = function (word) {
    const filteredWord = word.toLowerCase().replace(/[^a-z0-9]/g, "");
    return filteredWord.split("").reverse().join("") == filteredWord;
};

// Do not edit below this line
module.exports = palindromes;
