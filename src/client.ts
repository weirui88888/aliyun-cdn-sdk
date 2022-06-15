import Console from '@alicloud/tea-console'
import OpenApi, * as $OpenApi from '@alicloud/openapi-client'
import Cdn, * as $Cdn from '@alicloud/cdn20180510'
import * as $tea from '@alicloud/tea-typescript'
import Util from '@alicloud/tea-util'

export default class Client {
  static createCdnClient(accessKeyId: string, accessKeySecret: string): Cdn {
    const config = new $OpenApi.Config({
      accessKeyId,
      accessKeySecret
    })
    config.endpoint = 'cdn.aliyuncs.com'
    return new Cdn(config)
  }

  static async DescribeCdnDomainConfigs(
    accessKeyId: string,
    accessKeySecret: string,
    domainName: string,
    functionNames: string
  ): Promise<$Cdn.DescribeCdnDomainConfigsResponse> {
    const client = Client.createCdnClient(accessKeyId, accessKeySecret)
    console.log('---------------------------client----------------------')
    console.log(client)
    console.log('---------------------------client----------------------')
    const req = new $Cdn.DescribeCdnDomainConfigsRequest({
      domainName,
      functionNames
    })
    console.log('---------------------------req----------------------')
    console.log(req)
    console.log('---------------------------req----------------------')
    const resp = await client.describeCdnDomainConfigs(req)
    console.log('---------------------------resp----------------------')
    console.log(resp)
    console.log('---------------------------resp----------------------')
    Console.log('--------------------获取域名的配置成功--------------------')
    return resp
  }
}
