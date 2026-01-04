// @ts-check
import { z, Caller } from '../index.mjs'
import agreement, { AddTwo, Ping, GenerateNickname } from './agreement.mjs';

const peerKey = process.argv[2]
const caller = new Caller(peerKey)
/** @type{{ 
 *   addTwo: z.infer<AddTwo> 
 *   ping: z.infer<Ping>
 *   generateNickname: z.infer<GenerateNickname>
 * }} */
// @ts-expect-error
const { addTwo, ping, generateNickname } = caller.proxy(agreement)

const sum = await addTwo({ a: 1, b: 2 })
console.log(sum)

await ping({})

const nickname = await generateNickname({ first: 'steve', last: 'smith' })
console.log(nickname)

caller.destroy()
