import axios from 'axios'

// axios.get('http://localhost:5000/urls/open/0dZ_lCrjd_').then(res => {
//     console.log(res.data)
// }).catch(err => {
//     console.log(err.response)
// })

const token = 'eaadb706-304f-40e5-8388-b71888dbfafc';

axios.delete('http://localhost:5000/urls/1', {
  headers: {
    'Authorization': `Bearer ${token}`
}}).then(res => {
  console.log(res.data);
}).catch(err => {
  console.log(err.response.data);
});


// axios.get('http://localhost:5000/games?limit=1&offset=1').then(res => {
//     console.log(res.data)
// }).catch(err => {
//     console.log(err.response.data)
// })

// axios.get('http://localhost:5000/games').then(res => {
//     console.log(res.data)
// }).catch(err => {
//     console.log(err.response.data)
// })

// axios.get('http://localhost:5000/customers/3').then(res => {
//     console.log(res.data)
// }).catch(err => {
//     console.log(err.response.data)
// })

// axios.get('http://localhost:5000/rentals').then(res => {
//     console.log(res.data)
// }).catch(err => {
//     console.log(err.response)
// })