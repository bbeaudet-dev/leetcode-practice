// Reverse a String
// No built-in reverse methods

function reverseString(str: string) {
    let revStr = ""
    for (let i = str.length - 1; i >= 0; i--) {
        revStr += str[i]
    }
    return revStr
}

const strings = ["banana", "pterodactyl", "Supercalifragilisticexpialidocious"]
for (let i = 0; i < strings.length; i++) {
    console.log(strings[i],"|",reverseString(strings[i]))
}