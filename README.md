# 福彩3D数据API

这是一个用于获取福彩3D开奖数据的API服务。

## API端点

- `/api/lottery` - 获取最新50期开奖数据
- `/api/test` - 测试API是否正常工作

## 使用方法

```javascript
fetch('https://your-app.vercel.app/api/lottery')
  .then(res => res.json())
  .then(data => console.log(data));
