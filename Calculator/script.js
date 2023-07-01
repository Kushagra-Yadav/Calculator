let input=document.getElementById('input_num');
let buttons=document.querySelectorAll('button');
arr=Array.from(buttons);
let s="";
arr.forEach((button) => {
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='=')
        {
            s=eval(s);
            input.value=s;
        }
        else if(e.target.innerHTML=='AC')
        {
            s="";
            input.value="";
        }
        else if(e.target.innerHTML=='DEL')
        {
            s=s.substring(0,s.length-1);
            input.value=s;
        }
        else
        {
            s+=e.target.innerHTML;
            input.value=s;
        }
        console.log(input.value);
    })
    
});