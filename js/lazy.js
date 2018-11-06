class LazyImage {
    constructor(selector) {
      // 懒记载图片列表，将伪数组转为数组，以便可以使用数组的api
      this.imageElements = [...document.querySelectorAll(selector)]
      this.init()
    }
  
    inViewShow() {
      this.imageElements.map((item, index) => {
        const rect = item.getBoundingClientRect()
        // 出现在可视区域内则加载图片
        if (rect.top < document.documentElement.clientHeight) {
          item.src = item.dataset.src
          this.imageElements.splice(index, 1)
          if(this.imageElements.length === 0) {
            // 如果全部都加载完 则去掉滚动事件监听
            document.removeEventListener('scroll', this._throttleFn)
          }
        }
      })
    }
  
    throttle(fn, delay = 15, mustRun = 30) {
      let t_start = null
      let timer = null
      let context = this
      return function() {
        let t_current = +(new Date())
        let args = Array.prototype.slice.call(arguments)
        clearTimeout(timer)
        if(!t_start) {
          t_start = t_current
        }
        if(t_current - t_start > mustRun) {
          fn.apply(context, args)
          t_start = t_current
        } else {
          timer = setTimeout(() => {
            fn.apply(context, args)
          }, delay)
        }
      }
    }
  
    init() {
      this.inViewShow()
      this._throttleFn = this.throttle(this.inViewShow)
      document.addEventListener('scroll', this._throttleFn)
    }
  }