// es6模块 功能主要有两个命令构成： export 和import 
// export 用于规定模块的对外接口 import用于输入其他模块提供的功能
// 一个模块就是独立的文件


    // export const name = '韩绝';
    // export const age = 18;
    // export function sayName(){
    //     console.log(this.name);
    // }


const name = 'john';
const age =18;
function sayName(){
    console.log("这是模块导出的模块名!");
}
export {name, age, sayName}

// 导出类 或者 对象 在一个模块中, 只能导出一个  export导出无限制
const obj = {
    foo: 'f11'
}

export default Object;

