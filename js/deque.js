/*
 * @Author: chenghao
 * @Date: 2019-10-09 15:47:22
 * @Last Modified by: chenghao
 * @Last Modified time: 2019-10-09 17:23:01
 * @desc: 双端队列的实现
 */
class Deque {
  constructor() {
    this.count = 0
    this.items = {}
    this.lowestCount = 0
  }
  isEmpty() {
    return this.size() === 0
  }
  size() {
    return this.count - this.lowestCount
  }
  clear() {
    this.items = {}
    this.count = 0
    this.lowestCount = 0
  }
  addFront(element) {
    if (this.isEmpty) {
      this.addBack(element)
    } else if (this.lowestCount > 0) {
      this.lowestCount--
      this.items[this.lowestCount] = element
    } else {
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1]
      }
      this.count--
      this.lowestCount = 0
      this.items[0] = element
    }
  }
  addBack(element) {
    this.items[this.count] = element
    this.count++
  }
  removeFront() {
    if (this.isEmpty()) return undefined
    const ret = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount++
    return ret
  }
  removeBack() {
    if (this.isEmpty()) return undefined
    this.count--
    const result = this.items[this.count]
    delete this.items[this.count]
    return result
  }
  peekFront() {
    if (this.isEmpty()) return undefined
    return this.items[this.lowestCount]
  }
  peekBack() {
    if (this.isEmpty()) return undefined
    return this.items[this.count - 1]
  }
}
