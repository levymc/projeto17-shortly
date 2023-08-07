import axios from 'axios'

const url = 'http://localhost:5000/urls/shorten';
const token = 'efca96e6-9f3a-4a08-998e-a3bc5023e8b2';

axios.post(url, {
  url: 'https://www.youtube.com/',
}, { headers: {
    'Authorization': `Bearer ${token}`
  }
}).then(res => {
  console.log(res.data);
}).catch(err => {
  console.log(err.response.data);
});

// axios.post('http://localhost:5000/signin', {
//     email: "fred@gmail.com.br",
//     password: "fred",
// }).then(res =>{
//     console.log(res.data)
// }).catch(err => {
//     console.log(err.response)
// })

// axios.post('http://localhost:5000/signup', {
//     name: "Frederico da Silva Barbosa",
//     email: "fred@gmail.com.br",
//     password: "fred",
//     confirmPassword: "fred"
// }).then(res =>{
//     console.log(res.data)
// }).catch(err => {
//     console.log(err.response.data)
// })



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




