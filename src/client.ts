// @ts-nocheck
import Console from '@alicloud/tea-console'
import OpenApi, * as $OpenApi from '@alicloud/openapi-client'
import Cdn, * as $Cdn from '@alicloud/cdn20180510'
import * as $tea from '@alicloud/tea-typescript'
import Util, * as $Util from '@alicloud/tea-util'
import * as core from '@actions/core'
import chalk from 'chalk'

const log = console.log
log(chalk.blue('Hello') + ' World' + chalk.red('!'))

// const logger = (message: string, origin: any) => {
//   log(chalk.white.bgRed.bold(`------${message} log start ------`))
//   log(origin)
//   log(chalk.white.bgRed.bold(`------${message} log end ------`))
// }

export default class Client {
  static createCdnClient(accessKeyId: string, accessKeySecret: string): Cdn {
    const config = new $OpenApi.Config({
      accessKeyId,
      accessKeySecret
    })
    config.endpoint = 'cdn.aliyuncs.com'
    return new Cdn(config)
  }

  static async Sdk(
    accessKeyId: string,
    accessKeySecret: string,
    parameters: string
  ): Promise<any> {
    // logger(
    //   'view parameters',
    //   `you use this action with parameters:${parameters}`
    // )

    const client = Client.createCdnClient(accessKeyId, accessKeySecret)

    let {action, runtimeOptions, ...requestOptions} = JSON.parse(parameters)

    for (let [optionsKey, optionValue] of Object.entries(requestOptions)) {
      if (typeof optionValue === 'object') {
        requestOptions[optionsKey] = Util.toJSONString(requestOptions.functions)
      }
    }

    const runtime = !!runtimeOptions
      ? new $Util.RuntimeOptions(runtimeOptions)
      : new $Util.RuntimeOptions({})

    let RequestActionName = `${action}Request`

    let ActionName = action.replace(action[0], action[0].toLowerCase())

    let CdnSdkApiName = `${ActionName}WithOptions`

    // logger(
    //   'view sdk api name',
    //   `you use this action will call sdk api name:${CdnSdkApiName} by your input`
    // )

    // logger(
    //   'view cdn open api name',
    //   `your open api name is ${action}, you can find more message and support in https://help.aliyun.com/document_detail/106661.html`
    // )

    try {
      const options = new $Cdn[RequestActionName](requestOptions)
      const response = await client[CdnSdkApiName](options, runtime)

      // logger('view your sdk api response', response)

      return response
    } catch (error) {
      // @ts-ignore
      Util.assertAsString(error.message)
      // @ts-ignore
      core.setFailed(error.message)
    }
  }
}
