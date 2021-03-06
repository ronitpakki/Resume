const text=document.querySelector('.text');
const buttn=document.querySelector('.buttn');
const list=document.querySelector('.list');
buttn.addEventListener('click',divbox);
function divbox(event){
    event.preventDefault();
    const div=document.createElement('div');
    div.classList.add('todo');
    const txt=document.createElement('txt');
    txt.innerText='';
    
    div.appendChild(txt)
    const btn1=document.createElement('button');
    btn1.innerHTML ='<i class="far fa-check-square fa-2x"></i>';
    
    div.appendChild(btn1);
    const btn2 = document.createElement('button');
    btn1.innerHTML = '<i class="far fa-trash-alt fa-2x"></i>';
    
    div.appendChild(btn2);
    list.appendChild(div)
}
function del(event) {
    const item = event.target;
    if (item.classList[0] === 'bt2') {
        const paret = item.parentElement;
        paret.setAttribute('style', "transform:rotateX('270deg');transform:translateY('8rem');")
        paret.remove();
    }
    if (item.classList[0] === 'bt1') {
        const paret = item.parentElement;
        paret.classList.add('linethro')
    }
}