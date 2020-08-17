const getList = (author,keyword) =>{
//  先返回假数据（格式是正确的）
  return [
    {
      id:1,
      title:'标题A',
      content:'内容A',
      createTime:1546610491112,
      author:'zhangsan'
    },
    {
      id:2,
      title:'标题B',
      content:'内容B',
      createTime:1546610491112,
      author:'lisi'
    }
  ]
};

const getDetail = (id)=>{
  console.log('iddd',id)
  return[{
    id:1,
    title:'标题A',
    content:'内容A',
    createTime:1546610491112,
    author:'zhangsan'
  },]
};

const newBlog = (blogData = {})=>{
//  blogData是一个博客对象， 包含title,content属性
  return{
    id:3, //表示新建博客，插入到数据表里面的id
  }
};

const updateBlog = (id,blogData = {})=>{
  return true
};

const deleteBlog = (id)=>{
  return true
};

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  deleteBlog
};