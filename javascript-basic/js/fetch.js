// GET
// fetch("요청주소")
//  .then(() =>{})
//  .then(() =>{})
//  .catch0(() =>{});

fetch("data/banner.json")  
    .then((response) =>{
        console.log(response);
        return response.json();
    })
    .then((data) => {})
    .catch((error) => {
        console.log(error);
    })