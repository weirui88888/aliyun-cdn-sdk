import * as core from '@actions/core'
import Client from './client'

async function run(): Promise<void> {
  try {
    const accessKeyId: string = core.getInput('accessKeyId')
    const accessKeySecret: string = core.getInput('accessKeySecret')

    const DescribeCdnDomainConfigs = Client.DescribeCdnDomainConfigs(
      accessKeyId,
      accessKeySecret,
      'hexo.newarray.vip',
      'filetype_based_ttl_set'
    )
    core.setOutput('DescribeCdnDomainConfigs', DescribeCdnDomainConfigs)
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
