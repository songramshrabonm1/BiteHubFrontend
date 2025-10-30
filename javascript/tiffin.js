document.getElementById('SchoolTiffinBtn').addEventListener('click',function(){
    
  

    document.getElementById('BreakFastTiffinBtn').style.backgroundColor= 'white'
    document.getElementById('LaunchTiffinBtn').style.backgroundColor= 'white'
    document.getElementById('SchoolTiffinBtn').style.backgroundColor = '#C4FE88';
    document.getElementById('SchoolTiffinBtn').style.borderRadius = '12px';
    document.getElementById('SchoolTiffinBtn').style.padding= '5px';

    

    
    let breakfastTiffin = document.getElementById('SchoolTiffin');
    // SchoolTiffin
    
    breakfastTiffin.style.display = 'block';
    document.getElementById('BreakFast').style.display = 'none';
    document.getElementById('LaunchTiffin').style.display = 'none';
});

document.getElementById('BreakFastTiffinBtn').addEventListener('click',function(){
    
  

    document.getElementById('SchoolTiffinBtn').style.backgroundColor= 'white'
    document.getElementById('LaunchTiffinBtn').style.backgroundColor= 'white'
    document.getElementById('BreakFastTiffinBtn').style.backgroundColor = '#C4FE88';
    document.getElementById('BreakFastTiffinBtn').style.borderRadius = '12px';
    document.getElementById('BreakFastTiffinBtn').style.padding= '5px';

    

    
    let breakfastTiffin = document.getElementById('BreakFast');
    
    
    breakfastTiffin.style.display = 'block';
    document.getElementById('SchoolTiffin').style.display = 'none';
    document.getElementById('LaunchTiffin').style.display = 'none';
});

document.getElementById('LaunchTiffinBtn').addEventListener('click',function(){
  
    document.getElementById('BreakFastTiffinBtn').style.backgroundColor= 'white'
    document.getElementById('SchoolTiffinBtn').style.backgroundColor= 'white'
    document.getElementById('LaunchTiffinBtn').style.backgroundColor = '#C4FE88';
    document.getElementById('LaunchTiffinBtn').style.borderRadius = '12px';
    document.getElementById('LaunchTiffinBtn').style.padding= '5px';
   

    
    
    let launchtiffin = document.getElementById('LaunchTiffin');
    

    launchtiffin.style.display = 'block';
    document.getElementById('BreakFast').style.display = 'none';
    document.getElementById('SchoolTiffin').style.display = 'none';
});

// For  Launch Requirement Start
function validation(elementId){
    const all = document.querySelectorAll(elementId);
    for(const lii of all){
        if(!lii.value.trim()){
            return false;
        }
    }
    return true;
}


let TotalMonthPrice = parseInt(document.getElementById('launchTiffinMonthLyPrice').innerText);

console.log('TotalMonth Price :' , TotalMonthPrice);

document.getElementById('')

let min = document.getElementById('minMonth').addEventListener('click',function(){
    let cnt = parseInt(document.getElementById('launchCnt').innerText);
    
    if(cnt>0){
        cnt--;
        document.getElementById('launchCnt').innerText= cnt;

        document.getElementById('TotalAmountOffice').innerText = cnt * TotalMonthPrice ; 

        if(validation('#launchSection input')){
            
            document.getElementById('subscribeBtn').style.display='block';
        }


        if(cnt == 0){
            document.getElementById('subscribeBtn').style.display='none';
        }

    }else{
        document.getElementById('subscribeBtn').style.display='none';
    }
});

let pl = document.getElementById('PlusMonth').addEventListener('click',function(){
    let cnt = parseInt(document.getElementById('launchCnt').innerText);
    
    cnt++;

    if(validation('#launchSection input')){
            
        document.getElementById('subscribeBtn').style.display='block';
    }

    document.getElementById('TotalAmountOffice').innerText = cnt * TotalMonthPrice ; 



    document.getElementById('launchCnt').innerText = cnt;



});


