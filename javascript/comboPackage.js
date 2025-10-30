document.getElementById('minIcrementFstPlatter').addEventListener('click',function(){
    var cnt = document.getElementById('fstPlatter').innerText;

    cnt = parseInt(cnt);

    if(cnt>0){
        cnt--;
        document.getElementById('fstPlatter').innerText = cnt;
       
        let tp = cnt * parseInt(document.getElementById('priceFstPlatter').innerText);
        document.getElementById('priceFstPlatterAll').innerText = tp;

        document.getElementById('preeetag').style.display = 'none';



        document.getElementById('fstPlatterBtn').style.display='block';


        if(cnt==0){
            document.getElementById('preeetag').style.display='block';

            document.getElementById('fstPlatterBtn').style.display='none';
        }


        
    }else if(cnt==0){

        let tp = cnt * parseInt(document.getElementById('priceFstPlatter').innerText);
        document.getElementById('priceFstPlatterAll').innerText = tp;


        document.getElementById('preeetag').style.display='block';

        document.getElementById('fstPlatterBtn').style.display='none';
    }
});

document.getElementById('plusFstPlatter').addEventListener('click',function(){
    var cnt = parseInt( document.getElementById('fstPlatter').innerText) + 1;

    let tp = cnt * parseInt(document.getElementById('priceFstPlatter').innerText);
    document.getElementById('priceFstPlatterAll').innerText = tp;


    document.getElementById('fstPlatter').innerText = cnt ;
    
    if(cnt> 0 ){



        document.getElementById('preeetag').style.display = 'none';

        document.getElementById('fstPlatterBtn').style.display='block';
    }

});


// document.getElementById('fstPlatterBtn').onclick = clickingBtn;
document.getElementById('fstPlatterBtn').addEventListener('click' , function(){
        let button = document.getElementById('fstPlatterBtn').parentNode.parentNode;
        const imageDiv = button.firstElementChild;
        console.log('image',imageDiv);
        const img = imageDiv.querySelector('img');
        console.log(img);

        document.getElementById('priceFstPlatterAll').innerText = 0 ; 
    
        const title = document.getElementById('fstPlatterBtn').parentNode.firstElementChild.firstElementChild.innerText;
       
        
        const price =  document.getElementById('priceFstPlatter').innerText ;
        
        const howMany = document.getElementById('fstPlatter').innerText;
        
        document.getElementById('fstPlatter').innerText = 0 ; 
        
        
        console.log('title : ',title);
        console.log('Price: ',price);
        console.log('homMany : ', howMany);


        addtoCart(img,title,price , howMany);
    
    
        const li = document.createElement('li');
    
        const images = img.cloneNode(true);
        li.appendChild(images);
        const div = document.createElement('div');
        div.classList.add('card-details');
    
    
    
    
        const Title  = document.createElement('h3');
         Title.innerText = title;
        const Price = document.createElement('p');
        Price.innerText = price;
        // Price = price;
        Price.classList.add('price');
        const Total = document.createElement('p');
        Total.innerText = 'Total price for this package: ';
        const strongTag = document.createElement('strong');
    
        const TotalAmount = parseInt(howMany) * parseInt(price);
        console.log('ParseInteger Howmany: ',parseInt(howMany));
        console.log('parseInt Price: ', parseInt(price));
        console.log('TotalAmount : ' , TotalAmount);
        strongTag.innerText = TotalAmount ; 
        Total.appendChild(strongTag);
        
        div.appendChild(Title);
        div.appendChild(Price);
        div.appendChild(Total);
    
        li.appendChild(div);
    
        console.log(li); 
        
        

        // addtoCart(li);

    
});

// 









// function addtoCart(img,title,price , howMany){
//     const cartList = document.getElementById('cartList');


//     const li = document.createElement('li');
//     li.classList.add('subscription-card'); // li-তে class যোগ করছি

//     let imge = document.createElement('img');
//     imge = img.cloneNode(true);
//     imge.classList.add('card-img');


//      // ৪। div তৈরি করছি যেটার মধ্যে ডিটেইলস থাকবে
//      const div = document.createElement('div');
//      div.classList.add('card-details');

//      // ৫। title এর জন্য একটি h3 তৈরি করছি
//     const Title = document.createElement('h3');
//     Title.innerText = title; // title সেট করছি



