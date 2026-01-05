# Agreeable RPC

🤝 Type-safe P2P RPC that just works. A [🍐 Pear](https://docs.pears.com) project.

```bash
npm install @agree-able/rpc
```

## Why Agreeable RPC?

- **Simple API**: Build P2P services with minimal boilerplate
- **Developer Experience**: Interactive testing UI included
- **Trust**: Define clear contracts between peers
- **Type Safety**: Full TypeScript/JSDoc support with runtime validation

## Getting Started

See [example](https://github.com/agree-able/rpc/tree/master/example) for a complete implementation:

1. Define Your API: `agreement.mjs`
2. Implement the Server: `server.mjs`
3. Create the Client: `client.mjs`

## Running

Start the server:

```bash
node example/server.mjs
-- Public key: mm3immxniji4p91ymorexrtwzp6fiehh3qixuhhdnbgd15t3y6zp
```

Run the client with the server's public key:

```bash
node example/client.mjs mm3immxniji4p91ymorexrtwzp6fiehh3qixuhhdnbgd15t3y6zp
```

## Interactive Testing

Use our UI tool to explore and test your APIs: [https://github.com/agree-able/ui](https://github.com/agree-able/ui)

## Learn More

- [Full Documentation](https://github.com/agree-able/rpc/tree/master/docs)

## Contributing

We welcome contributions! See our [contributing guide](CONTRIBUTING.md) for details.
