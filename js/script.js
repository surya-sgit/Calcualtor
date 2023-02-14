class Calculator{

    constructor(previousDisplay,currentDisplay){
        this.previousDisplay = previousDisplay;
        this.currentDisplay = currentDisplay;
        this.clear()
    }
    clear(){
        this.currentdisplay =''
        this.previousdisplay=''
        this.operation=undefined
    }
    delete(){
        this.currentdisplay=this.currentdisplay.toString().slice(0,-1)
        

    }
    appendnum(number){
        if (number =='.' && this.currentdisplay.includes('.')) return
        this.currentdisplay = this.currentdisplay.toString() + number.toString()


    }
    selectoperation(operation){
        if(this.currentdisplay=='') return
        if(this.previousdisplay!=''){
            this.compute()
        }
        this.operation = operation
        this.previousdisplay = this.currentdisplay
        this.currentdisplay=''

    }
    compute(){
        let calculation
        const previous = parseFloat(this.previousdisplay)
        const current = parseFloat(this.currentdisplay)
        if(isNaN(previous) || isNaN(current)) return
        switch(this.operation){
            case '+':
                calculation=previous+current
                break
            case '-':
                calculation=previous-current
                break
            case '*':
                calculation=previous*current
                break
            case '/':
                calculation=previous/current
                break
            default:
                return
        }
        this.currentdisplay=calculation
        this.operation=undefined
        this.previousdisplay=''

    }
    updatedisplay(){
        this.currentDisplay.innerText=this.currentdisplay
        this.previousDisplay.innerText=this.previousdisplay
    }
}


const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const deleteButton = document.querySelector('[data-delete]')
const allclearButton = document.querySelector('[data-all-clear]')
const equalsButton = document.querySelector('[data-equals]')
const previousDisplay = document.querySelector('[data-previous-operand]')
const currentDisplay = document.querySelector('[data-current-operand]')

const calci = new Calculator(previousDisplay,currentDisplay)
numberButtons.forEach(button=>{
    button.addEventListener('click',()=>{
        calci.appendnum(button.innerText)
        calci.updatedisplay()
    })
})
operationButtons.forEach(button=>{
    button.addEventListener('click',()=>{
        calci.selectoperation(button.innerText)
        calci.updatedisplay()
    })
})
equalsButton.addEventListener('click',()=>{
    calci.compute()
    calci.updatedisplay()
})
allclearButton.addEventListener('click',()=>{
    calci.clear()
    calci.updatedisplay()
})
deleteButton.addEventListener('click',()=>{
    calci.delete()
    calci.updatedisplay()
})