//     // ৬। price এর জন্য একটি p তৈরি করছি
//     const Price = document.createElement('p');
//     Price.innerText = `$${price}`; // price সেট করছি
//     Price.classList.add('price'); // class যোগ করছি


//         // ৭। Total price এর জন্য একটি p তৈরি করছি
//         const Total = document.createElement('p');
//         Total.innerText = 'Total price for this package: ';
        
//         const strongTag = document.createElement('strong');
//         strongTag.innerText = `$${parseInt(price) * parseInt(howMany)}`; // Total price হিসেব করছি
//         Total.appendChild(strongTag); // strong tag টি Total এর সাথে যোগ করছি


//             // ৮। ডিটেইলস div এর মধ্যে সব ডিটেইলস (title, price, total) যোগ করছি
//     div.appendChild(Title);
//     div.appendChild(Price);
//     div.appendChild(Total);

//     // ৯। li এর মধ্যে img এবং ডিটেইলস div যোগ করছি
//     li.appendChild(img);
//     li.appendChild(div);

//     // ১০। ul (cartList) এর মধ্যে li যোগ করছি
//     cartList.appendChild(li);

//     // document.getElementById('cartList').appendChild(li);
// }





//************* */ 2nd palatter combo *************

document.getElementById('minIcrementSecPlatter').addEventListener('click',function(){
    var cnt = document.getElementById('secPlatter').innerText;

    cnt = parseInt(cnt);

    if(cnt>0){
        cnt--;
        document.getElementById('secPlatter').innerText = cnt;
       
       
        document.getElementById('priceSecPlatterAll').innerText = cnt * parseInt(document.getElementById('priceSecPlatter').innerText);


        document.getElementById('preeetagSEC').style.display = 'none';



        document.getElementById('SecPlatterBtn').style.display='block';


        if(cnt==0){

            document.getElementById('priceSecPlatterAll').innerText = cnt * parseInt(document.getElementById('priceSecPlatter').innerText);

            document.getElementById('preeetagSEC').style.display='block';

            document.getElementById('SecPlatterBtn').style.display='none';
        }


        
    }else if(cnt==0){
        document.getElementById('priceSecPlatterAll').innerText = cnt * parseInt(document.getElementById('priceSecPlatter').innerText);


        document.getElementById('preeetagSEC').style.display='block';

        document.getElementById('SecPlatterBtn').style.display='none';
    }
});

document.getElementById('plusSecPlatter').addEventListener('click',function(){
    var cnt = parseInt( document.getElementById('secPlatter').innerText) + 1;

    document.getElementById('priceSecPlatterAll').innerText = cnt * parseInt(document.getElementById('priceSecPlatter').innerText);


    document.getElementById('secPlatter').innerText = cnt ;
    
    if(cnt> 0 ){
        document.getElementById('preeetagSEC').style.display = 'none';

        document.getElementById('SecPlatterBtn').style.display='block';
    }

});


// document.getElementById('fstPlatterBtn').onclick = clickingBtn;
document.getElementById('SecPlatterBtn').addEventListener('click' , function(){
        let button = document.getElementById('SecPlatterBtn').parentNode.parentNode;
        const imageDiv = button.firstElementChild;
        console.log('image',imageDiv);
        const img = imageDiv.querySelector('img');
        console.log(img);

        document.getElementById('priceSecPlatterAll').innerText = 0;

    
        const title = document.getElementById('SecPlatterBtn').parentNode.firstElementChild.firstElementChild.innerText;
       
        
        const price =  document.getElementById('priceSecPlatter').innerText ;
        
        const howMany = document.getElementById('secPlatter').innerText;
        
        document.getElementById('secPlatter').innerText = 0 ; 
        
        
        console.log('title : ',title);
        console.log('Price: ',price);
        console.log('homMany : ', howMany);


        addtoCart(img,title,price , howMany);
    
    
        const li = document.createElement('li');
    
        const images = img.cloneNode(true);
        li.appendChild(images);
        const div = document.createElement('div');
        div.classList.add('card-details');
        // addtoCart(li);
});
// 2nd Platter End 


