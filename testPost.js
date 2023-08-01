import axios from 'axios'


axios.post('http://localhost:5000/signup', {
    name: "João",
    email: "joao@driven.com.br",
    password: "driven",
    confirmPassword: "driven"
}).then(res =>{
    console.log(res.data)
}).catch(err => {
    console.log(err.response.data)
})



// axios.post('http://localhost:5000/games', {
//     name: 'Banco Imobiliário',
//     image: 'http://www.imagem.com.br/banco_imobiliario.jpg',
//     stockTotal: 3,
//     pricePerDay: 1500
//   }).then(res =>{
//     console.log(res.data)
// }).catch(err => {
//     console.log(err.response.data)
// })




