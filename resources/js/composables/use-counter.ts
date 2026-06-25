import { ref, type Ref } from 'vue'

export interface CounterApi {
  count: Readonly<Ref<number>>
  increment: () => void
  decrement: () => void
  reset: () => void
  set: (value: number) => void
}

export function useCounter(initial: number = 0): CounterApi {
  const count = ref(initial)

  const increment = () => count.value++
  const decrement = () => count.value--
  const reset = () => (count.value = initial)
  const set = (value: number) => (count.value = value)

  return { count, increment, decrement, reset, set }
}
