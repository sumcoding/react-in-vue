# react in vue & vue in react
A multi react/vue and react/vue remote app implementation using [originjs/vite-plugin-federation](https://github.com/originjs/vite-plugin-federation) this also attempts to not require react to be a dependency of the vue host

Also has a shared store state using xoid.

### Start Project
`pnpm install`
`pnpm serve` to serve all
`http://localhost:7000/` is the vue host


### Apps and Packages

- `apps`: remotes and host to test with
- `packages/config`: shared `eslint`, and `ts` configurations

