
let sumright = 0;
let sumleft = 0;

function newgames(){
    sumright = 0;
    sumleft = 0;
    document.getElementById("form-container").style.display = "block";
    document.getElementById("borad-container").style.display = "none";

    document.getElementById('scoreone').innerHTML = '';
    document.getElementById('scoretwo').innerHTML = '';

    document.getElementById('firstname').value ='';
    document.getElementById('secondname').value ='';
    document.getElementById('totalscore').value ='';

    document.getElementById('one').value ='';
    document.getElementById('two').value ='';

    document.getElementById('rightwinnergif').style.display= 'none';
    document.getElementById('leftwinnergif').style.display= 'none';


    const h = document.getElementById('btns');
    h.disabled = false;
    const g = document.getElementById('btnsl');
    g.disabled = false;

    // document.getElementsById('board-container').style.marginTop = '100px';
    document.getElementById('borad-container').style.marginTop = '';

    document.getElementById('newgame').style.marginTop = '0px';
    document.getElementById('reset').style.marginTop = '0px';
    
}
function resets(){
    sumright = 0;
    sumleft = 0;
    document.getElementById("form-container").style.display = "none";
    document.getElementById("borad-container").style.display = "block";

    document.getElementById('scoreone').innerHTML = '';
    document.getElementById('scoretwo').innerHTML = '';

    document.getElementById('rightwinnergif').style.display= 'none';
    document.getElementById('leftwinnergif').style.display= 'none';

    const h = document.getElementById('btns');
    h.disabled = false;
    const g = document.getElementById('btnsl');
    g.disabled = false;

    document.getElementById('borad-container').style.marginTop = '';

    document.getElementById('newgame').style.marginTop = '0px';
    document.getElementById('reset').style.marginTop = '0px';
   
}


function submit(){
    let x = document.getElementById("form-container").style.display = "none";
    let y = document.getElementById("borad-container").style.display = "block";
    
    var fname = document.getElementById('firstname',).value;
    var i = +fname;
    document.getElementsByClassName('names')[0].innerHTML = fname;

    var sname = document.getElementById('secondname',).value;
    var k = +sname;
    document.getElementsByClassName('names')[1].innerHTML = sname;
    
    document.getElementById('one').style.fontSize = '60px';
    document.getElementById('two').style.fontSize = '60px';

    
    
    

}

function rollone(){
 
    let a = Math.floor(Math.random()*6)+1;
    sumright += a;
    document.getElementById('scoreone').innerHTML = sumright;  

    document.getElementById('scoreone').style.display= 'inline-block';
    document.getElementById('scoreone').style.fontSize= '120px';
    document.getElementById('imgone').innerHTML ="<img src ='"+a+".png'/>";
  
    let totalscoree = document.getElementById('totalscore').value;
    const h = document.getElementById('btns');
    const g = document.getElementById('btnsl');

   
    if(sumright >= totalscoree){
        h.disabled = true;
        g.disabled = true;
        document.getElementById('rightwinnergif').style.display= 'flex';
    }
    
  
  /*  switch(playerIndex){
        case 1:
            sum += a;
            playerIndex.getElementById('scoreone').innerHTML = sum;
    } */
}

function rolltwo(){
    let b = Math.floor(Math.random()*6)+1;
    sumleft +=b;
    document.getElementById('scoretwo').innerHTML = sumleft;

    document.getElementById('scoretwo').style.fontSize= '120px';
    document.getElementById('imgtwo').innerHTML ="<img src ='"+b+".png'/>";

    let totalscoree = document.getElementById('totalscore').value;
    const g = document.getElementById('btnsl');
    const h = document.getElementById('btns');
    
    if(sumleft >= totalscoree){
          g.disabled = true;
          h.disabled = true;
          document.getElementById('leftwinnergif').style.display= 'flex';
          document.getElementById('leftwinnergif').style.marginTop = '100px';
          document.getElementById('borad-container').style.marginTop = '-580px';
          document.getElementById('newgame').style.marginTop = '-80px';
          document.getElementById('reset').style.marginTop = '-80px';
    }

}
/*
function newgames(){
    document.getElementById("form-container").style.display = "block";
    document.getElementById("borad-container").style.display = "none";
    document.getElementById('firstname').value ='';
    document.getElementById('secondname').value ='';
    document.getElementById('totalscore').value ='';
    document.getElementById('one').value ='';
    document.getElementById('two').value ='';
    document.getElementById('scoreone').innerHTML = '';                                                                                                                                                                                                                                                         = '';
    document.getElementById('scoretwo').innerHTML ='';
    document.getElementById('rightwinnergif').style.display= 'none';
    document.getElementById('leftwinnergif').style.display= 'none';

    const h = document.getElementById('btns');
    h.disabled = false;
    const g = document.getElementById('btnsl');
    g.disabled = false;
} 
*/

    




/*************************************code for alternate button visibility*******************************************/
 
/*  document.getElementById('btns').addEventListener('click',() =>{
    const h = document.getElementById('btns');
    h.disabled = true;
    const g = document.getElementById('btnsl');
    g.disabled = false;
})
    document.getElementById('btnsl').addEventListener('click',() =>{
    const g = document.getElementById('btnsl');
    g.disabled = true;
    const h = document.getElementById('btns');
    h.disabled = false;   
})
*/

/*
document.getElementById('imgtwo').innerHTML ="<img src ='Images/"+b+".png'/>";     line for image taking random
*/
