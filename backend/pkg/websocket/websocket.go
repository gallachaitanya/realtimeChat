package websocket

import (
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

func Upgrade(w http.ResponseWriter, r *http.Request) (*websocket.Conn, error) {
    conn, err := upgrader.Upgrade(w, r, nil)
    if err != nil {
        log.Println(err)
        return nil, err
    }
    return conn, nil
}

// //define a reader which will listen to the messages sent to the websocket endpoint
// func Reader(conn *websocket.Conn){
// 	for{
// 		//read in a message
// 		messageType,p,err := conn.ReadMessage()
// 		if err != nil{
// 			log.Println(err)
// 			return
// 		}
// 		//print out the message
// 		fmt.Println(string(p))

// 		//echo back the message to the endpoint
// 		if err := conn.WriteMessage(messageType,p);err != nil{
// 			log.Println(err)
// 			return
// 		}
// 	}
// }

// func Writer(conn *websocket.Conn) {
//     for {
//         fmt.Println("Sending")
//         messageType, r, err := conn.NextReader()
//         if err != nil {
//             fmt.Println(err)
//             return
//         }
//         w, err := conn.NextWriter(messageType)
//         if err != nil {
//             fmt.Println(err)
//             return
//         }
//         if _, err := io.Copy(w, r); err != nil {
//             fmt.Println(err)
//             return
//         }
//         if err := w.Close(); err != nil {
//             fmt.Println(err)
//             return
//         }
//     }
// }