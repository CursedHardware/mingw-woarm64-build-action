import { addPath, error, getInput, setOutput } from '@actions/core'
import * as path from 'node:path'
import { getToolchainPath } from './toolchain'

async function main() {
  const version = getInput('version', { required: true, trimWhitespace: true })

  const toolchainPath = await getToolchainPath(version)

  addPath(path.join(toolchainPath, 'bin'))
  setOutput('toolchain-path', toolchainPath)
}

main().catch(error)
