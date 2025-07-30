let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

const passwordOne = document.querySelector('#password-one')
const passwordTwo = document.querySelector('#password-two')
const generate = document.querySelector('#generate')
const spans = document.querySelectorAll('.password')

console.log(passwordOne.textContent)


generate.addEventListener('click', () => {
    if (passwordOne.textContent.length === 15){
        passwordOne.textContent = ''
    }

    if (passwordTwo.textContent.length === 15){
        passwordTwo.textContent = ''
    }

    for(let i = 0; i < 15; i++) {
        let randomIndexOne = Math.floor(Math.random() * characters.length)
        let randomIndexTwo = Math.floor(Math.random() * characters.length)
        passwordOne.textContent += characters[randomIndexOne]
        passwordTwo.textContent += characters[randomIndexTwo]
    }
})

console.log(spans)

// :D
spans.forEach(item => (
    item.addEventListener('click', () => {
        alert('Password Copied!')
    })
))
// :D


async function writeClipboardText(password) {
    try {
        await navigator.clipboard.writeText(password.textContent);
    } catch (error) {
        console.error(error.message);
    }
}
