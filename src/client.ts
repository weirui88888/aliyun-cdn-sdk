// @ts-nocheck
import Console from '@alicloud/tea-console'
import OpenApi, * as $OpenApi from '@alicloud/openapi-client'
import Cdn, * as $Cdn from '@alicloud/cdn20180510'
import * as $tea from '@alicloud/tea-typescript'
import Util, * as $Util from '@alicloud/tea-util'
import * as core from '@actions/core'

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
    core.info(
      '------------------------------- view parameters start -------------------------------'
    )
    core.info(`you use this action with parameters:${parameters}`)
    core.info(
      '-------------------------------- view parameters end --------------------------------'
    )

    const client = Client.createCdnClient(accessKeyId, accessKeySecret)

    let {action, ...requestOptions} = JSON.parse(parameters)

    const hasRuntimeOptions = !!requestOptions.runtimeOptions

    const runtimeOptions = hasRuntimeOptions
      ? new $Util.RuntimeOptions(requestOptions.runtimeOptions)
      : new $Util.RuntimeOptions({})

    if (hasRuntimeOptions) {
      delete requestOptions.runtimeOptions
    }

    let ActionName = `${action}Request`

    let ClientApiName = `${action.replace(
      action[0],
      action[0].toLowerCase()
    )}WithOptions`

    core.info(
      '------------------------------- view your sdk api name start -------------------------------'
    )
    core.info(`you use this action will call sdk api name:${ClientApiName}`)
    core.info(
      '-------------------------------- view your sdk api name end --------------------------------'
    )

    try {
      const options = new $Cdn[ActionName](requestOptions)
      const response = await client[ClientApiName](options, runtimeOptions)

      core.info(
        '------------------------------- view your sdk api response start -------------------------------'
      )
      core.info(`you get below response by your sdk api called:${response}`)
      core.info(
        '-------------------------------- view your sdk api response end --------------------------------'
      )
      return response
    } catch (error) {
      // @ts-ignore
      Util.assertAsString(error.message)
      // @ts-ignore
      core.setFailed(error.message)
    }
  }
}
