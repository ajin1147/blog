## 原型链

### 作用
1. 提供属性和方法的继承：通过原型链，子类可以继承父类中的属性和方法，可以大大减少重复代码
2. 减少内存使用：由于所有的实例对象共享原型对象，因此可以减少内存的使用，提高程序的性能。
3. 构建对象：使用原型链，可以通过构造函数来创建对象，且所有的构造函数都有一个prototype属性，通过该属性可以访问对象的原型。
4. 方便修改原型：使用原型链可以方便地修改原型对象，将一些公共的方法和属性添加到原型中，可以让所有的实例对象都能够共享这些方法和属性。
5. 动态修改类行为：通过修改原型对象，可以动态地改变类的行为，例如添加新的方法或重写原有方法等。

### 什么是原型链
:::tip
1. prototype是函数的属性，这个属性的值是一个对象，那么这个对象也有__proto__属性
2. __proto__是对象的属性，构造函数实例化出来的对象通过__proto__属性可以访问到构造函数的prototype属性
3. 构造函数的prototype的__proto__默认指向Object.prototype，Object.prototype.__proto__指向null；可手动修改__proto__属性，让它指向另外一个构造函数的prototype属性，这样就可以实现原型链的继承
:::

* 不使用原型链的情况：\
Person是构造函数，p1和p2是它的实例对象，它们各自的内存空间中都会包含name、age、sex等属性，这样就会造成内存的浪费
```js
function Person(name) {
  this.name = name
  this.age = 18
  this.sex = '男'
}
let p1 = new Person('张三')
let p2 = new Person('李四')
```
* 使用原型链的情况：\
现在p1和p2的内存空间中只包含name属性，age和sex都存在于原型对象中，因此所有的实例对象都可以共享这些属性，这样可减少内存开销
```js
function Person(name) {
  this.name = name
}
Person.prototype.age = 18
Person.prototype.sex = '男'
let p1 = new Person('张三')
let p2 = new Person('李四')
```
* 查找属性的顺序：\
  先在实例对象中查找，如果没有找到，就会去原型对象中查找，如果还没有找到，就会去原型对象的原型对象中查找，一直找到Object.prototype，如果还没有找到，就会返回undefined

![原型链](/img/原型链.png)


## this
* 普通函数\
普通函数中的this指向window，严格模式下指向undefined
```js
function fn() {
  console.log(this)
}
fn() // window
```
* 对象方法\
对象方法中的this指向调用该方法的对象
```js
let obj = {
  name: '张三',
  fn: function() {
    console.log(this)
  }
}
obj.fn() // obj
```
* 构造函数\
构造函数中的this指向实例对象
```js
let _this;
function fn() {
  _this = this
}
let obj = new fn()
console.log(_this === obj) // true
```
* 箭头函数\
箭头函数中的this指向定义时所在的对象，而不是调用时所在的对象；\
也可以理解为箭头函数没有自己的this，它的this是继承外层代码块的this
```js
let obj = {
  a: function() {
    return this
  },
  t: this,
  b: () => {
    return this
  }
}
console.log(obj.a()) // obj
console.log(obj.t) // window
console.log(obj.b()) // window
```
```js
function fn() {
  this.t = this
  this.a = () => this
  this.b = function() {
    return this
  }
}
let obj = new fn()
console.log(obj.t === obj) // true
console.log(obj.b() === obj) // true
console.log(obj.a() === obj) // true
```


## call、apply、bind