//********************* */ 3rd Platter Start *****************
document.getElementById('minIcrementThrdPlatter').addEventListener('click',function(){
    var cnt = document.getElementById('ThrdPlatterCnt').innerText;

    cnt = parseInt(cnt);

    if(cnt>0){
        cnt--;
        document.getElementById('ThrdPlatterCnt').innerText = cnt;
       
       
        document.getElementById('ThirdTotalPlater').innerText = cnt * parseInt(document.getElementById('thrdPlatterPrice').innerText);


        document.getElementById('preeetag3').style.display = 'none';



        document.getElementById('thrdPlatterBtn').style.display='block';


        if(cnt==0){

            document.getElementById('ThirdTotalPlater').innerText = cnt * parseInt(document.getElementById('thrdPlatterPrice').innerText);

            document.getElementById('preeetag3').style.display='block';

            document.getElementById('thrdPlatterBtn').style.display='none';
        }


        
    }else if(cnt==0){
        document.getElementById('ThirdTotalPlater').innerText = cnt * parseInt(document.getElementById('thrdPlatterPrice').innerText);


        document.getElementById('preeetag3').style.display='block';

        document.getElementById('thrdPlatterBtn').style.display='none';
    }
});

document.getElementById('plusThrdPlatter').addEventListener('click',function(){
    var cnt = parseInt( document.getElementById('ThrdPlatterCnt').innerText) + 1;

    document.getElementById('ThirdTotalPlater').innerText = cnt * parseInt(document.getElementById('thrdPlatterPrice').innerText);


    document.getElementById('ThrdPlatterCnt').innerText = cnt ;
    
    if(cnt> 0 ){
        document.getElementById('preeetag3').style.display = 'none';

        document.getElementById('thrdPlatterBtn').style.display='block';
    }

});


// document.getElementById('fstPlatterBtn').onclick = clickingBtn;
document.getElementById('thrdPlatterBtn').addEventListener('click' , function(){
        let button = document.getElementById('thrdPlatterBtn').parentNode.parentNode;
        const imageDiv = button.firstElementChild;
        console.log('image',imageDiv);
        const img = imageDiv.querySelector('img');
        console.log(img);

        document.getElementById('ThirdTotalPlater').innerText = 0;

    
        const title = document.getElementById('thrdPlatterBtn').parentNode.firstElementChild.firstElementChild.innerText;
       
        
        const price =  document.getElementById('priceSecPlatter').innerText ;
        
        const howMany = document.getElementById('ThrdPlatterCnt').innerText;
        
        document.getElementById('ThrdPlatterCnt').innerText = 0 ; 
        
        
        console.log('title : ',title);
        console.log('Price: ',price);
        console.log('homMany : ', howMany);


        addtoCart(img,title,price , howMany);
    
    
        const li = document.createElement('li');
    
        const images = img.cloneNode(true);
        li.appendChild(images);
        const div = document.createElement('div');
        div.classList.add('card-details');
        // addtoCart(li);
});
//********************* */ 3rd Platter Start *****************


//********************* */ 4th Platter Start *****************
document.getElementById('minIcrementfrthPlatter').addEventListener('click',function(){
    var cnt = document.getElementById('frthPlattercnt').innerText;

    cnt = parseInt(cnt);

    if(cnt>0){
        cnt--;
        document.getElementById('frthPlattercnt').innerText = cnt;  
       
        document.getElementById('frthTotalPlater').innerText = cnt * parseInt(document.getElementById('frthPlatterPrice').innerText);

        document.getElementById('preeetagfrth').style.display = 'none';

        document.getElementById('frtPlatterBtn').style.display='block';


        if(cnt==0){

            document.getElementById('frthTotalPlater').innerText = cnt * parseInt(document.getElementById('frthPlatterPrice').innerText);

            document.getElementById('preeetagfrth').style.display='block';

            document.getElementById('frtPlatterBtn').style.display='none';
        }
        
    }else if(cnt==0){
        document.getElementById('frthTotalPlater').innerText = cnt * parseInt(document.getElementById('frthPlatterPrice').innerText);
        document.getElementById('preeetagfrth').style.display='block';

        document.getElementById('frtPlatterBtn').style.display='none';
    }
});
document.getElementById('plusFrthPlatter').addEventListener('click',function(){
    var cnt = parseInt( document.getElementById('frthPlattercnt').innerText) + 1;

    document.getElementById('frthTotalPlater').innerText = cnt * parseInt(document.getElementById('frthPlatterPrice').innerText);


    document.getElementById('frthPlattercnt').innerText = cnt ;
    
    if(cnt> 0 ){
        document.getElementById('preeetagfrth').style.display = 'none';

        document.getElementById('frtPlatterBtn').style.display='block';
    }

});
// document.getElementById('fstPlatterBtn').onclick = clickingBtn;
document.getElementById('frtPlatterBtn').addEventListener('click' , function(){
        let button = document.getElementById('frtPlatterBtn').parentNode.parentNode;

        document.getElementById('frthTotalPlater').innerText = 0;

        const price =  document.getElementById('frthPlatterPrice').innerText ;
        
        const howMany = document.getElementById('frthPlattercnt').innerText;

        document.getElementById('frthPlattercnt').innerText = 0 ; 
        
});
//********************* */ 4th Platter Start *****************

