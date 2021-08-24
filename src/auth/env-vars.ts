import {
  TLS_SERVER_KEY_UNSAFE,
  TLS_SERVER_CERT_UNSAFE,
  TLS_SERVER_CERT_COMMON_NAME,
}                                 from './ca'
/**
 * Environment variables containing newlines in Node?
 *  `replace(/\\n/g, '\n')`
 *    https://stackoverflow.com/a/36439803/1123955
 */
const WECHATY_PUPPET_SERVICE_TLS_ROOT_CERT = (v?: string) => v
 || process.env['WECHATY_PUPPET_SERVICE_TLS_ROOT_CERT']?.replace(/\\n/g, '\n')
 || null  // The server and the client need different default values

const WECHATY_PUPPET_SERVICE_TLS_SERVER_CERT  = (v?: string) => v
 || process.env['WECHATY_PUPPET_SERVICE_TLS_SERVER_CERT']?.replace(/\\n/g, '\n')
 || TLS_SERVER_CERT_UNSAFE

const WECHATY_PUPPET_SERVICE_TLS_SERVER_KEY   = (v?: string) => v
 || process.env['WECHATY_PUPPET_SERVICE_TLS_SERVER_KEY']?.replace(/\\n/g, '\n')
 || TLS_SERVER_KEY_UNSAFE

const WECHATY_PUPPET_SERVICE_TLS_SERVER_NAME = (v?: string) => v
 || process.env['WECHATY_PUPPET_SERVICE_TLS_SERVER_NAME']?.replace(/\\n/g, '\n')
 || TLS_SERVER_CERT_COMMON_NAME

const WECHATY_PUPPET_SERVICE_NO_TLS_UNSAFE_SERVER = (v?: boolean) => typeof v === 'undefined'
  ? process.env['WECHATY_PUPPET_SERVICE_NO_TLS_UNSAFE_SERVER'] === 'true'
  : v
const WECHATY_PUPPET_SERVICE_NO_TLS_UNSAFE_CLIENT = (v?: boolean) => typeof v === 'undefined'
  ? process.env['WECHATY_PUPPET_SERVICE_NO_TLS_UNSAFE_CLIENT'] === 'true'
  : v

export {
  WECHATY_PUPPET_SERVICE_NO_TLS_UNSAFE_CLIENT,
  WECHATY_PUPPET_SERVICE_NO_TLS_UNSAFE_SERVER,
  WECHATY_PUPPET_SERVICE_TLS_ROOT_CERT,
  WECHATY_PUPPET_SERVICE_TLS_SERVER_CERT,
  WECHATY_PUPPET_SERVICE_TLS_SERVER_KEY,
  WECHATY_PUPPET_SERVICE_TLS_SERVER_NAME,
}
