// alert("hey")
// let  activetodolist;
let activetodolistbox=document.getElementById('activetodolistbox');
let activetodo=document.getElementById('activetodo');
const text=document.getElementById('text');
let completedtodolistbox=document.getElementById('completedtodolistbox');
let completedtodo=document.getElementById('completedtodo');
let featureactive =document.getElementById('featureactive')
let featurecompleted=document.getElementById('featurecompleted')
let featuredeleted=document.getElementById('featuredeleted');
let deletedtodolistbox=document.getElementById('deletedtodolistbox');
let deletedtodo=document.getElementById('deletedtodo');
let textareabox=document.getElementById('textareabox');


// localStorage.clear();
showtodo();
function addtext(){
    let activetodolist=localStorage.getItem('activetodo');
    // console.log(activetodolist);
    if(activetodolist==null){
        activetodoObj=[];
    }
    else{
        activetodoObj=JSON.parse(activetodolist);
    }
    activetodoObj.push(text.value);
    // console.log(activetodoObj);
    text.value="";
    localStorage.setItem('activetodo',JSON.stringify(activetodoObj));
    textareabox.classList.remove('show');    
    
    showtodo();
}

function showtodo(){
    let activetodolist=localStorage.getItem('activetodo');
    if(activetodolist==null){
        activetodoObj=[];
    }
    else{
        activetodoObj=JSON.parse(activetodolist);
        
    }
    let html="";
    activetodoObj.forEach(function(element,index){
        html+=`
                <div class="activetodo" id="activetodo">
                <div class="showtodotext">
                    <h4><span>&#9900;</span> &nbsp; &nbsp; ${element}</h4>

                    <div class="action">
                        <button class="tick" id=" tick" onclick="tick(${index})"> &#10004;</button>
                        <button id="cross" onclick="cross(${index})"><i  class="material-icons">delete</i></button>

                    </div>
                </div>                
            </div>`

    });

    if(activetodoObj.length!=0){
        activetodolistbox.innerHTML=html;       
    }
    else{
        activetodolistbox.innerHTML="Click on '+' icon to add";
        activetodolistbox.style.fontSize="1.5rem";
        activetodolistbox.style.textAlign="center";
        activetodolistbox.style.color="white";
    }
    featureactive.innerHTML=activetodoObj.length+" tasks";
    // completedtodoObj
    let completedtodolist=localStorage.getItem('completedtodo');
    if(completedtodolist==null){
        completedtodoObj=[];
    }
    else{
        completedtodoObj=JSON.parse(completedtodolist);
    }
    featurecompleted.innerHTML=completedtodoObj.length+" tasks";
    // featuredeleted.innerHTML=deletedtodoObj.length+"tasks";
    let deletedtodolist=localStorage.getItem('deletedtodo');
    if(deletedtodolist==null){
        deletedtodoObj=[];
    }
    else{
        deletetodoObj=JSON.parse(deletedtodolist);
    }
    // console.log(deletedtodoObj.length);
    featuredeleted.innerHTML=deletedtodoObj.length+" tasks";
}

function tick(index){
    let completedtodolist=localStorage.getItem('completedtodo');
    // console.log(completedtodolist);
    if(completedtodolist==null){
        completedtodoObj=[];
    }
    else{
        completedtodoObj=JSON.parse(completedtodolist);
    }
    let activetodolist= localStorage.getItem('activetodo');
    let deletetodoObj=JSON.parse(activetodolist);
    if(index>-1){
        completedtodoObj.push(deletetodoObj[index]);
        deletetodoObj.splice(index,1);
    }
    localStorage.setItem('activetodo',JSON.stringify(deletetodoObj));
    localStorage.setItem('completedtodo', JSON.stringify(completedtodoObj));
    showtodo();
     completedtodolist=localStorage.getItem('completedtodo');
    completedtodoObj=JSON.parse(completedtodolist);
    // console.log(completedtodoObj);
}

function active(){
    activetodolistbox.classList.add('show');
    completedtodolistbox.classList.remove('show');
    deletedtodolistbox.classList.remove('show');

}
function completed(){
    activetodolistbox.classList.remove('show');
    completedtodolistbox.classList.add('show');
    deletedtodolistbox.classList.remove('show');


    // console.log(completedtodolist);
    let completedtodolist=localStorage.getItem('completedtodo');
    if(completedtodolist==null){
        completedtodoObj=[];
    }
    else{
        completedtodoObj=JSON.parse(completedtodolist);
    }
    console.log(completedtodoObj);
    let html="";
    completedtodoObj.forEach(function(element,index){
        html+=`<div class="completedtodo" id="completedtodo">
            <h4><span>&#9900;</span>   &nbsp; &nbsp; ${element}</h4>
            </div>`
    });
    if(completedtodoObj.length!=0){
        completedtodolistbox.innerHTML=html;
    }
    else{
        completedtodolistbox.innerHTML="You don't have any completed task!";
        completedtodolistbox.style.fontSize="1.5rem";
        completedtodolistbox.style.textAlign="center";
        completedtodolistbox.style.color="white";
    }

}


function cross(index){
    let deletedtodolist=localStorage.getItem('deletedtodo');
    if(deletedtodolist==null){
        deletedtodoObj=[];
    }
    else{
        deletedtodoObj=JSON.parse(deletedtodolist);
    }

    let activetodolist=localStorage.getItem('activetodo');
    let removetodoObj=JSON.parse(activetodolist);
    if(index>-1){
        deletedtodoObj.push(removetodoObj[index]);
        removetodoObj.splice(index,1);
    }
    localStorage.setItem('activetodo', JSON.stringify(removetodoObj));
    localStorage.setItem('deletedtodo', JSON.stringify(deletedtodoObj));
    showtodo();    
    // deletedtodolist=localStorage.getItem('deletedtodo');
    // deletedtodoObj=JSON.parse(deletedtodolist);

}

function deleted(){
    
    deletedtodolistbox.classList.add('show');
    activetodolistbox.classList.remove('show');    
    completedtodolistbox.classList.remove('show');

    let deletedtodolist=localStorage.getItem('deletedtodo');
    if(deletedtodolist==null){
        deletedtodoObj=[];
    }
    else{
        deletedtodoObj=JSON.parse(deletedtodolist);
    }
    console.log(deletedtodoObj);
    let html="";
    deletedtodoObj.forEach(function(element,index){
        html+=`<div class="deletedtodo" id="deletedtodo">
            <h4><span>&#9900;</span>  &nbsp; &nbsp;  ${element}</h4>
            </div>`
    });
    if(deletedtodoObj.length!=0){
        deletedtodolistbox.innerHTML=html;
    }
    else{
        
        deletedtodolistbox.innerHTML="You don't have any deleted task!";
        deletedtodolistbox.style.fontSize="1.5rem";
        deletedtodolistbox.style.textAlign="center";
        deletedtodolistbox.style.color="white";
    }
    
    

}

function addtextarea(){
    textareabox.classList.add('show');
}
function cancel(){
    textareabox.classList.remove('show');
}
function allclear(){
    localStorage.clear();
    showtodo();
    activetodolistbox.classList.add('show');
    completedtodolistbox.classList.remove('show');
    deletedtodolistbox.classList.remove('show');
}