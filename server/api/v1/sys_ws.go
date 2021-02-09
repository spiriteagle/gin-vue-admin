package v1

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"gin-vue-admin/utils/ws"
	"github.com/gorilla/websocket"
	"net/http"
	"github.com/satori/go.uuid"
)

// @Tags Base
// @Summary 用户注册账号
// @Produce  application/json
// @Param data body model.SysUser true "用户注册接口"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"注册成功"}"
// @Router /base/register [post]
func Ws(c *gin.Context) {

	fmt.Println(" Api Ws ")




	// change the reqest to websocket model
	conn, error := (&websocket.Upgrader{CheckOrigin: func(r *http.Request) bool { return true }}).Upgrade(c.Writer, c.Request, nil)
	if error != nil {
		fmt.Println(error.Error())
		http.NotFound(c.Writer, c.Request)
		return
	}
	// websocket connect
	client := &ws.Client{Id: uuid.NewV4().String(), Socket: conn, Send: make(chan []byte)}

	ws.Manager.Register <- client

	fmt.Printf("%V",client)

	go client.Read()
	go client.Write()






	return
}

