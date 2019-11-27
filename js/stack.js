/*
 * @Author: chenghao
 * @Date: 2019-09-26 17:40:50
 * @Last Modified by: chenghao
 * @Last Modified time: 2019-09-26 18:04:25
 * @Desc: 栈的实现
 */

export default class Stack {
  constructor () {
    this.items = []
  }
  push (elem) {
    this.items.push(elem)
  }
  pop () {
    return this.items.pop()
  }
  isEmpty () {
    return this.items.length === 0
  }
  peek () {
    if (this.isEmpty()) return undefined
    return this.items[this.items.length - 1]
  }
  size () {
    return this.items.length
  }
  clear () {
    this.items = []
  }
}
