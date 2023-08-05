import axios from 'axios'

axios.get('http://localhost:5000/urls/open/q0G0wjS9Xr').then(res => {
    console.log(res.data)
}).catch(err => {
    console.log(err.response)
})

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