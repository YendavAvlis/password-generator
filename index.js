let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

console.log(characters)
let passwordOne = document.querySelector('#password-one')
let passwordTwo = document.querySelector('#password-two')
let generate = document.querySelector('#generate')


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





// passwordOne.addEventListener('click', (e) => {

//     writeClipboardText(e.target.value)
// });

// async function writeClipboardText(passwordOne) {
//     try {
//         await navigator.clipboard.writeText(passwordOne.value);
//     } catch (error) {
//         console.error(error.message);
//     }
// }
