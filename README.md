# react in vue
A multi react and vue remote app implementation using [originjs/vite-plugin-federation](https://github.com/originjs/vite-plugin-federation) that attempts to not require react to be a dependency of the vue host (but its also not working as expected)

Also has a shared store state using xoid.

### Start Project
`pnpm install`
`pnpm serve` to serve all
`http://localhost:7000/` is the vue host


### Apps and Packages

- `apps`: remotes and host to test with
- `packages/config`: shared `eslint`, and `ts` configurations