//********************* */ 5th Platter Start *****************
document.getElementById('minIcrementFifPlatter').addEventListener('click',function(){
    var cnt = document.getElementById('fifPlattercnt').innerText;

    cnt = parseInt(cnt);

    if(cnt>0){
        cnt--;
        document.getElementById('fifPlattercnt').innerText = cnt;  
       
        document.getElementById('fifthTotalPlater').innerText = cnt * parseInt(document.getElementById('fifthPlatterPrice').innerText);

        document.getElementById('preeetagfif').style.display = 'none';

        document.getElementById('fifPlatterBtn').style.display='block';


        if(cnt==0){

            document.getElementById('frthTotalPlater').innerText = cnt * parseInt(document.getElementById('frthPlatterPrice').innerText);

            document.getElementById('preeetagfif').style.display='block';

            document.getElementById('fifPlatterBtn').style.display='none';
        }
        
    }else if(cnt==0){
        document.getElementById('frthTotalPlater').innerText = cnt * parseInt(document.getElementById('frthPlatterPrice').innerText);
        document.getElementById('preeetagfif').style.display='block';

        document.getElementById('fifPlatterBtn').style.display='none';
    }
});
document.getElementById('plusFifPlatter').addEventListener('click',function(){
    var cnt = parseInt( document.getElementById('fifPlattercnt').innerText) + 1;

    document.getElementById('fifthTotalPlater').innerText = cnt * parseInt(document.getElementById('fifthPlatterPrice').innerText);


    document.getElementById('fifPlattercnt').innerText = cnt ;
    
    if(cnt> 0 ){
        document.getElementById('preeetagfif').style.display = 'none';

        document.getElementById('fifPlatterBtn').style.display='block';
    }

});
// document.getElementById('fstPlatterBtn').onclick = clickingBtn;
document.getElementById('fifPlatterBtn').addEventListener('click' , function(){
        let button = document.getElementById('fifPlatterBtn').parentNode.parentNode;

        
        const price =  document.getElementById('fifthPlatterPrice').innerText ;
        
        const howMany = document.getElementById('fifPlattercnt').innerText;
        
        document.getElementById('fifPlattercnt').innerText = 0 ; 
        
        document.getElementById('fifthTotalPlater').innerText = 0;
});
//********************* */ 5th Platter Start *****************


