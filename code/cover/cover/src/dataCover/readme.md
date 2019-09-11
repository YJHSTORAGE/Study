可以先设置一个默认值，然后用新的值覆盖这个原来的值。
测试下面这两个例子
const { showType='bianyan' } = {showType='xuexi',opt:'1'}
const { showType='bianyan' } = {opt:'1'}