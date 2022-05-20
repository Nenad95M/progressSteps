//globalno definisana sirina progressa
let width=0;
//uvecanje progresa
document.getElementById('next').addEventListener('click',function(){
    if (width>=99){
        return
    }
    width+=33;
    changeProgress(width);
}
)
//umanjenje progresa
document.getElementById('prev').addEventListener('click',function(){
    if (width<=0){
        return
    }   
    width-=33;
    changeProgress(width);
})

//funkcija koja menja sirinu progresa
function changeProgress(widthSize){

    document.querySelector('.progress').style.width=`${widthSize}%`;
}