//********************* */ 6th Platter Start *****************
document.getElementById('minIcrementsixPlatter').addEventListener('click',function(){
    var cnt = document.getElementById('sixPlattercnt').innerText;

    cnt = parseInt(cnt);

    if(cnt>0){
        cnt--;
        document.getElementById('sixPlattercnt').innerText = cnt;  
       
        document.getElementById('sixTotalPlater').innerText = cnt * parseInt(document.getElementById('sixPlatterPrice').innerText);

        document.getElementById('preeetagsix').style.display = 'none';

        document.getElementById('sixPlatterBtn').style.display='block';


        if(cnt==0){

            document.getElementById('sixTotalPlater').innerText = cnt * parseInt(document.getElementById('sixPlatterPrice').innerText);

            document.getElementById('preeetagsix').style.display='block';

            document.getElementById('sixPlatterBtn').style.display='none';
        }
        
    }else if(cnt==0){
        document.getElementById('sixTotalPlater').innerText = cnt * parseInt(document.getElementById('sixPlatterPrice').innerText);
        document.getElementById('preeetagsix').style.display='block';

        document.getElementById('sixPlatterBtn').style.display='none';
    }
});
document.getElementById('plusixPlatter').addEventListener('click',function(){
    var cnt = parseInt( document.getElementById('sixPlattercnt').innerText) + 1;

    document.getElementById('sixTotalPlater').innerText = cnt * parseInt(document.getElementById('sixPlatterPrice').innerText);


    document.getElementById('sixPlattercnt').innerText = cnt ;
    
    if(cnt> 0 ){
        document.getElementById('preeetagsix').style.display = 'none';

        document.getElementById('sixPlatterBtn').style.display='block';
    }

});
// document.getElementById('fstPlatterBtn').onclick = clickingBtn;
document.getElementById('sixPlatterBtn').addEventListener('click' , function(){
        let button = document.getElementById('sixPlatterBtn').parentNode.parentNode;

        
        const price =  document.getElementById('sixPlatterPrice').innerText ;
        
        const howMany = document.getElementById('sixPlattercnt').innerText;
        
        document.getElementById('sixPlattercnt').innerText = 0 ; 
        
        document.getElementById('sixTotalPlater').innerText = 0;
});
//********************* */ 6th Platter Start *****************


//********************* */ 7th Platter Start *****************
document.getElementById('minIcrementsevPlatter').addEventListener('click',function(){
    var cnt = document.getElementById('sevPlattercnt').innerText;

    cnt = parseInt(cnt);

    if(cnt>0){
        cnt--;
        document.getElementById('sevPlattercnt').innerText = cnt;  
       
        document.getElementById('sevTotalPlater').innerText = cnt * parseInt(document.getElementById('sevPlatterPrice').innerText);

        document.getElementById('preeetagsev').style.display = 'none';

        document.getElementById('sevPlatterBtn').style.display='block';


        if(cnt==0){

            document.getElementById('sevTotalPlater').innerText = cnt * parseInt(document.getElementById('sevPlatterPrice').innerText);

            document.getElementById('preeetagsev').style.display='block';

            document.getElementById('sevPlatterBtn').style.display='none';
        }
        
    }else if(cnt==0){
        document.getElementById('sevTotalPlater').innerText = cnt * parseInt(document.getElementById('sevPlatterPrice').innerText);
        document.getElementById('preeetagsev').style.display='block';

        document.getElementById('sevPlatterBtn').style.display='none';
    }
});
document.getElementById('plussevPlatter').addEventListener('click',function(){
    var cnt = parseInt( document.getElementById('sevPlattercnt').innerText) + 1;

    document.getElementById('sevTotalPlater').innerText = cnt * parseInt(document.getElementById('sevPlatterPrice').innerText);


    document.getElementById('sevPlattercnt').innerText = cnt ;
    
    if(cnt> 0 ){
        document.getElementById('preeetagsev').style.display = 'none';

        document.getElementById('sevPlatterBtn').style.display='block';
    }

});
// document.getElementById('fstPlatterBtn').onclick = clickingBtn;
document.getElementById('sevPlatterBtn').addEventListener('click' , function(){
        let button = document.getElementById('sevPlatterBtn').parentNode.parentNode;

        
        const price =  document.getElementById('sevPlatterPrice').innerText ;
        
        const howMany = document.getElementById('sevPlattercnt').innerText;
        
        document.getElementById('sevPlattercnt').innerText = 0 ; 
        
        document.getElementById('sevTotalPlater').innerText = 0;
});
//********************* */ 7th Platter Start *****************


