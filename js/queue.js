/*
 * @Author: chenghao
 * @Date: 2019-10-09 15:19:00
 * @Last Modified by: chenghao
 * @Last Modified time: 2019-10-09 15:40:20
 * @desc: 队列的实现
 */

class Queue {
  constructor() {
    this.count = 0
    this.items = {}
    this.lowestCount = 0
  }
  enqueue(element) {
    this.items[this.count] = element
    this.count++
  }
  dequeue() {
    if (this.isEmpty()) return undefined
    const ret = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    return ret
  }
  peek() {
    if (this.isEmpty()) return undefined
    return this.items[this.lowestCount]
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
}
