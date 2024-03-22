
import httpInstance from "@/utils/http"
//导出接口
export function getCategoryAPI () {
  return httpInstance({
    url: '/home/category/head'
  })
}
//这是获取全部商品的接口 