// em=required/parent
// var required=document.getElementById('required').value;
// var parent=document.getElementById('parent').value;
var cal=document.getElementById('calculate');
var ans=document.getElementById('result');
cal.addEventListener('click',()=>{
    var required = document.getElementById('required').value;
    var parent = document.getElementById('parent').value;
    ans.innerHTML='Result: '+required/parent;
});
