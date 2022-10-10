function number() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
};

function userD() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => disPlayuser(data))
}

function disPlayuser(data) {
    const ul = document.getElementById('users');
    for (const user of data) {
        const li = document.createElement('li');
        li.innerText = `Name:${user.name}

         Email:${user.email}
         Id:${user.id}`
        ul.appendChild(li)
    }
}
