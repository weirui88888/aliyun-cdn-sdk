import * as core from '@actions/core'
import Client from './client'

async function run(): Promise<void> {
  try {
    const accessKeyId: string = core.getInput('accessKeyId')
    const accessKeySecret: string = core.getInput('accessKeySecret')
    const parameters: string = core.getInput('parameters')

    const response = await Client.Sdk(accessKeyId, accessKeySecret, parameters)
    core.setOutput('responseBody', response.body)
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
