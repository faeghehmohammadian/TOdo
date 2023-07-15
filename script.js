const addbtn=document.querySelector(".addbutton");
const todolist=document.querySelector(".list");
const mbody=document.getElementById('mainbody');
const num1=document.querySelector(".number");
const inputvalue=document.querySelector(".todoinput");


function addnewbtn(){
    var newdiv=document.createElement("div");
    if(inputvalue.value){
        newdiv.classList.add("list");
        mbody.appendChild(newdiv);
    
        const num2=document.createElement("div")
        num2.classList.add("number");
        num2.innerHTML=num1.textContent;
        num1.innerHTML=Number(num1.textContent)+1;
        newdiv.appendChild(num2);
    
        const input =document.createElement("input");
        input.classList.add("todoinput");
        input.setAttribute('type','test');
        input.setAttribute('value',inputvalue.value)
        newdiv.appendChild(input);
        inputvalue.value="";

        const deletebtn=document.createElement('button');
        deletebtn.classList.add("deletebtn");
        deletebtn.innerHTML='Delete';
        newdiv.appendChild(deletebtn);
        deletebtn.addEventListener('click', deletefunc)
        function deletefunc(){
            newdiv.remove();
            const countdiv=document.getElementsByClassName("list").length;
            num1.innerHTML=countdiv;
            for(let i = 1; i < countdiv; i++){
                const conti=document.getElementsByClassName("number")[i];
                conti.innerHTML=i;
                }
            
        }
        
    }
    else{
        alert('Insert Todo');
    }
}


addbtn.addEventListener('click',addnewbtn);