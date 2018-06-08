const request = require("request")
const URL_BASE = 'https://goodreads-devf-aaron.herokuapp.com//api/v1/'

function getAllAuthors(){
    const URI = 'authors/'
    var url = URL_BASE + URI

    return new Promise((resolve, reject)=>{
        request.get(url,(err,status,body)=>{
            status.statusCode == 200
            ? resolve(JSON.parse(body))
            : reject('Error')
        })
    })
}

function createAuthor(nombre, apellido, biografia, genero, edad){
    const URI = 'authors/'
    var url = URL_BASE + URI

    let jsonSend = {
        "name":nombre,
        "last_name":apellido,
        "nacionalidad":"MX",
        "biography":biografia,
        "gender":genero,
        "age":edad
    }
    return new Promise((resolve,reject)=>{
        request.post({url:url, form:jsonSend},(err,status,body)=>{
            status.statusCode == 201
            ? resolve(JSON.parse(body))
            : reject('Error')
        })
    })
}

createAuthor("Prueba","De promesas","hmo","M",20)
                .then(data => console.log(data))
                .catch(err => console.log(err))

// getAllAuthors().then(data => console.log(data))
//                 .catch(err => console.log(err))