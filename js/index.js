fetchData()

var postId;

function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => {
            getData(json)
        })
}

function getData(json) {
    json.forEach(myFunction)
}

function myFunction(item, index) {
    let counter = index;
    counter++

    /*if (counter <= 5) {*/
    document.getElementById('dataContent').innerHTML +=
        `<div class="col-4 mb-4">
              <div class="card card-body">
                 <h4>${counter}.${item.title}</h4>
                 <p>${item.body}</p>
                 <hr>
                 <button onclick=getCommentsById(${item.id}) class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapse${counter}" aria-expanded="false" aria-controls="collapse${counter}">
                      Comments
                 </button>
                 <div class="collapse" id="collapse${counter}">
                     <div class="card card-body" id="comment${item.id}">
                          
                     </div>
                 </div>
               </div>
        </div>`
    /*}*/


}

function getCommentsById(id) {

    postId = id

    document.getElementById(`comment${postId}`).innerHTML = ''

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then(response => response.json())
        .then(json => {
            json.forEach(innerHTMLComments)
        })
}

function innerHTMLComments(citem) {
    document.getElementById(`comment${postId}`).innerHTML += `
    <div>
    <h5>${citem.name}</h5>
    <h5 class="text-primary">${citem.email}</h5>
    <p>${citem.body}</p>
    <hr>
    </div>`
}