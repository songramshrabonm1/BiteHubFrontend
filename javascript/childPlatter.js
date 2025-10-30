
//********************* */ fst Platter Start *****************
document.getElementById('minIcrementFstPlatter').addEventListener('click',function(){
    var cnt = document.getElementById('fstPlattercnt').innerText;

    cnt = parseInt(cnt);

    if(cnt>0){
        cnt--;
        document.getElementById('fstPlattercnt').innerText = cnt;  
       
        document.getElementById('fstTotalPlater').innerText = cnt * parseInt(document.getElementById('fstPlatterPrice').innerText);

        document.getElementById('fstpreeetag').style.display = 'none';

        document.getElementById('fstPlatterBtn').style.display='block';


        if(cnt==0){

            document.getElementById('fstTotalPlater').innerText = cnt * parseInt(document.getElementById('fstPlatterPrice').innerText);

            document.getElementById('fstpreeetag').style.display='block';

            document.getElementById('fstPlatterBtn').style.display='none';
        }
        
    }else if(cnt==0){
        document.getElementById('fstTotalPlater').innerText = cnt * parseInt(document.getElementById('fstPlatterPrice').innerText);
        document.getElementById('fstpreeetag').style.display='block';

        document.getElementById('fstPlatterBtn').style.display='none';
    }
});
document.getElementById('plusFstPlatter').addEventListener('click',function(){
    var cnt = parseInt( document.getElementById('fstPlattercnt').innerText) + 1;

    document.getElementById('fstTotalPlater').innerText = cnt * parseInt(document.getElementById('fstPlatterPrice').innerText);


    document.getElementById('fstPlattercnt').innerText = cnt ;
    
    if(cnt> 0 ){
        document.getElementById('fstpreeetag').style.display = 'none';

        document.getElementById('fstPlatterBtn').style.display='block';
    }

});
// document.getElementById('fstPlatterBtn').onclick = clickingBtn;
document.getElementById('fstPlatterBtn').addEventListener('click' , function(){
        let button = document.getElementById('fstPlatterBtn').parentNode.parentNode;

        
        const price =  document.getElementById('fstPlatterPrice').innerText ;
        
        const howMany = document.getElementById('fstPlattercnt').innerText;
        
        document.getElementById('fstPlattercnt').innerText = 0 ; 
        
        document.getElementById('fstTotalPlater').innerText = 0;
});
//********************* */ fst Platter Start *****************



//********************* */ second Platter Start *****************
document.getElementById('minIcrementsecPlatter').addEventListener('click',function(){
    var cnt = document.getElementById('secPlattercnt').innerText;

    cnt = parseInt(cnt);

    if(cnt>0){
        cnt--;
        document.getElementById('secPlattercnt').innerText = cnt;  
       
        document.getElementById('secTotalPlater').innerText = cnt * parseInt(document.getElementById('secPlatterPrice').innerText);

        document.getElementById('secpreeetag').style.display = 'none';

        document.getElementById('secPlatterBtn').style.display='block';


        if(cnt==0){

            document.getElementById('secTotalPlater').innerText = cnt * parseInt(document.getElementById('secPlatterPrice').innerText);

            document.getElementById('secpreeetag').style.display='block';

            document.getElementById('secPlatterBtn').style.display='none';
        }
        
    }else if(cnt==0){
        document.getElementById('secTotalPlater').innerText = cnt * parseInt(document.getElementById('secPlatterPrice').innerText);
        document.getElementById('secpreeetag').style.display='block';

        document.getElementById('secPlatterBtn').style.display='none';
    }
});
document.getElementById('plussecPlatter').addEventListener('click',function(){
    var cnt = parseInt( document.getElementById('secPlattercnt').innerText) + 1;

    document.getElementById('secTotalPlater').innerText = cnt * parseInt(document.getElementById('secPlatterPrice').innerText);


    document.getElementById('secPlattercnt').innerText = cnt ;
    
    if(cnt> 0 ){
        document.getElementById('secpreeetag').style.display = 'none';

        document.getElementById('secPlatterBtn').style.display='block';
    }

});
// document.getElementById('fstPlatterBtn').onclick = clickingBtn;
document.getElementById('secPlatterBtn').addEventListener('click' , function(){
        let button = document.getElementById('secPlatterBtn').parentNode.parentNode;

        
        const price =  document.getElementById('secPlatterPrice').innerText ;
        
        const howMany = document.getElementById('secPlattercnt').innerText;
        
        document.getElementById('secPlattercnt').innerText = 0 ; 
        
        document.getElementById('secTotalPlater').innerText = 0;
});
//********************* */ 2nd Platter Start *****************



//********************* */ 3rd Platter Start *****************
document.getElementById('minIcrementthPlatter').addEventListener('click',function(){
    var cnt = document.getElementById('thPlattercnt').innerText;

    cnt = parseInt(cnt);

    if(cnt>0){
        cnt--;
        document.getElementById('thPlattercnt').innerText = cnt;  
       
        document.getElementById('thTotalPlater').innerText = cnt * parseInt(document.getElementById('thPlatterPrice').innerText);

        document.getElementById('thpreeetag').style.display = 'none';

        document.getElementById('thPlatterBtn').style.display='block';


        if(cnt==0){

            document.getElementById('thTotalPlater').innerText = cnt * parseInt(document.getElementById('thPlatterPrice').innerText);

            document.getElementById('thpreeetag').style.display='block';

            document.getElementById('thPlatterBtn').style.display='none';
        }
        
    }else if(cnt==0){
        document.getElementById('thTotalPlater').innerText = cnt * parseInt(document.getElementById('thPlatterPrice').innerText);
        document.getElementById('thpreeetag').style.display='block';

        document.getElementById('thPlatterBtn').style.display='none';
    }
});
document.getElementById('plusthPlatter').addEventListener('click',function(){
    var cnt = parseInt( document.getElementById('thPlattercnt').innerText) + 1;

    document.getElementById('thTotalPlater').innerText = cnt * parseInt(document.getElementById('thPlatterPrice').innerText);


    document.getElementById('thPlattercnt').innerText = cnt ;
    
    if(cnt> 0 ){
        document.getElementById('thpreeetag').style.display = 'none';

        document.getElementById('thPlatterBtn').style.display='block';
    }

});
// document.getElementById('fstPlatterBtn').onclick = clickingBtn;
document.getElementById('thPlatterBtn').addEventListener('click' , function(){
        let button = document.getElementById('thPlatterBtn').parentNode.parentNode;

        
        const price =  document.getElementById('thPlatterPrice').innerText ;
        
        const howMany = document.getElementById('thPlattercnt').innerText;
        
        document.getElementById('thPlattercnt').innerText = 0 ; 
        
        document.getElementById('thTotalPlater').innerText = 0;
});
//********************* */ 3rd Platter Start *****************



