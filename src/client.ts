// @ts-nocheck
import Console from '@alicloud/tea-console'
import OpenApi, * as $OpenApi from '@alicloud/openapi-client'
import Cdn, * as $Cdn from '@alicloud/cdn20180510'
import * as $tea from '@alicloud/tea-typescript'
import Util, * as $Util from '@alicloud/tea-util'
import * as core from '@actions/core'
import Console from '@alicloud/tea-console'

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

    core.info(
      `you use this action will call sdk api name:${CdnSdkApiName} by your input parameters.action:${ActionName}`
    )

    try {
      const options = new $Cdn[RequestActionName](requestOptions)
      const response = await client[CdnSdkApiName](options, runtime)

      core.info(
        '------------------------------- view your sdk api response start -------------------------------'
      )
      Console.log(response)
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
