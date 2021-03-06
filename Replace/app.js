const btn= () => {
    let text = document.getElementById('text').innerHTML;
    let search = document.getElementById('search').value;
    let replace = document.getElementById('replace').value;
    let result = document.getElementById('result');
    let ans=text.replace(search,replace);
    result.innerHTML=ans;
}
document.getElementById('button').onclick= () => {
    btn()
}