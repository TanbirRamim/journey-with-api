const main = document.getElementById('main');

const searchButton = () => {
    const input = document.getElementById('input-value');
    const inputValue = parseInt(input.value);
    const error = document.getElementById('error')
    if(isNaN(inputValue) || inputValue == ''){
        // alert('Please Enter a Number')
        error.innerText = 'dhuru, number deo miya!';
        input.value='';
    }
    else if (inputValue <=0){
        error.innerText = 'Tomar mon eto choto keno? boro number deo!';
        input.value = '';
    }
    else if( inputValue >52 ){
        error.innerText = 'Eto dil doriya hoia laav nai, card ase 52 ta. Er vitore den';
        input.value = '';
    }
    else{
        fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count= ${inputValue}`)
        .then(res => res.json())
        .then(data => cardsDisplay(data.cards))
        input.value= '';
    }
    
}
const cardsDisplay = (cards) =>{
    console.log(cards)
    for (const card of cards){
        console.log(card.image)
        const div = document.createElement("div");
        div.classList.add("text-center");
        div.classList.add("mb-5");
        div.innerHTML = `
        <div class="card" style="width: 18rem;">
        <img src="${card.image}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>
        `
        main.appendChild(div);
    }
}