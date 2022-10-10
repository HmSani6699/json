function displayPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displaylod(data))
}

displayPost()
function displaylod(data) {
    const section = document.getElementById('container');
    for (const user of data) {
        const div = document.createElement('div');
        div.classList.add('post')
        div.innerHTML = `
        <h2>${user.title}</h2>
        <p>${user.body}</p>
        <h5>UserId: ${user.userId}</h5>
        <h5>UserId: ${user.id}</h5>
        `
        section.appendChild(div);
    }
}