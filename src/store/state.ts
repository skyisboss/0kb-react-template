import { create } from 'zustand'

interface IPerson {
  name: string
  age: number
  increase: () => void
}
/**
 * https://juejin.cn/post/7221740907233984572
 * 使用 const { name, age } = usePersonStore()
 * 这样是可行的，但是上面代码将会订阅整个状态，这意味着当我们的组件在某个状态更新后，
 * 所有含 name，age 的组件都会全部渲染，即使 name，age 没有改变
 * 
 * 我们可以通过导出自定义钩子来避免全局订阅的情况
 */

export const usePersonStore = create<IPerson>()((set) => ({
  name: 'react-template',
  age: 2023,
  increase: () => {    
    set((state: any) => ({ age: state.age + 1 }))
  }
}))

export const usePersonName = () => usePersonStore(state => state.name)
export const usePersonAge = () => usePersonStore(state => state.age)
export const usePersonIncrease = () => usePersonStore(state => state.increase)