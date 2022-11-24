function myCall(fn, context = window) {
    context.fn = fn;
  
    // 处理函数 fn 的参数，执行 fn 函数时把参数携带进去。
    const args = [...arguments].slice(2);
  
    // 获取执行函数 fn 产生的返回值。
    const res = context.fn(...args);
    delete context.fn;
  
    // 最终返回这个返回值
    return res;
  }


  const person ={
    username:'zhangsan'
  }

  function fn(a,b,c){
    return this.username+a+b+c
  }



const a=  myCall(fn,person,'luohao','sad','asdas')
  console.log(a);