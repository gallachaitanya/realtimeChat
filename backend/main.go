package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/gallachaitanya/realtimeChat/pkg/websocket"
)

//define the websocket endpoint
func serveWs(pool *websocket.Pool,w http.ResponseWriter,r *http.Request){
	fmt.Println(r.Host)

	//upgrade the connection to a websocket connection
	conn, err := websocket.Upgrade(w,r)
	if err != nil{
		log.Println(err)
	}

	client := &websocket.Client{
		Conn: conn,
		Pool: pool,
	}

	pool.Register <- client
	client.Read()

}

func setUpRoutes(){
	pool := websocket.NewPool()
	go pool.Start()
	//mapping our '/ws' endpoint to the serveWs function
	http.HandleFunc("/ws",func(w http.ResponseWriter, r *http.Request) {
		serveWs(pool,w,r)
	})
}

func main(){
	fmt.Println("Distributed Chat App v1.0")
	setUpRoutes()
	http.ListenAndServe(":8080",nil)
}