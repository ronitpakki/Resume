function age(){
    var dob=prompt('enter your year of birth');
    var thisyear=2021;
    var days=(thisyear - dob)*365;
    var h=document.createElement('h1');
    var text=document.createTextNode(days);
    h.getAttributeNames('id','rem');
    h.appendChild(text)
    document.getElementById('result').appendChild(h);    
}
function reset(){
    document.getElementById('result').remove();
}