//********************* */ 8th Platter Start *****************
document.getElementById('minIcrementeightPlatter').addEventListener('click',function(){
    var cnt = document.getElementById('eightPlattercnt').innerText;

    cnt = parseInt(cnt);

    if(cnt>0){
        cnt--;
        document.getElementById('eightPlattercnt').innerText = cnt;  
       
        document.getElementById('eightTotalPlater').innerText = cnt * parseInt(document.getElementById('eightPlatterPrice').innerText);

        document.getElementById('preeetageight').style.display = 'none';

        document.getElementById('eightPlatterBtn').style.display='block';


        if(cnt==0){

            document.getElementById('eightTotalPlater').innerText = cnt * parseInt(document.getElementById('eightPlatterPrice').innerText);

            document.getElementById('preeetageight').style.display='block';

            document.getElementById('eightPlatterBtn').style.display='none';
        }
        
    }else if(cnt==0){
        document.getElementById('eightTotalPlater').innerText = cnt * parseInt(document.getElementById('eightPlatterPrice').innerText);
        document.getElementById('eightpreeetag').style.display='block';

        document.getElementById('eightPlatterBtn').style.display='none';
    }
});
document.getElementById('pluseightPlatter').addEventListener('click',function(){
    var cnt = parseInt( document.getElementById('eightPlattercnt').innerText) + 1;

    document.getElementById('eightTotalPlater').innerText = cnt * parseInt(document.getElementById('eightPlatterPrice').innerText);


    document.getElementById('eightPlattercnt').innerText = cnt ;
    
    if(cnt> 0 ){
        document.getElementById('eightpreeetag').style.display = 'none';

        document.getElementById('eightPlatterBtn').style.display='block';
    }

});
// document.getElementById('fstPlatterBtn').onclick = clickingBtn;
document.getElementById('eightPlatterBtn').addEventListener('click' , function(){
        let button = document.getElementById('eightPlatterBtn').parentNode.parentNode;

        
        const price =  document.getElementById('eightPlatterPrice').innerText ;
        
        const howMany = document.getElementById('eightPlattercnt').innerText;
        
        document.getElementById('eightPlattercnt').innerText = 0 ; 
        
        document.getElementById('eightTotalPlater').innerText = 0;
});
//********************* */ 8th Platter Start *****************


//********************* */ 9th Platter Start *****************
document.getElementById('minIcrementninPlatter').addEventListener('click',function(){
    var cnt = document.getElementById('ninPlattercnt').innerText;

    cnt = parseInt(cnt);

    if(cnt>0){
        cnt--;
        document.getElementById('ninPlattercnt').innerText = cnt;  
       
        document.getElementById('ninTotalPlater').innerText = cnt * parseInt(document.getElementById('ninPlatterPrice').innerText);

        document.getElementById('preeetagnin').style.display = 'none';

        document.getElementById('ninPlatterBtn').style.display='block';


        if(cnt==0){

            document.getElementById('ninTotalPlater').innerText = cnt * parseInt(document.getElementById('ninPlatterPrice').innerText);

            document.getElementById('preeetagnin').style.display='block';

            document.getElementById('ninPlatterBtn').style.display='none';
        }
        
    }else if(cnt==0){
        document.getElementById('ninTotalPlater').innerText = cnt * parseInt(document.getElementById('ninPlatterPrice').innerText);
        document.getElementById('ninpreeetag').style.display='block';

        document.getElementById('ninPlatterBtn').style.display='none';
    }
});
document.getElementById('plusninPlatter').addEventListener('click',function(){
    var cnt = parseInt( document.getElementById('ninPlattercnt').innerText) + 1;

    document.getElementById('ninTotalPlater').innerText = cnt * parseInt(document.getElementById('ninPlatterPrice').innerText);


    document.getElementById('ninPlattercnt').innerText = cnt ;
    
    if(cnt> 0 ){
        document.getElementById('preeetagnin').style.display = 'none';

        document.getElementById('ninPlatterBtn').style.display='block';
    }

});
// document.getElementById('fstPlatterBtn').onclick = clickingBtn;
document.getElementById('ninPlatterBtn').addEventListener('click' , function(){
        let button = document.getElementById('ninPlatterBtn').parentNode.parentNode;

        
        const price =  document.getElementById('ninPlatterPrice').innerText ;
        
        const howMany = document.getElementById('ninPlattercnt').innerText;
        
        document.getElementById('ninPlattercnt').innerText = 0 ; 
        
        document.getElementById('ninTotalPlater').innerText = 0;
});
//********************* */ 9th Platter Start *****************


