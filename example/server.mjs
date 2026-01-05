// @ts-check
import { encode } from 'hypercore-id-encoding'
import { loadAgreement, host, z } from '../index.mjs'
import { AddTwo, Ping, GenerateNickname } from './agreement.mjs'

/** @type { z.infer<AddTwo> } addTwo */
const addTwo = async ({ a, b }) => {
  console.log(`> addTwo(${a}, ${b})`)
  return a + b
}
   
/** @type { z.infer<Ping> } ping */
const ping = async () => console.log('> ping()')

/** @type { z.infer<GenerateNickname> } generateNickname */
const generateNickname = async ({ first, last }) => {
  console.log(`> generateNickname(${first}, ${last})`)
  return [first, last].map(s => s[0].toUpperCase()).join('.');
}

const { keyPair } = await host(await loadAgreement('./agreement.mjs', import.meta.url), { 
  addTwo, ping, generateNickname 
})

console.log('-- Public key:', encode(keyPair.publicKey))
