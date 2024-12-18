# Agreeable RPC

🤝 Type-safe P2P RPC that just works. A [🍐](https://docs.pears.com) project.

## Why Agreeable RPC?

- **Simple API**: Build P2P services with minimal boilerplate
- **Developer Experience**: Interactive testing UI included
- **Trust**: Define clear contracts between peers
- **Type Safety**: Full TypeScript/JSDoc support with runtime validation

## Quick Start

### 1. Install

```bash
npm i @agree-able/contract @agreeable/rpc
```

### 2. Define Your API (agreement.mjs)

```js
import { z, addRoute } from '@agree-able/contract'

// Define your functions with Zod
export const AddTwo = z.function()
  .args(z.object({
    a: z.number(),
    b: z.number()
  }))
  .returns(z.promise(z.number()))

// Create the API contract
export default {
  role: 'calculator',
  version: '1.0.0',
  routes: {
    addTwo: addRoute(AddTwo)
  }
}
```

### 3. Implement the Server (server.mjs)

```js
// @ts-check
import { loadAgreement, host } from '@agree-able/rpc'
import { AddTwo } from './agreement.mjs'

/** @type { z.infer<AddTwo> } addTwo */
const addTwo = async ({a, b}) => a + b

host(await loadAgreement('./agreement.mjs', import.meta.url), { addTwo })
```

### 4. Create the Client (client.mjs)

```js
// @ts-check
import { Caller } from '@agree-able/rpc'
import agreement, { AddTwo } from './agreement.mjs'

const peerKey = process.argv[2]
const caller = new Caller(peerKey)
/** @type{{ 
 *   addTwo: z.infer<AddTwo> 
 * }} */
// @ts-expect-error
const { addTwo } = caller.proxy(agreement)

// Call remote functions
const result = await addTwo({ a: 1, b: 2 })
console.log(result) // 3
caller.destroy()
```

## Running the Example

1. Start the server:
```bash
node server.mjs
# Will print a public key like: 3e32bb2d191316d952ae77439f7ec00a5c4fea8a01953b84d1b4eee36173e1ca
```

2. Run the client with the server's public key:
```bash
node client.mjs 3e32bb2d191316d952ae77439f7ec00a5c4fea8a01953b84d1b4eee36173e1ca
```

## Interactive Testing

Use our UI tool to explore and test your APIs: [https://github.com/agree-able/ui](https://github.com/agree-able/ui)

## Learn More

- [Full Documentation](https://github.com/agree-able/rpc/tree/master/docs)
- [Example](https://github.com/agree-able/rpc/tree/master/demo)

## Contributing

We welcome contributions! See our [contributing guide](CONTRIBUTING.md) for details.


