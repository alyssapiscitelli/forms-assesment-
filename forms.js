   //Input
let list= []; 

let toDo = '';

const sectionTag = document.querySelector('#section');


     //Process
document.querySelector('form').addEventListener('submit', function(event){
    event.preventDefault();
    

    //Getting user input from form 
    toDo = document.querySelector('#toDoField').value;
    console.log(toDo);
     //Adding to do's to array 
     list.push(toDo);
    

    let template = list.map(marker =>
    `
    <li>
    ${marker} 
    </li>
    `);
    //Output
    ul.innerHTML=template.join('');
    
})

