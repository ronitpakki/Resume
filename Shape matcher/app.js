let initialScore=0;
let start=false;
let shape1;
let shape2;
const shapes=[{color:'#FF595E',width:150,height:150},
            { color: '#FF595E', width: 128, height: 150 },
            { color: '#241EFF', width: 111, height: 100 },
            { color: '#241EFF', width: 190, height: 150 },
            { color: '#18FF2A', width: 120, height: 100 },
            { color: '#18FF2A', width: 170, height: 150 },
            { color: '#FF621E', width: 99, height: 100 },
            { color: '#FF621E', width: 140, height: 150 },
            { color: '#A1E459', width: 180, height: 100 },
            { color: '#A1E459', width: 90, height: 150 }
            ];
const randomSelect=()=>{
    const random=Math.floor(Math.random()*10);
    const randomSelection=shapes[random];
    return randomSelection;
};
const randomSelectStart= () => {
    setInterval( () => {
        shape1=randomSelect();
        shape2=randomSelect();
        style1=`width: ${shape1.width+'px'};
                height: ${shape1.height+'px'};
                background: ${shape1.color}; display: inline-block;margin: 50px 200px; transform: translateX(190px)`
        style2 = `width: ${shape2.width + 'px'};
                height: ${shape2.height + 'px'};
                background: ${shape2.color};display: inline-block;margin: 50px 200px; transform: translateX(190px)`  
        document.getElementById('shape1').style.cssText = style1;
        document.getElementById('shape2').style.cssText = style2;
    },1000);
};
document.getElementById('play').onclick = () => {
    randomSelectStart();
};
const check=()=>{
    if (document.getElementById('shape1').getAttribute('style') == document.getElementById('shape2').getAttribute('style')){
        initialScore+=1
        document.getElementById('score').innerHTML=initialScore;
    }else{
        initialScore-=1
        document.getElementById('score').innerHTML=initialScore;
    }
};
document.getElementById('match').onclick=()=>{
    check()
};