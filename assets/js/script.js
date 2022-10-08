
const button = document.getElementById('widget-btn');
isOpen = true
function showMenu() {

    if(isOpen == true){
        button.style.right = '0'
        isOpen = false

    }
    else if(isOpen == false){
        button.style.right = '-20rem'
        isOpen = true

    }

}
console.log(button);