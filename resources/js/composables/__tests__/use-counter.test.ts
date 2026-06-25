import { describe, it, expect } from 'vitest'
import { useCounter } from '../use-counter'

describe('useCounter', () => {
  it('starts at 0 by default', () => {
    const { count } = useCounter()
    expect(count.value).toBe(0)
  })

  it('starts at the provided initial value', () => {
    const { count } = useCounter(7)
    expect(count.value).toBe(7)
  })

  it('increments', () => {
    const { count, increment } = useCounter(5)
    increment()
    expect(count.value).toBe(6)
  })

  it('decrements', () => {
    const { count, decrement } = useCounter(5)
    decrement()
    expect(count.value).toBe(4)
  })

  it('resets to the initial value', () => {
    const { count, increment, reset } = useCounter(3)
    increment()
    increment()
    expect(count.value).toBe(5)
    reset()
    expect(count.value).toBe(3)
  })

  it('supports absolute set', () => {
    const { count, set } = useCounter()
    set(42)
    expect(count.value).toBe(42)
  })
})
