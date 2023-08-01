import axios from 'axios'

const url = 'http://localhost:5000/teste';
const token = 'eaadb706-304f-40e5-8388-b71888dbfafc';

axios.post(url, {
  email: 'levy@gmail.com.br',
  password: 'levy'
}, { headers: {
    'Authorization': `Bearer ${token}`
  }
}).then(res => {
  console.log(res.data);
}).catch(err => {
  console.log(err.response.data);
});

// axios.post('http://localhost:5000/teste', {
//     email: "levy@gmail.com.br",
//     password: "levy",
//     token: "Bearer eaadb706-304f-40e5-8388-b71888dbfafc"
// }).then(res =>{
//     console.log(res.data)
// }).catch(err => {
//     console.log(err.response.data)
// })

// axios.post('http://localhost:5000/signup', {
//     name: "Levy",
//     email: "levy@gmail.com.br",
//     password: "levy",
//     confirmPassword: "levy"
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




