{
  let a,b,rest;
  [a,b,...rest] = [1,2,3,4,5,6,7,8,9,100];
  console.log(a,b,rest);
}

{
  let a,b;
  ({a:a,b:b} = {a:30,b:119});
  console.log(a,b);
}

{
  let a=10,b=20;
  console.log(a,b);
  [a,b] = [b,a];
  console.log(a,b);
}

{
  let a,b;
  function result() {
  	return [50,60];
  }
  [a,b] = result();
  console.log(a,b);
}

{
  let a,b;
  function result() {
  	return [1,2,3,4,5,6,7];
  }
  [a,,,,b]=result();
  console.log(1,5);
}

{
	let p,q;
	let o = {p:1,q:2};
	({p,q} = o);
	console.log(p,q);
}

{
	let {a=3,b=5}={a:10};
	console.log(a,b);
}

{
	let o = [
      {
      	title: 'hello',
      	content: [{
          title: 'content'
      	}]
      }
	];
	let [{title:title,content:[{title:content}]}] = o;
    console.log(title,content)

}

{
	let regExp1 = new RegExp('xyz','ig');
	let regExp2 = new RegExp(/xyz/ig,"iy");
	const str = 'XYZXYZ';
	console.log(regExp1.test(str),regExp2.test(str));
	console.log(regExp1.exec(str),regExp2.exec(str));
	console.log(regExp1.flags,regExp2.flags);
	console.log(regExp1.sticky,regExp2.sticky);
}

{
	console.log(/\u{61}/.test('a'));
	console.log(/\u{61}/u.test('a'));
	console.log(`\u{20BB7}`);
	let s='𠮷';
	console.log(/^.$/u.test(s));
	console.log(/𠮷{2}/u.test('𠮷𠮷'))
}

{
	let s='𠮷';
	console.log(s.length);
	console.log(s.charAt(0));
	console.log(s.charAt(1));
	console.log(s.charCodeAt(0));
	console.log(s.charCodeAt(1));
	console.log(s.codePointAt(0).toString(16));
	console.log(s.codePointAt(0).toString());
	console.log(s.codePointAt(1));
	console.log(`\u{20bb7}`);
	console.log(`\u20bb7`)
}

{
	let s='𠮷abcdefg'
	for (let i=0;i<s.length;i++) {
		console.log(s[i]);
	}
	for (let code of s) {
		console.log(code);
	}
}

{
	let s='string';
	console.log(s.includes('str'));
	console.log(s.startsWith('str'));
	console.log(s.endsWith('ing'));
	console.log(s.repeat(3));
}

{
	let name = 'lun';
	let template = `I am ${name}`;
	console.log(template);
}

{
	console.log('1'.padStart(20,'0'))
	console.log('1'.padEnd(20,'0'))
}

{
	let name = 'lun',
	    age = 18;
	    console.log(abc`I am ${name} , and ${age}`);
	function abc(s,v1,v2){
		console.log('s',s,'v1',v1,'v2',v2);
		return s+v1+v2;
	}
}

{
	console.log(String.raw`a\nb`);
	console.log(`a\nb`)
	console.log('a\nb')
}

{
	console.log('二进制0b',0b111110111);
	console.log('八进制0o',0o767)
}

{
	console.log('判断是否有尽',Number.isFinite(15));
	console.log('判断是否有尽',Number.isFinite('15'));
	console.log('判断是否有尽',Number.isFinite(NaN));
	console.log('判断是否有尽',Number.isFinite(1 / 0));
}

{
	console.log(Number.isNaN(NaN));
	console.log(Number.isNaN(1));
	console.log(Number.isNaN('abc'));
}

{
	console.log(Number.isInteger(0));
	console.log(Number.isInteger(1));
	console.log(Number.isInteger(1.1));
	console.log(Number.isInteger('1'));
}

