const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0'
};

function decode(expr) {
    var res = "";
    for (let i = 0; i < expr.length ; i += 10) {
        var part = expr.slice(i, i + 10)
            .replace(/11/g, '-')
            .replace(/10/g, '.');
        if (part.length == 10) {
            part = " ";
        } else {
            part = part.replace(/0*/g, "");
            part = MORSE_TABLE[part];
        }
        res += part;
    }
    return res;
}

module.exports = {
    decode
}