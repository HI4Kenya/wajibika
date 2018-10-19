import { Buffer } from 'buffer'

const username = 'admin'
const password = 'district'

const encoded = new Buffer(`${username}:${password}`).toString('base64')

const options = {
  hostname: 'http://41.89.94.123:8082/ssupervision',
  method: 'GET',
  headers: {
    Accept: 'application/json',
    Authorization: `Basic ${encoded}`,
  }
}

export {
  options
}