{
	console.log(Number.MAX_SAFE_INTEGER,Number.MIN_SAFE_INTEGER);
	console.log(Number.isSafeInteger('10'));
	console.log(Number.isSafeInteger(100000000000000000000000));
	console.log(Number.isSafeInteger(9007199254740991));
	console.log(Number.isSafeInteger(-9007199254740991));
	console.log(Number.isSafeInteger(9007199254740991+1));
	console.log(Number.isSafeInteger(-9007199254740991-1));
}

{   
	console.log(Math.trunc(9.99));
	console.log(Math.trunc(1.99));
	console.log(Math.trunc(1.09));
	console.log(Math.trunc(1.00009));
}

{
	console.log(Math.sign(99));
	console.log(Math.sign(-99));
	console.log(Math.sign(0));
	console.log(Math.sign('0'));
	console.log(Math.sign('99'));
	console.log(Math.sign('-99'));
	console.log(Math.sign('abc'));
}

{
	console.log(Math.cbrt(-1));
	console.log(Math.cbrt(8));
}

{
	const arr = Array.of(1,2,3,4,5,6);
	console.log(arr);
	const empty = Array.of();
	console.log(empty);
}

{
	const p = document.querySelectorAll('p');
	const pArr = Array.from(p);
	console.log(pArr);
	pArr.forEach(function(item){
      console.log(item.innerText);
	})
	console.log(Array.from([1,2,3],function(item){
		return item*2;
	}))
}

{
	console.log([1,2,3,4,5,6].fill(7));
	console.log([1,2,3,4,5,6].fill(7,0,3));
}

{
	for (let index of ['a','b','c'].keys()){
		console.log(index);
	}
	for (let value of ['a','b','c'].values()){
		console.log(value);
	}
	for (let [index,item] of ['a','b','c'].entries()){
		console.log(index,item)
	}
}

{
	console.log([1,2,3,4,5].copyWithin(1,0,4))
}

{
	console.log([1,2,3,4,5].find(function(item){
		return item>4
	}));
	console.log([1,2,3,4,5].findIndex(function(item){
		return item>4
	}));

}

{
	console.log([1,2,NaN].includes(1));
	console.log([1,2,NaN].includes('1'));
	console.log([1,2,NaN].includes(NaN));
}

{
	function f(x,y=2){
		console.log(x,y);
	}
	f(1);
}

{
	function f(...arg){
		for (let item of arg){
			console.log(item);
		}
	}
	f(1,2,3,4,5,6,'a','b','c');
}

{
	console.log(...[1,2,3,4,5]);
	console.log('a',...[1,2,3]);
}

{
	let arrow1 = v => v*3;
	console.log(arrow1(2));
	let arrow2 = () => 5;
	console.log(arrow2())
}

{
	function tail(x){
		console.log(x);
	}
	function use(x){
		return tail(x);
	}
	use(5);
}

{
	let a = 'b';
	let o = {
	  [a]: 'I am b'
	}
	console.log(o);
}

{
	console.log(Object.is('abc','abc'));
	console.log(Object.is([],[]));
	let template = {a:1,b:1,c:1},copy={};
	Object.assign(copy,template);
	console.log(copy);
}

{
	['a','b','c'].forEach(function(item,index){
		console.log(index,item);
	});
	let o = {
		a:1,
		b:2,
		c:3
	};
	for (let [key,value] of Object.entries(o)) {
		console.log(key+':'+value);
	}
	for (let key in o) {
		console.log(key);
	}
}

{
	let a = Symbol();
	let b = Symbol();
	console.log(a === b);
}

{
	let a = Symbol.for('a');
	let b = Symbol.for('b');
	console.log(a === b);
	let c = Symbol.for('a');
	console.log(a === c);
}

{
	let a =Symbol.for('a');
	let o = {
	  [a]: 123,
	   a: 456,
	   b: 'b'
	}
	console.log(o);
    let symbol = Object.getOwnPropertySymbols(o)
    console.log(symbol);
    symbol.forEach(function(item,index){
    	console.log(index,item,o[item]);
    })
    console.log(Reflect.ownKeys(o));
    Reflect.ownKeys(o).forEach(function(item){
      console.log(o[item]);
    })
}

