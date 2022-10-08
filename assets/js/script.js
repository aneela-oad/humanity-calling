
const button = document.getElementById('widget-btn');
const showPrice = document.getElementById('showPrice');
const priceBtns = document.querySelectorAll('.price')

isOpen = false
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

// for (var i = 0; i < priceBtns.length; i++) {
//     priceBtns[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//     console.log('yo');

//     });
//   }
function selectValue(int){

    showPrice.value = int
}