document.getElementById('subscribeBtn').addEventListener('click',function(){




    
    document.getElementById('h11').style.display = 'block';


    
    document.getElementById('h11').innerText = 'Our services have been successfully added to your cart.';

    document.getElementById('h1launchMonth').style.display = 'none';


    document.getElementById('subscribeBtn').style.display = 'none';

    document.getElementById('launchCnt').innerText = 0;

});


// ***************For Launch Requirement End

// For Breakfast section Start 
let TotalMonthPriceBreakfast = parseInt(document.getElementById('eachMonthBreakFastPrice').innerText);

let minn = document.getElementById('BreafastminMonth').addEventListener('click',function(){
    let cnt = parseInt(document.getElementById('BreakFastCnt').innerText);
    
    if(cnt>0){
        cnt--;
        document.getElementById('BreakFastCnt').innerText= cnt;

        document.getElementById('TotalAmountBreakFast').innerText = cnt * TotalMonthPrice ; 

        if(validation('#BreakFastSection input')){
            
            document.getElementById('BreakfastSubscribeBtn').style.display='block';
        }


        if(cnt == 0){
            document.getElementById('BreakfastSubscribeBtn').style.display='none';
        }

    }else{
        document.getElementById('BreakfastSubscribeBtn').style.display='none';
    }
});

let pll = document.getElementById('BreakFastPlusMonth').addEventListener('click',function(){
    let cnt = parseInt(document.getElementById('BreakFastCnt').innerText);
    
    cnt++;

    if(validation('#BreakFastSection input')){
        
        document.getElementById('BreakfastSubscribeBtn').style.display='block';
    }

    document.getElementById('TotalAmountBreakFast').innerText = cnt * TotalMonthPrice ; 



    document.getElementById('BreakFastCnt').innerText = cnt;



});


document.getElementById('BreakfastSubscribeBtn').addEventListener('click',function(){




    
    document.getElementById('BreakFastSuccess').style.display = 'block';


    
    document.getElementById('BreakFastSuccess').innerText = 'Our services have been successfully added to your cart.';

    document.getElementById('h1BreakfastMonth').style.display = 'none';


    document.getElementById('BreakfastSubscribeBtn').style.display = 'none';

    document.getElementById('BreakFastCnt').innerText = 0;

});

// Breakfast section End 



// School Tiffin section Start 
let TotalMonthPriceSchoolTiffin = parseInt(document.getElementById('SchoolTiffinPrice').innerText);

let minnn = document.getElementById('tiffinminMonth').addEventListener('click',function(){
    let cnt = parseInt(document.getElementById('tiffinCnt').innerText);
    
    if(cnt>0){
        cnt--;
        document.getElementById('tiffinCnt').innerText= cnt;

        document.getElementById('TotalAmounttiffin').innerText = cnt * TotalMonthPrice ; 

        if(validation('#TiffinSection input')){
            
            document.getElementById('tiffinSubscribeBtn').style.display='block';
        }


        if(cnt == 0){
            document.getElementById('tiffinSubscribeBtn').style.display='none';
        }

    }else{
        document.getElementById('tiffinSubscribeBtn').style.display='none';
    }
});

let plll = document.getElementById('tffinPlusMonth').addEventListener('click',function(){
    let cnt = parseInt(document.getElementById('tiffinCnt').innerText);
    
    cnt++;

    if(validation('#TiffinSection input')){
        
        document.getElementById('tiffinSubscribeBtn').style.display='block';
    }

    document.getElementById('TotalAmounttiffin').innerText = cnt * TotalMonthPrice ; 



    document.getElementById('tiffinCnt').innerText = cnt;



});


document.getElementById('tiffinSubscribeBtn').addEventListener('click',function(){




    
    document.getElementById('tiffinSuccess').style.display = 'block';


    
    document.getElementById('tiffinSuccess').innerText = 'Our services have been successfully added to your cart.';

    document.getElementById('h1tiffinMonth').style.display = 'none';


    document.getElementById('tiffinSubscribeBtn').style.display = 'none';

    document.getElementById('tiffinCnt').innerText = 0;

});

// School Tiffin section End 