const caesar = function(str, shift_factor) {
    ABC = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'J', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) >= 'A' && str.charAt(i) <= 'Z') {
            for (let j = 0; j < 26; j++) {
                if (str.charAt(i) === ABC[j]) {
                    str = str.replace(str.charAt(i), ABC[(j + shift_factor) % 26]);
                    break;
                }
            }
        } else if (str.charAt(i) >= 'a' && str.charAt(i) <= 'z') {
            for (let j = 0; j < 26; j++) {
                if (str.charAt(i) === abc[j]) {
                    str = str.replace(str.charAt(i), abc[(j + shift_factor) % 26]);
                    break;
                }
            }
        }
    }
    return str;
};

// Do not edit below this line
module.exports = caesar;
