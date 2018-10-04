import { Buffer } from 'buffer'

const username = 'waithaka'
const password = 'Bootcamp2018$'

const encoded = new Buffer(`${username}:${password}`).toString('base64')

const options = {
  hostname: 'http://41.89.94.123/ssupervision',
  port: 8082,
  method: 'GET',
  headers: {
    Accept: 'application/json',
    Authorization: encoded,
  }
}

export {
  options
}