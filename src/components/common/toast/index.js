
import Toast from './Toast'

//1.创建一个对象
const obj = { }

obj.install=function (Vue){
  // document.body.appendChild(Toast.$el)

  //1.创建组件构造器
  const toastcontrustor = Vue.extend(Toast)
  //2.new的方式，根据组件构造器，可以创建出来一个组件对象
  const toast = new toastcontrustor()
  //3.将组件对象，手动挂载到某一个元素上
  toast.$mount(document.createElement('div'))
  //4.toast.$el对应的就送div了
   document.body.appendChild(toast.$el)
  //1.默认情况下会把vue传进来，首先把toast加入到vue的原型中,这个原型就是我们创建好了的
  Vue.prototype.$toast=toast
}

//2.导出这个对象(default可以在别的文件中修改这个名字)
export default obj