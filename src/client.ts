import Cdn20180510, * as $Cdn20180510 from '@alicloud/cdn20180510'
import OpenApi, * as $OpenApi from '@alicloud/openapi-client'
import Util, * as $Util from '@alicloud/tea-util'
import * as $tea from '@alicloud/tea-typescript'

export enum SupportActions {
  'DescribeCdnDomainConfigsRequest' = 'DescribeCdnDomainConfigsRequest'
}

export type SupportActionKeys = keyof typeof SupportActions

export default class Client {
  /**
   * 使用AK&SK初始化账号Client
   * @param accessKeyId
   * @param accessKeySecret
   * @return Client
   * @throws Exception
   */
  static createClient(
    accessKeyId: string,
    accessKeySecret: string
  ): Cdn20180510 {
    const config = new $OpenApi.Config({
      accessKeyId,
      accessKeySecret
    })
    config.endpoint = `cdn.aliyuncs.com`
    return new Cdn20180510(config)
  }

  // static async main(args: string[]): Promise<void> {
  //   const client = Client.createClient('accessKeyId', 'accessKeySecret')
  //   const describeCdnDomainConfigsRequest =
  //     new $Cdn20180510.DescribeCdnDomainConfigsRequest({
  //       domainName: 'hexo.newarray.vip',
  //       functionNames: 'filetype_based_ttl_set'
  //     })
  //   const runtime = new $Util.RuntimeOptions({})
  //   try {
  //     await client.describeCdnDomainConfigsWithOptions(
  //       describeCdnDomainConfigsRequest,
  //       runtime
  //     )
  //   } catch (error) {
  //     // @ts-ignore
  //     Util.assertAsString(error.message)
  //   }
  // }

  static async DescribeCdnDomainConfigsRequest(config: any): Promise<void> {
    const {accessKeyId, accessKeySecret, domainName, functionNames} = config
    const client = Client.createClient(accessKeyId, accessKeySecret)
    const describeCdnDomainConfigsRequest =
      new $Cdn20180510.DescribeCdnDomainConfigsRequest({
        // domainName: 'hexo.newarray.vip',
        // functionNames: 'filetype_based_ttl_set'
        domainName,
        functionNames
      })
    const runtime = new $Util.RuntimeOptions({})
    try {
      const res = await client.describeCdnDomainConfigsWithOptions(
        describeCdnDomainConfigsRequest,
        runtime
      )
      console.log('----------------------- start -------------------')
      console.log(res)
      console.log('----------------------- end -------------------')
    } catch (error) {
      // @ts-ignore
      Util.assertAsString(error.message)
    }
  }
}
