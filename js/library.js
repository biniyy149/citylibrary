window.onload = citylibrary_App

function citylibrary_App(){

    fetchBookLists()

}

async function fetchBookLists(){

    try{
        let listOfBooks = await fetch("https://elibraryrestapi.herokuapp.com/elibrary/api/book/list",{
            method: "GET"
        })
        let res = await listOfBooks.json()
        console.log(res)
        let output = document.getElementById("mytable")
        for(let i = 0; i <= res.length; i++){
            let count = 1
            
            output.innerHTML += "<td>" + +(count+i) + "</td>"
        + "<td>" + res[i].isbn + "</td>" + "<td>" + res[i].title + "</td>" +
        "<td>" + res[i].overdueFee + "</td>" + "<td>" + res[i].publisher + "</td>" +
        "<td>" + res[i].datePublished +  "<td>" + "<a href='editBook.html'>Edit</a>" + "</td>" +
        "<td>" + "<a href = ''> Delete </a>" + "</td></tr>" + "</td>" + '</table>'
        }
    } catch (err) {console.log(err)}



}
 
