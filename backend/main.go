package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/websocket"
)

//We will need to define a upgrader
// this will need read and write buffer size
var upgrader = websocket.Upgrader{
	ReadBufferSize: 1024,
	WriteBufferSize: 1024,
	//we will need to check the origin of our connection

	CheckOrigin: func(r *http.Request) bool {return true},
}

//define a reader which will listen to the messages sent to the websocket endpoint
func reader(conn *websocket.Conn){
	for{
		//read in a message
		messageType,p,err := conn.ReadMessage()
		if err != nil{
			log.Println(err)
			return
		}
		//print out the message
		fmt.Println(string(p))

		//echo back the message to the endpoint
		if err := conn.WriteMessage(messageType,p);err != nil{
			log.Println(err)
			return
		}
	}
}

//define the websocket endpoint
func serveWs(w http.ResponseWriter,r *http.Request){
	fmt.Println(r.Host)

	//upgrade the connection to a websocket connection
	ws, err := upgrader.Upgrade(w,r,nil)
	if err != nil{
		log.Println(err)
	}

	//listen indefinitely to the messages coming to our web socket
	reader(ws)
}

func setUpRoutes(){
	http.HandleFunc("/",func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w,"simple server!")
	})

	//mapping our '/ws' endpoint to the serveWs function
	http.HandleFunc("/ws",serveWs)
}

func main(){
	setUpRoutes()
	http.ListenAndServe(":8080",nil)
}