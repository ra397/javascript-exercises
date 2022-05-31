const palindromes = function (str) {
    let reverse_str = '';
    for (let i = str.length - 1; i >= 0; i--) {
        if ((/[a-zA-Z]/).test(str.charAt(i))) {
            reverse_str += str.charAt(i);
        }
    }
    clean_str = ''
    for (let i = 0; i < str.length; i++) {
        if ((/[a-zA-Z]/).test(str.charAt(i))) {
            clean_str += str.charAt(i);
        }
    }
    return reverse_str.toLowerCase() === clean_str.toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
