// script for analyze and take the numbers 

let inputClick = document.querySelectorAll('.primaryAction__input')
let messageDisplay = document.getElementById('message__display')
let numberDisplay = document.getElementById('number__display')

let numberArray = []
let numbersPair = []
let numbersOdd = []

// event of click for each button
inputClick.forEach(input => {
    input.addEventListener('click', ()=>{
        //taking the value of the button
        let userInput = input.value
        let numberInput = 0
        let operation = ''

        if(userInput != 'add' && userInput != 'erase'){
            numberInput = parseInt(userInput)
            numberArray.push(numberInput)
        } else{
            operation = userInput
        }

        // join the numbers of the array for a complete number
        let numbersList = numberArray.join('')
        numberDisplay.innerHTML = numbersList

        
        //operating according with que operation input pressed
        switch (operation){
            case 'add':
                messageDisplay.innerHTML = `Número ${numbersList} adicionado`
                messageDisplay.style.color = 'green'
                messageDisplay.style.fontWeight = '700'


                // checking if the number is valid
                let num = parseInt(numbersList)
                if(num % 2 == 0){
                    if(numbersPair.lastIndexOf(num) != -1){
                        messageDisplay.innerHTML = `Número ${num} já adicionado`
                        messageDisplay.style.color = 'red'
                        numberDisplay.innerHTML = 0
                    } else{
                        messageDisplay.innerHTML = `Número ${num} adicionado`
                        messageDisplay.style.color = 'green'
                        numberDisplay.innerHTML = 0
                        numbersPair.push(num)
                    } 
                } if(num % 2 != 0){
                    if(numbersOdd.lastIndexOf(num) != -1){
                        messageDisplay.innerHTML = `Número ${num} já adicionado`
                        messageDisplay.style.color = 'red'
                        numberDisplay.innerHTML = 0
                    } else{
                        messageDisplay.innerHTML = `Número ${num} adicionado`
                        messageDisplay.style.color = 'green'
                        numberDisplay.innerHTML = 0
                        numbersOdd.push(num)
                    }
                }

                // reseting for the new number after adding
                numberArray = []
                numbersList = []
                break;

            case 'erase':
                messageDisplay.innerHTML = `Número ${numbersList} apagado`
                messageDisplay.style.color = 'slategray'

                //reseting for the new number after erasing
                numberDisplay.innerHTML = 0
                numberArray = []
                numbersList = []
                break;
            
            default:
                break;
        }
    })
    
});


// event for showing the results
let resultButton = document.getElementById('add__number')
let fatherPair = document.getElementById('numbersPair__list')
let fatherOdd = document.getElementById('numbersOdd__list')


resultButton.addEventListener('click', ()=>{
    // pair numbers
    fatherPair.innerHTML = 'Números Pares'
    fatherPair.style.fontWeight = '700'

    numbersPair.forEach(n => {
        let pairLi = document.createElement('li')
        pairLi.classList.add('li-dinamic')
        pairLi.innerHTML = n
        fatherPair.appendChild(pairLi)
    });

    // odd numbers
    fatherOdd.innerHTML = 'Números Ímpares'
    fatherOdd.style.fontWeight = '700'

    numbersOdd.forEach(element => {
        let oddLi = document.createElement('li')
        oddLi.classList.add('li-dinamic')
        oddLi.innerHTML = element
        fatherOdd.appendChild(oddLi)
    });

    
})

// event cleaning the data
let eraseData = document.getElementById("erase__alldata")

eraseData.addEventListener('click', ()=>{
    numbersOdd = []
    numbersPair = []

    let dinamicOdd = document.querySelectorAll('.odd-dinamic')
    dinamicOdd.forEach(li => {
        li.innerHTML = ''
    })
    fatherOdd.innerHTML = ''

    let dinamicPair = document.querySelectorAll('li-dinamic')
    dinamicPair.forEach(item =>{
        item.innerHTML = ''
    })
    fatherPair.innerHTML = ''

    messageDisplay.innerHTML = 'Digite um número...'
    messageDisplay.style.color = 'slategray'

    // search input
    let search = document.getElementById('search__number')
    search.value = ''
})


// event searching the number
let search = document.getElementById('search__number')
let searchButton = document.getElementById('search_button')
let warner = document.getElementById('modal__alert')
let closeWarner = document.getElementById('close__modal')




    

searchButton.addEventListener('click', ()=>{
    let searchNumber = parseInt(search.value)
    let dinamicLi = document.querySelectorAll('.li-dinamic')
    let modalTrigger = ''
    
    dinamicLi.forEach(item =>{
        let num = item.innerHTML
        if(num == searchNumber){
            item.style.backgroundColor = '#AA5FFF'
            item.style.fontWeight = '700'
            modalTrigger = 'invalid'
        } else{
            item.style.backgroundColor = 'transparent'
            item.style.fontWeight = '500'
        }
    });

    if(modalTrigger != 'invalid'){
        warner.style.display = 'flex'
        closeWarner.addEventListener('click', ()=>{
            warner.style.display = 'none'
        })
    }

    search.focus()

})
    



