const text=document.querySelector('.text');
const buttn=document.querySelector('.buttn');
const list=document.querySelector('.list');
buttn.addEventListener('click',divbox);
function divbox(event){
    event.preventDefault();
    const inpu=document.getElementById('ins')
    const div=document.createElement('div');
    const li=document.createElement('li');
    li.classList.add('li');
    li.innerHTML=inpu.value
    div.appendChild(li);
    const btn1=document.createElement('button');
    btn1.classList.add('bt1');
    const btn2=document.createElement('button');
    btn1.addEventListener('click',function line(event){
        li.style.textDecoration='line-through'
    });
    btn2.classList.add("bt2");
    btn2.addEventListener('click',function del(event){
        li.remove()
        btn1.remove()
        btn2.remove()
    });
    const i1=document.createElement('i');
    i1.setAttribute('class','far fa-check-square fa-2x');
    btn1.appendChild(i1);
    div.appendChild(btn1);
    const i2 = document.createElement('i');
    i2.setAttribute('class', 'far fa-trash-alt fa-2x');
    btn2.appendChild(i2);
    div.setAttribute('style','display:flex;align-items:center;justify-content:center;border:0;margin-top:25px;list-style-type:none;');
    li.setAttribute('style','width: 270px;height: 40px;background-color: white;padding: auto;font-size:30px;');
    btn1.setAttribute('class','ht');
    btn2.setAttribute('class','ht');
    btn1.setAttribute('style','height: 40px;width: 40px;background:green;');
    btn2.setAttribute('style','height: 40px;width: 40px;background:red;');
    div.appendChild(btn2);
    list.appendChild(div);
    
}

