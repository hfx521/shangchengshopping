import request from '@/utils/http'

// 封装接口 获取商品数据
export const getDetail = (id) => {
  return request({
    url: '/goods',
    params: {
      id
    }
  })
}
//热卖商品接口
export const getHotGoodsAPI = ({ id, type, limit = 3 }) => {
  return request({
    url: '/goods/hot',
    params: {
      id,
      type,
      limit
    }
  })
}