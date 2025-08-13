import { downloadTool, extractTar } from '@actions/tool-cache'
import * as path from 'node:path'

export async function getToolchainPath(version: string) {
  assertsVersion(version)
  const toolchainPath = await downloadTool(getDownloadURL(version).toString())
  return await extractTar(toolchainPath)
}

function getDownloadURL(version: string) {
  const code = process.platform === 'win32' ? 'pc-cygwin' : 'w64-mingw32'
  const filename = `aarch64-${code}-msvcrt-toolchain.tar.gz`
  const url = new URL('https://github.com/Windows-on-ARM-Experiments')
  url.pathname = path.join(url.pathname, 'mingw-woarm64-build', 'releases', 'download', version, filename)
  return url.toString()
}

function assertsVersion(version: string): asserts version is string {
  if (version === 'latest' || /^\d{4}-\d{2}-\d{2}$/.test(version)) return
  throw new Error(`Invalid version format: ${version}. Expected format is YYYY-MM-DD.`)
}
