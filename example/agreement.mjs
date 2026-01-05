import { z, addRoute } from '@agree-able/contract'

// Explicit zod types
export const AddTwo = z.function().args(z.object({
  a: z.number().describe('the first number'),
  b: z.number().describe('the second number')
})).returns(z.promise(z.number().describe('the sum of a and b')))

export const Ping = z.function().args(z.object({
})).returns(z.promise())

export const GenerateNickname = z.function().args(z.object({
  first: z.string().describe('the first name'),
  last: z.string().describe('the last name')
})).returns(z.promise(z.string()))

const api = { 
  role: 'example', 
  version: '1.0.0',
  description: 'a simple example api',
  routes: {
    addTwo: addRoute(AddTwo),
    ping: addRoute(Ping),
    generateNickname: addRoute(GenerateNickname)
  }
}
export default api 
