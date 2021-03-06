function game(hi){
    var me=document.getElementById('me');
    var selection=document.createElement('img');
    selection.setAttribute('src',hi.src);
    me.appendChild(selection);
    var rock=document.getElementById('rock');
    var paper=document.getElementById('paper');
    var scissors=document.getElementById('scissors');
    var items=[rock.src,paper.src,scissors.src]
    // items.push(rock);
    // items.push(paper);
    // items.push(scissors);
    var comp=document.getElementById('comp');
    var compSelection=document.createElement('img');
    compSelection.setAttribute('src',items[(Math.floor(Math.random()*3))]);
    comp.appendChild(compSelection);
    console.log(selection);
    console.log(compSelection);
    var result=document.getElementById('result');
    if(selection.src==compSelection.src){
        result.innerHTML=`It's a DRAW. Try Again`;
    }
    else if(selection.src==rock.src && compSelection.src==paper.src){
        result.innerHTML=`Computer WINS.You LOSE`
    }
    else if(selection.src==rock.src && compSelection.src==scissors.src){
        result.innerHTML=`You WIN`
    }
    else if(selection.src==paper.src && compSelection.src==rock.src){
        result.innerHTML=`You WIN`
    }
    else if(selection.src==paper.src && compSelection.src==scissors.src){
        result.innerHTML=`Computer WINS.You LOSE`
    }
    else if(selection.src==scissors.src && compSelection.src==rock.src){
        result.innerHTML=`Computer WINS.You LOSE`
    }
    else if(selection.src==scissors.src && compSelection.src==paper.src){
        result.innerHTML=`You WIN`
    }

}
// function playAgain(){
//     selection.src.remove();
//     compSelection.src.remove();
//     game(hi);
// }