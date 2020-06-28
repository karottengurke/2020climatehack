declare module '@zouloux/shake'
declare module 'react-obfuscate'
declare module 'gaussian' {
  export default function (
    mean: number,
    variance: number
  ): { random(n: number): number[] }
}
