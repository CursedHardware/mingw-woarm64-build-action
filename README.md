# mingw-woarm64-build-action

GitHub Action for building projects with MinGW targeting Windows on ARM64.

## Features

- Automated setup of MinGW toolchain for woarm64
- Cross-compilation support for Windows ARM64 targets
- Easy integration into GitHub Actions workflows

## Usage

```yaml
- name: Set up MinGW woarm64
  uses: CursedHardware/mingw-woarm64-build-action@main

- name: Build project
  run: aarch64-w64-mingw32-gcc ....
```

## Inputs

| Name      | Description                    | Default |
| --------- | ------------------------------ | ------- |
| `version` | The version of Mingw to build. | latest  |

## Outputs

| Name             | Description                            |
| ---------------- | -------------------------------------- |
| `toolchain-path` | The path to the built Mingw toolchain. |

## LICENSE

[MIT License](LICENSE.txt)
