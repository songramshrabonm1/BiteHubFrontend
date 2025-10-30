
document.getElementById('submit').addEventListener('click',function(){
    let namee = document.getElementById('name').value ; 
let review = document.getElementById('review').value;
let rating =parseInt(document.getElementById('rating').value);

console.log('Name: ',namee);
console.log('review',review);
console.log('rating',rating);



const fstDiv = document.createElement('div');
fstDiv.classList.add('carousel-item');

const secondDiv = document.createElement('div');
secondDiv.classList.add('card');
secondDiv.classList.add('border-5');
secondDiv.classList.add('shadow-lg');
secondDiv.classList.add('container');

secondDiv.style.backgroundColor = '#F9F2E6';

// fstDiv.appendChild(secondDiv);


let thrdDiv = document.createElement('div');
thrdDiv.classList.add('card-body');

let h55 = document.createElement('h5');
h55.classList.add('card-title');
h55.innerText = namee;

let paragraph = document.createElement('p');
paragraph.classList.add('card-text');
paragraph.innerText = review;

let paragraph2 = document.createElement('p');
paragraph2.classList.add('text-warning');
if(rating == 1){
    paragraph2.innerText = 'Rating: ★☆☆☆☆';

}else if(rating == 2){
    paragraph2.innerText = 'Rating: ★★☆☆☆';

}else if(rating == 3){
    paragraph2.innerText = 'Rating: ★★★☆☆';

}else if(rating == 4){
    paragraph2.innerText = 'Rating: ★★★★☆';

}else{
    paragraph2.innerText = 'Rating: ★★★★★';

}

thrdDiv.appendChild(h55);
thrdDiv.appendChild(paragraph);
thrdDiv.appendChild(paragraph2);


secondDiv.appendChild(thrdDiv);

fstDiv.appendChild(secondDiv);

const parentDiv = document.getElementById('parentDiv');
parentDiv.appendChild(fstDiv);

});