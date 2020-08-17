const { getList,getDetail } = require('../controller/blog');
const { SuccessModel, ErrorModel} = require('../model/resModel')

const handleBlogRouter = (req,res)=>{
  const method = req.method; //GET POST

//  获取博客列表
  if(method === 'GET' && req.path === '/api/blog/list'){
    const author = req.query.author || ''
    const keyword = req.query.keyword || ''
    const listData = getList(author,keyword)
    return new SuccessModel(listData)
  }

//  获取博客详情
  if(method === 'GET' && req.path === '/api/blog/detail'){
    const id = req.query.id;
    const detailData = getDetail(id)
    return new SuccessModel(detailData)
  }

//  新建一篇博客
  if(method === 'POST' && req.path === '/api/blog/new'){
    return {
      msg:'这是新建博客接口'
    }
  }
};

module.exports = handleBlogRouter;