//********************* */ 10th Platter Start *****************
document.getElementById('minIcrementtnPlatter').addEventListener('click',function(){
    var cnt = document.getElementById('tnPlattercnt').innerText;

    cnt = parseInt(cnt);

    if(cnt>0){
        cnt--;
        document.getElementById('tnPlattercnt').innerText = cnt;  
       
        document.getElementById('tnTotalPlater').innerText = cnt * parseInt(document.getElementById('tnPlatterPrice').innerText);

        document.getElementById('preeetagtn').style.display = 'none';

        document.getElementById('tnPlatterBtn').style.display='block';


        if(cnt==0){

            document.getElementById('tnTotalPlater').innerText = cnt * parseInt(document.getElementById('tnPlatterPrice').innerText);

            document.getElementById('preeetagtn').style.display='block';

            document.getElementById('tnPlatterBtn').style.display='none';
        }
        
    }else if(cnt==0){
        document.getElementById('tnTotalPlater').innerText = cnt * parseInt(document.getElementById('tnPlatterPrice').innerText);
        document.getElementById('preeetagtn').style.display='block';

        document.getElementById('tnPlatterBtn').style.display='none';
    }
});
document.getElementById('plustnPlatter').addEventListener('click',function(){
    var cnt = parseInt( document.getElementById('tnPlattercnt').innerText) + 1;

    document.getElementById('tnTotalPlater').innerText = cnt * parseInt(document.getElementById('tnPlatterPrice').innerText);


    document.getElementById('tnPlattercnt').innerText = cnt ;
    
    if(cnt> 0 ){
        document.getElementById('preeetagtn').style.display = 'none';

        document.getElementById('tnPlatterBtn').style.display='block';
    }

});
// document.getElementById('fstPlatterBtn').onclick = clickingBtn;
document.getElementById('tnPlatterBtn').addEventListener('click' , function(){
        let button = document.getElementById('tnPlatterBtn').parentNode.parentNode;

        
        const price =  document.getElementById('tnPlatterPrice').innerText ;
        
        const howMany = document.getElementById('tnPlattercnt').innerText;
        
        document.getElementById('tnPlattercnt').innerText = 0 ; 
        
        document.getElementById('tnTotalPlater').innerText = 0;
});
//********************* */ 10th Platter Start *****************


//********************* */ 11th Platter Start *****************
document.getElementById('IcrementelPlatter').addEventListener('click',function(){
    var cnt = document.getElementById('elPlattercnt').innerText;

    cnt = parseInt(cnt);

    if(cnt>0){
        cnt--;
        document.getElementById('elPlattercnt').innerText = cnt;  
       
        document.getElementById('elTotalPlater').innerText = cnt * parseInt(document.getElementById('elPlatterPrice').innerText);

        document.getElementById('preeetagel').style.display = 'none';

        document.getElementById('elPlatterBtn').style.display='block';


        if(cnt==0){

            document.getElementById('elTotalPlater').innerText = cnt * parseInt(document.getElementById('elPlatterPrice').innerText);

            document.getElementById('preeetagel').style.display='block';

            document.getElementById('elPlatterBtn').style.display='none';
        }
        
    }else if(cnt==0){
        document.getElementById('elTotalPlater').innerText = cnt * parseInt(document.getElementById('elPlatterPrice').innerText);
        document.getElementById('elpreeetag').style.display='block';

        document.getElementById('elPlatterBtn').style.display='none';
    }
});
document.getElementById('pluselPlatter').addEventListener('click',function(){
    var cnt = parseInt( document.getElementById('elPlattercnt').innerText) + 1;

    document.getElementById('elTotalPlater').innerText = cnt * parseInt(document.getElementById('elPlatterPrice').innerText);


    document.getElementById('elPlattercnt').innerText = cnt ;
    
    if(cnt> 0 ){
        document.getElementById('preeetagel').style.display = 'none';

        document.getElementById('elPlatterBtn').style.display='block';
    }

});
// document.getElementById('fstPlatterBtn').onclick = clickingBtn;
document.getElementById('elPlatterBtn').addEventListener('click' , function(){
        let button = document.getElementById('elPlatterBtn').parentNode.parentNode;

        
        const price =  document.getElementById('elPlatterPrice').innerText ;
        
        const howMany = document.getElementById('elPlattercnt').innerText;
        
        document.getElementById('elPlattercnt').innerText = 0 ; 
        
        document.getElementById('elTotalPlater').innerText = 0;
});
//********************* */ 9th Platter Start *****************


