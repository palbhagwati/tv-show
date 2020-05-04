import axios from 'axios'

export default function setup () {
  axios.interceptors.response.use(response => {
    return response
  }, function (err) {
    alert(err.message)
  })
}
