const request = require('request')

function peticionGoogle(){
    return new Promise((resolve,reject)=>{
        request.get("https://maps.googleapis.com/maps/api/geocode/json?address=1085+Ethojoa&key=AIzaSyAZeTqLKfqzdWYbwdqPb775qNUR-LUi8XQ",(err, response, body)=>{
            if(response.statusCode == 200){
                var json = JSON.parse(body)
                resolve(json)
            }else{
                reject('Error en la peticion')
            }
        })
    })
}
peticionGoogle()
                .then(response => {
                    console.log('Primera promesa resuelta')
                    console.log(response)
                })
                .catch(err => console.log(err))