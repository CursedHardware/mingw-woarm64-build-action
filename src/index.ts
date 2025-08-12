import { addPath, getInput, setOutput } from '@actions/core'
import { downloadTool, extractTar } from '@actions/tool-cache'
import * as path from 'node:path'

async function main() {
  const version = getInput('version', { required: true, trimWhitespace: true })
  assertsVersion(version)

  const toolchainPath = await downloadTool(buildDownloadURL(version))
  const downloadDir = await extractTar(toolchainPath)

  addPath(path.join(downloadDir, 'bin'))
  setOutput('toolchain-path', downloadDir)
}

main()

function assertsVersion(version: string): asserts version is string {
  if (version === 'latest' || /^\d{4}-\d{2}-\d{2}$/.test(version)) return
  throw new Error(`Invalid version format: ${version}. Expected format is YYYY-MM-DD.`)
}

function buildDownloadURL(version: string) {
  const filename =
    process.platform === 'win32'
      ? 'aarch64-pc-cygwin-msvcrt-toolchain.tar.gz'
      : 'aarch64-w64-mingw32-msvcrt-toolchain.tar.gz'

  const cloned = new URL('https://github.com/Windows-on-ARM-Experiments/mingw-woarm64-build/releases/download/')
  cloned.pathname = path.join(cloned.pathname, version, filename)
  return cloned.toString()
}
