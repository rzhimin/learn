// 插件：对 Vue 的增强
// 插件的本质：一个包含 install() 的对象
// 创建插件
export default {
    // install() 函数
    install(Vue, x, y, z) {
        console.log(x, y, z);
        // 全局过滤器
        Vue.filter('mySlice', function (value) {
            return value.slice(0, 4);
        });
        // 定义全局指令
        Vue.directive('fbind', {
            // 指令与元素成功绑定时（一上来）
            bind(element, binding) {
                element.value = binding.value;
            },
            // 指令所在元素被插入页面时
            inserted(element, binding) {
              console.log(binding)
                element.focus();
            },
            // 指令所在的模板被重新解析时
            update(element, binding) {
                element.value = binding.value;
            }
        });

        // 定义混入
        Vue.mixin({
            data() {
                return {
                    x: 100,
                    y: 200
                };
            }
        });

        // 给 Vue 原型上添加一个方法（vm 和 vc 都能用）
        Vue.prototype.hello = () => {
            alert('你好啊');
        };
    }
};
