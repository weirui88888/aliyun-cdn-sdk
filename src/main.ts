import * as core from '@actions/core'
import Client from './client'

async function run(): Promise<void> {
  try {
    const accessKeyId: string = core.getInput('accessKeyId')
    const accessKeySecret: string = core.getInput('accessKeySecret')

    const resp = await Client.DescribeCdnDomainConfigs(
      accessKeyId,
      accessKeySecret,
      'hexo.newarray.vip',
      'filetype_based_ttl_set'
    )
    core.setOutput('DescribeCdnDomainConfigs', resp.body.domainConfigs)
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
