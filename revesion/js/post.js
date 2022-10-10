
/* 
01=https://jsonplaceholder.typicode.com/comments
02=https://jsonplaceholder.typicode.com/albums
03=https://jsonplaceholder.typicode.com/photos
04=https://jsonplaceholder.typicode.com/todos
05=https://jsonplaceholder.typicode.com/users
*/


function addPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => lodData(data))
}

function lodData(data) {
    const section = document.getElementById('demo');
    for (const user of data) {
        const div = document.createElement('div');
        div.style.border = '3px solid gray'
        div.style.borderRadius = '20px'
        div.style.margin = '10px'
        div.style.padding = '10px'
        div.style.textAlign = 'center'
        div.style.backgroundColor = 'orange'
        div.innerHTML = `
        <h3>Title: ${user.title}</h3>
        <p>${user.body}</p>
        `
        section.appendChild(div)
    }
}


const stuInfo = JSON.stringify({ name: "James", roll: 3 });
console.log(stuInfo.name);
const stuInfo1 = JSON.parse(stuInfo)
console.log(stuInfo1.name);