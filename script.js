const addbtn=document.querySelector(".addbutton");
const todolist=document.querySelector(".list");
const mbody=document.getElementById('mainbody');
const num1=document.querySelector(".number");
const inputvalue=document.querySelector(".todoinput");

var i=0;
function addnewbtn(){
    
    const newdiv=document.createElement("div");
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
        input.setAttribute('id',i);
        newdiv.appendChild(input);
        inputvalue.value="";
        i++;
        const deletebtn=document.createElement('button');
        deletebtn.classList.add("deletebtn");
        deletebtn.innerHTML='Delete';
        // newdiv.append(deletebtn);
        deletebtn.addEventListener('click', deletefunc)
        function deletefunc(){
            newdiv.remove();
            const countdiv=document.getElementsByClassName("list").length;
            num1.innerHTML=countdiv;
            for(let i = 1; i < countdiv; i++){
                const conti=document.getElementsByClassName("number")[i];
                conti.innerHTML=i;
                }
            i--;
        }
        const Addbtn=document.createElement('button');
        Addbtn.classList.add("addbtn");
        Addbtn.innerHTML='Add';
        Addbtn.addEventListener('click',function(){
            input.setAttribute('disabled','');
        });
        const Donebtn=document.createElement('button');
        Donebtn.classList.add("donebtn");
        Donebtn.innerHTML='Done';
        Donebtn.addEventListener('click',function(){
            input.style.textDecoration = "line-through";
            input.setAttribute('disabled','');
        });
        const Editbtn=document.createElement('button');
        Editbtn.classList.add("addbtn");
        Editbtn.innerHTML='Edit';
        Editbtn.addEventListener('click',function(){
            input.style.textDecoration = "none";
            input.removeAttribute('disabled','');
        })
        newdiv.append(Addbtn,deletebtn,Donebtn,Editbtn);
    
    console.log(i);
    }else{
        alert('Insert Text for Todo');
    }
    
}


addbtn.addEventListener('click',addnewbtn);

console.log(i);

