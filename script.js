const addbtn=document.querySelector(".addbutton");
const todolist=document.querySelector(".list");
const mbody=document.getElementById('mainbody');
//const num1=document.querySelector(".number");
const inputvalue=document.querySelector(".todoinput");
var i=0;
function addnewbtn(){
    
    const newdiv=document.createElement("div");
    if(inputvalue.value){
        newdiv.classList.add("list");
        mbody.appendChild(newdiv);
        const input =document.createElement("input");
        input.classList.add("todoinput");
        input.setAttribute('type','test');
        input.setAttribute('value',inputvalue.value)
        input.setAttribute('id',i);
        input.setAttribute('disabled','');
        newdiv.appendChild(input);
        newdiv.setAttribute('status','active');
        inputvalue.value="";
        i++;
        const deletebtn=document.createElement('button');
        deletebtn.classList.add("deletebtn");
        deletebtn.innerHTML='Delete';
        deletebtn.addEventListener('click', function(){
            newdiv.remove();
        });
        const Editbtn=document.createElement('button');
        Editbtn.classList.add("addbtn");
        Editbtn.innerHTML='Edit';
        Editbtn.addEventListener('click',function(){
            if(input.hasAttribute('disabled')){
                input.removeAttribute('disabled','');
                input.removeAttribute('style');
                Editbtn.classList.add('selectedbtn');
            }
            else{
                input.setAttribute('disabled','');
                Editbtn.classList.remove('selectedbtn');
            }
        });


        const Donebtn=document.createElement('button');
        Donebtn.classList.add("donebtn");
        Donebtn.innerHTML='Done';
        Donebtn.addEventListener('click',function(){
            if (input.hasAttribute('style')){
                input.removeAttribute('style');
                Donebtn.classList.remove('selectedbtn');
            }
            else{
            input.style.textDecoration = "line-through";
            input.setAttribute('disabled','');
            newdiv.setAttribute('status','completed');
            Donebtn.classList.add('selectedbtn');
            }
        });
        
        newdiv.append(Editbtn,deletebtn,Donebtn);
    
    console.log(i);
    }else{
        alert('Insert Text for Todo');
    }
    
}

addbtn.addEventListener('click',addnewbtn);

const allnav=document.querySelector('.allnav');
const activenav=document.querySelector('.activenav');
const completednav=document.querySelector('.completednav');

allnav.addEventListener("click", function (e) {
    allnav.classList.add('activeNavClick');
    activenav.classList.remove('activeNavClick');
    completednav.classList.remove('activeNavClick');
    const listbox = Array.from(document.getElementsByClassName('list'));
    listbox.forEach(list => {
        list.style.display='flex';
    });

});
activenav.addEventListener("click", function (e) {
    allnav.classList.remove('activeNavClick');
    activenav.classList.add('activeNavClick');
    completednav.classList.remove('activeNavClick');
    const alllist=document.querySelectorAll(".list");
    alllist.forEach(todolist => {
        todolist.style.display='none';
        if (todolist.getAttribute('status')== 'active'){
            console.log(todolist.getAttribute('status'));
            todolist.style.display='flex';
        }
    });

});

completednav.addEventListener("click", ()=> {
    allnav.classList.remove('activeNavClick');
    activenav.classList.remove('activeNavClick');
    completednav.classList.add('activeNavClick');
    const alllist=document.querySelectorAll(".list");
    alllist.forEach(todolist => {
        todolist.style.display='none';
        if (todolist.getAttribute('status')== 'completed'){
            console.log(todolist.getAttribute('status'));
            todolist.style.display='flex';
        }
    });

});