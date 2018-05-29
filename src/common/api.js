import ajax from './ajax'
console.log(process.env.NODE_ENV)
const baseUrl = {
  serverB: {
    dev: 'http://baidu.com',
    sit: 'http://sit.com',
    production: 'http://baidu.com.qq'
  },
  serverA: {
    dev: 'http://qq.com',
    sit: 'http://sit.com',
    production: 'http://qqb.com.qq'
  }
}

export const getInfo = async (param = {}, config = {}) =>
  await ajax.get(`${baseUrl.serverB[process.env.NODE_ENV] || ''}/mobile/home/getHeadData`, param, config)

export const test = async (param = {}, config = {}) =>
  await ajax.get(`${baseUrl.serverA[process.env.NODE_ENV] || ''}/mobile/home/getHeadData`, param, { ...config, timeout: 1000 })