{
	let set = new Set();
	set.add(1);
	set.add(2);
	set.add(3);
	set.add(1);
	console.log(set,set.size);
}

{
	let arr = [1,2,3,4,5,6];
	let set = new Set(arr);
	console.log(set,set.size);
	for (let [key,value] of set.entries()){
		console.log(key,value);
	}
	console.log(set.has(6));
	set.delete(1);
	console.log(set);
	set.clear();
	console.log(set);
}

{
	let arr = [['a',1],['b',2],['c',3]];
	let map = new Map(arr);
	console.log(map);
	map.set('a',3);
	map.delete('c');
	console.log(map);
	map.clear();
	console.log(map);
}

{
	let o = {
		a: '1',
		b: '2'
	}
	let proxy = new Proxy(o,{
		get (target, key) {
          if (key === 'a') {
          	return target[key];
          }
          if (key === 'b') {
          	return target[key];
          }
		},
        set (target, key, value) {
          if (key === 'a') {
          	return target[key] = value;
          }else {
            return target[key];
          }
        },
        has (target , key) {
          if (key === 'a') {
          	return true;
          }else {
          	return false;
          }
        },
        deleteProperty (target, key) {
          if (key === 'a') {
          	delete target[key];
          	return true;
          }else {
          	return target[key];
          }
        },
        ownKeys (target) {
          return Object.keys(target).filter(item => item != 'a');
        }

	})
    console.log(proxy.a);
    console.log(proxy.b);
    proxy.a = 'lun';
    proxy.b = 'd';
    console.log(proxy.a);
    console.log(proxy.b);
    console.log('a' in proxy);
    console.log('b' in proxy);
    console.log(proxy);
    Object.keys(proxy).forEach(item => console.log(item));
}

{
	let o = {
		a: '1',
		b: '2'
	}
	Reflect.set(o,'a','2');
	console.log(o);
}

{
	class Test {
		constructor(name){
			this.name = name;
		}
		get longName () {
			return 'long' + this.name;
		}
		set longName (name) {
			this.name = name;
		}
		static tell () {
			console.log('我是静态方法');
		}
	}
    let test = new Test ('lun');
    console.log(test.longName);
    test.longName = 'test';
    console.log(test.longName);
    Test.tell();
    Test.attribute = '静态属性';
    console.log(Test.attribute);
}

// {
// 	let f1 = function () {
// 		console.log('1111');
// 		return new Promise(function(resolve,reject){
// 			setTimeout(function(){
//               resolve();
// 			},1000)
// 		})
// 	}
// 	f1().then(function(){
// 		console.log('1s后');
// 		return new Promise(function(resolve,reject){
// 			setTimeout(function(){
//               resolve();
// 			},1000)
// 		})
// 	}).then(function(){
// 		console.log('2s后');
// 	})
// }

{
	//异步操作
	// let f1 =  function () {
 //      return new Promise(function (resolve, reject) {
 //      	setTimeout(function () {
 //      	  console.log('1s后输出step1')
 //          resolve('2s后输出step2');
 //      	}, 1000)
 //      })
	// }
	// let f2 = function (data) {
	//   return new Promise(function (resolve, reject) {
	//   	setTimeout(function () {
	//   		console.log(data);
	//   		resolve('3s后输出step3');
	//   	}, 1000)
	//   })
	// }
	// let f3 = function (data) {
	//   return new Promise(function (resolve, reject) {
	//   	setTimeout(function () {
 //            console.log(data);
 //            resolve('result');
	//   	}, 1000)
	//   })
	// }
	// // f1().then(f2).then(f3);
	// // Promise.all([f1(),f2(),f3()]).then(function (result) {
 // //      console.log(result);
	// // });
 //    Promise.race([f1(),f2(),f3()]).then(function (data) {
 //    	console.log(data);
 //    })
}

