import axios from 'axios'

const url = 'http://localhost:5000/urls/shorten';
const token = 'eaadb706-304f-40e5-8388-b71888dbfafc';

// axios.post(url, {
//   url: 'https://www.notion.so/bootcampra/Projeto-17-Shortly-API-34ff4484a1274eed901c5a2bd1e23722',
// }, { headers: {
//     'Authorization': `Bearer ${token}`
//   }
// }).then(res => {
//   console.log(res.data);
// }).catch(err => {
//   console.log(err.response.data);
// });

// axios.post('http://localhost:5000/teste', {
//     email: "fred@gmail.com.br",
//     password: "fred",
//     token: "Bearer eaadb706-304f-40e5-8388-b71888dbfafc"
// }).then(res =>{
//     console.log(res.data)
// }).catch(err => {
//     console.log(err.response.data)
// })

axios.post('http://localhost:5000/signup', {
    name: "Frederico da Silva Barbosa",
    email: "fred@gmail.com.br",
    password: "fred",
    confirmPassword: "fred"
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




