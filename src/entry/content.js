// console.log('hello world content todo something~')

// function injectJs(path) {
//   let temp = document.createElement('script');
//   temp.setAttribute('type',"text/javascript");
//   temp.src = chrome.runtime.getURL(path);
//   temp.onload= function(){
//     this.parentNode.removeChild(this);
//   }
//   document.head.appendChild(temp);
// }

// injectJs('./inject/inject1.js')
// console.log("注入成功");

  /**
   * 将js文件注入到页面中
   * 注入的文件还需要再manifest.json中声明
   * @param {*} path 文件的路径，相对于dist包中的路径
   */
  function injectJs(path){
    // 创建script标签
    let temp = document.createElement('script');
    // 设置type属性
    // temp.type = "text/javascript";
    temp.setAttribute("type","text/javascript")
    // V2版本特有的读取文件路径
    temp.src = chrome.runtime.getURL(path);
    // 将temp注入到页面中
    
    temp.onload = function(){
      // 加载完成后删除节点
      this.parentNode.removeChild(this);
    }
    document.head.appendChild(temp);
    // 在页面载入完毕后触发事件
  }
  
  injectJs('./inject/inject1.js');
  console.log("注入成功");