{
	// let f1 = function (num) {
	// 	return new Promise(function (resolve,reject) {
	// 	  if (num > 9) {
	// 	  	resolve('log:'+num);
	// 	  }else {
	// 	    throw new Error('there is a error');
	// 	  }
	// 	})
	// }
	// let f2 = function (data) {
 //      console.log(data);
	// }
	// let err = function (err) {
 //      console.log(err);
	// }
	// f1(10).then(f2);
	// f1(9).then(f2).catch(err())
}

{   
	let arr=['a','b','c'];
	let map = arr[Symbol.iterator]();
	console.log(map.next());
	console.log(map.next());
	console.log(map.next());
	console.log(map.next());
	console.log(map.next());
	console.log(map.next());
}

{
	let obj = {
		a: [1,2,3],
		b: [4,5,6],
		[Symbol.iterator] () {
			const arr = ['a','b'],
			      len = arr.length;
			let index = 0; 
			return {
				next () {
					if (index < len) {
						return {
							     value: obj[arr[index++]],
							     done: false
							   }
					}else {
						return {
							     value: obj[arr[index++]],
							     done: true
						}
					}
				}
			}
		}
	}
	let m = obj[Symbol.iterator]();
	console.log(m.next());
	console.log(m.next());
	console.log(m.next());
	console.log(m.next());
	for (let value of obj) {
		console.log(value);
	}
	for (let value of [1,2,3,4].keys()) {
		console.log(value);
	}
}

{
	//generator
	let f = function* () {
      yield 1;
      yield 2;
      yield 3;
	};
	let t = f()
	console.log(t.next());
	console.log(t.next());
	console.log(t.next());
	console.log(t.next());
	console.log(t.next());

	let obj = {};
    obj[Symbol.iterator] = function* () {
      yield 'a';
      yield 'b';
      yield 'c';
    }
    for (let value of obj) {
    	console.log(value);
    }
    let tell = obj[Symbol.iterator]();
    console.log(tell.next());
    console.log(tell.next());
    console.log(tell.next());
    console.log(obj[Symbol.iterator]());
    console.log(obj[Symbol.iterator]());
    console.log(obj[Symbol.iterator]());
}

{
	//状态机
	let state = function* () {
		while(1) {
			yield 'a';
			yield 'b';
			yield 'c';
		}
	}
	let s = state();
	console.log(s.next());
	console.log(s.next());
	console.log(s.next());
	console.log(s.next());
	console.log(s.next());
}

{
    let obj = {
      a: 1,
      b: 2,
      c: 3
    }
    obj[Symbol.iterator] = function* () {
      const arr = ['a', 'b', 'c'];
      for (let index = 0; index < arr.length; index++) {
        yield obj[arr[index]];
      }
    }
    for (let value of obj) {
    	console.log(value);
    }
}

{
	let arr = ['a', 'b', 'c'];
	for (let value of arr) {
		console.log(value);
	}
	let a = Symbol.for('a');
	let b = Symbol.for('a');
	console.log(a === b);
	let obj = {
		[a]: '1',
		a: '2'
	}
	console.log(obj);
}

{
	let prize = function (count) {
		console.log(`剩余抽奖字数: ${count}!`);
	}
	let f = function* (count) {
		while(count > 0) {
			yield prize(--count)
		}
	}
	let p = f(5);
	let btn = document.createElement('button');
    btn.id = 'btn';
    btn.textContent = '抽奖';
    document.body.appendChild(btn);
    document.getElementById('btn').addEventListener('click',function () {
      p.next()
    })
}

{
	let f1 = function* () {
		yield new Promise(function (resolve, reject) {
		  setTimeout(function () {
            resolve({code: 0});
		  }, 1000)	
		})
	}
	let f2 = function () {
		let p = f1();
		p.next().value.then(function (data) {
			if (data.code != 0) {
				console.log('wait');
				f2();
			}else {
			  console.log(data.code);
			}
		})
	}
	f2();
}

{
	let f = function (a,b,...arg) {
		console.log(arg.length);
		for (let i = 0; i < arg.length; i++) {
			console.log(arg[i]);
		}
	}
	f(1,2,3,4,5,6,7,8,9);
}