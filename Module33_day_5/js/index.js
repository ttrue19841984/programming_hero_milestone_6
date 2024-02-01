function loadUsers2(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers2(data))
}

function displayUsers2(data){
//get the ul element
    const ul = document.getElementById('Users-list')
    for(let user of data){
        // console.log(user.name)
        // create the child element
        const li = document.createElement('li');
        // set innerText or innerHTML
        li.innerText = user.name;
        // <p> is completed: $ { todo.completed === true? 'complete' : 'not complete'</p>
        // appendChild
        ul.appendChild(li)
    }
}