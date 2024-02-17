const myButton = document.querySelectorAll("#add-Card");
const cards = document.querySelectorAll('.card');

let count = 1;
let NewPrize = 0;
let myPrize;
let grandTotalPrize;
let discountNetAmount;
const myArray = [];

for (let card of myButton) {
    const element = card;
    element.addEventListener('click', (event) => {

        let title = element.parentNode.childNodes[4].innerHTML;
        let placeMentTitle = document.getElementById('title-container');

        let Prize = parseFloat(element.parentNode.childNodes[6].innerText.split(" ")[1]);
        console.log(Prize);
        let p = document.createElement('p');
        p.innerHTML = count + "." + title;
        placeMentTitle.appendChild(p);
        let myPrize = NewPrize += Prize;
        grandTotalPrize = myPrize;
        let placeMentPrize = document.getElementById('totalPrice');
        placeMentPrize.innerHTML = myPrize;

        CardCount();
        count++
        // myArray.push(element.parentNode);
        myArray.push(element.parentNode.parentNode.parentNode);


    });

}

function ApplyDiscount() {

    if (NewPrize >= 200) {

        let promoCode = "SELL200";
        let disInput = document.getElementById('input-field').value.toUpperCase();
        if (promoCode == disInput) {

            let discountAmount = NewPrize * 20 / 100;
            let netAmount = NewPrize - discountAmount;
            let disPlacement = document.getElementById('discountPrice');
            let netAmountPlacement = document.getElementById('total');
            disPlacement.innerHTML = discountAmount;
            netAmountPlacement.innerHTML = netAmount;

            document.getElementById('card-total-amount').innerHTML = netAmount;
        }

    } else {
        alert("please Sell Up 200");
    }
}




let purse = document.getElementById('Puchess');

purse.addEventListener('click', function () {

    if (NewPrize >= 200) {

        let mainContent = document.getElementById('allContant');
        mainContent.classList.add('hidden');
        let congressCard = document.getElementById('myCongressCard');
        congressCard.classList.remove('hidden');
    } else {
    }
});

function CardCount() {
    let cartText = document.getElementById('cart-cunt');
    cartText.innerHTML = count;

    let viewCartC = document.getElementById('Card-count-item')
    viewCartC.innerHTML = count;

    document.getElementById('card-total-amount').innerHTML = grandTotalPrize;

}

function viewCard() {

    if (count >= 1) {
        // swal("Good job!", "You clicked the button!", "success");      sweet alert;
        let sectionHeaders= document.querySelectorAll('#section-head');
        for( let header of sectionHeaders){
         header.classList.add('hidden');
        }

        for (let element of cards){
            element.classList.add('hidden');
        
        }
           
        for (let element of myArray) {
            element.childNodes[3].childNodes[3].childNodes[0].classList.add('hidden');
            element.classList.remove('hidden');
         element.childNodes[3].childNodes[3].childNodes[2].classList.remove('hidden');
         
        }
    }

}