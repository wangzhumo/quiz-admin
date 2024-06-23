import { consola } from 'consola/browser'

export class Logger {
  static d(msg: any) {
    consola.debug(msg)
  }

  static i(msg: any) {
    consola.info(msg)
  }

  static e(msg: any) {
    consola.error(msg)
  }

  static s(msg: any) {
    consola.success(msg)
  }

  static raw(msg: any) {
    consola.log.raw(msg)
  }



}
