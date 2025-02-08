// parte 1

const listToString = (list) => {
    const primerResultado = list.join('/');
    const partes = primerResultado.split('/');
    const parteFinal = partes.pop();
    const resultadoFinal = partes.join('/') + '.' + parteFinal;

    return resultadoFinal;
};

const input1 = [
    'Downloads',
    'Videos',
    'capture',
    'mp4',
    ];

    listToString(input1); // 'Downloads/Videos/capture.mp4'

    const input2 = [
    'CodinGame',
    'python',
    'py',
    ];

    listToString(input2); // 'CodinGame/python.py'

    const input3 = [
    'programming',
    'languages',
    'easy',
    'beginner',
    'useful',
    'pythonstuff',
    'py',
    ];

    listToString(input3);
    // 'programming/languages/easy/beginner/useful/pythonstuff.py'


// parte 2

    const input = 10;
    
    const separateString = (number) => {
        const numberToString = number.toString();
        const separatedString = numberToString.split('');
        return separatedString.join('-');
    };

separateString(input); // '1-0'
const secondInput = 1;
separateString(secondInput); // '1'
const thirdInput = 11234;
separateString(thirdInput); // '1-1-2-3-4'


// parte 3

const inputA = 'string';

const reverseString = (str) => {
    const lenght = str.lenght;
    const reversed = str.split('').reverse().join('')

    return lenght + ' ' + reversed
};

reverseString(inputA); // '6 gnirts'
const inputB = 'variable';
reverseString(inputB); // '8 elbairav'
const inputC = 'pointer';
reverseString(inputC); // '7 retniop'

