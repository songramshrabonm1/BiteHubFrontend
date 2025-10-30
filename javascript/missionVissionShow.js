document.getElementById('missinbtn').addEventListener('click',function(){
    let btnFst =  document.getElementById('missinbtn').style.backgroundColor = 'bisque';
    console.log(btnFst);
    
    let btnscnd =  document.getElementById('visionbtn').style.backgroundColor = 'white';
    let btnthrd =  document.getElementById('targetbtn').style.backgroundColor = 'white';
    console.log('btnscnd', btnscnd);
    console.log('btnthrd',btnthrd);
    document.getElementById('visionView').style.display = 'none';
    document.getElementById('targetShow').style.display = 'none';
    document.getElementById('missionView').style.display = 'flex';

});

document.getElementById('visionbtn').addEventListener('click',function(){
    let btnScnd =  document.getElementById('visionbtn').style.backgroundColor = 'bisque';
    console.log(btnScnd);

    let btnfst =  document.getElementById('missinbtn').style.backgroundColor = 'white';
    let btnthrd =  document.getElementById('targetbtn').style.backgroundColor = 'white';
    console.log('btnscnd', btnfst);
    console.log('btnthrd',btnthrd);
    document.getElementById('targetShow').style.display = 'none';
    document.getElementById('missionView').style.display = 'none';
    document.getElementById('visionView').style.display = 'flex';
});
document.getElementById('targetbtn').addEventListener('click',function(){
    let btnthrd =  document.getElementById('targetbtn').style.backgroundColor = 'bisque';
    console.log(btnthrd);


    let btnfst =  document.getElementById('missinbtn').style.backgroundColor = 'white';
    let btnscnd =  document.getElementById('visionbtn').style.backgroundColor = 'white';
    console.log('btnscnd', btnfst);
    console.log('btnthrd',btnscnd);
    document.getElementById('visionView').style.display = 'none';
    document.getElementById('missionView').style.display = 'none';
    document.getElementById('targetShow').style.display = 'flex';
});

