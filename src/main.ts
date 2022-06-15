import * as core from '@actions/core'
import Client from './client'

async function run(): Promise<void> {
  try {
    const accessKeyId: string = core.getInput('accessKeyId')
    const accessKeySecret: string = core.getInput('accessKeySecret')

    Client.DescribeCdnDomainConfigs(
      accessKeyId,
      accessKeySecret,
      'hexo.newarray.vip',
      'filetype_based_ttl_set'
    )

    core.setOutput('time', new Date().toTimeString())
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
