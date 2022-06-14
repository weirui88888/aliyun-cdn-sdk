import * as core from '@actions/core'
// import * as github from '@actions/github'
import ApiClient, {SupportActionKeys} from './client'

async function run(): Promise<void> {
  try {
    // const accessKeyId: string = core.getInput('accessKeyId')
    // const accessKeySecret: string = core.getInput('accessKeySecret')
    // const actionName: SupportActionKeys = core.getInput(
    //   'actionName'
    // ) as SupportActionKeys

    // ApiClient[actionName]({
    //   accessKeyId,
    //   accessKeySecret,
    //   domainName: 'hexo.newarray.vip',
    //   functionNames: 'filetype_based_ttl_set'
    // })

    core.setOutput('time', new Date().toTimeString())
    console.log(`--------- ${123} end ---------`)
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
