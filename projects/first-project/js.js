//alert('run')
var a=1;
function clickMe(){
    if(a==1){
        document.getElementById('p').innerHTML ='I Hate Code';
        a=0;
    }
    else{
         document.getElementById('p').innerHTML = 'I Love Code';
         a=1;
    }
}
