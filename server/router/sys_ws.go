package router

import (
	"gin-vue-admin/api/v1"
	"github.com/gin-gonic/gin"
)

func InitWsRouter(Router *gin.RouterGroup) {
	WsRouter := Router.Group("ws")
	{
		WsRouter.GET("conn",v1.Ws)
	}
}
