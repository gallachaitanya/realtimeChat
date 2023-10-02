var socket = new WebSocket("ws://localhost:8080/ws");

let connect = () =>{
    console.log("Attempting to connect....");

    socket.onopen = () =>{
        console.log("Succesfully connected");
    }

    socket.onmessage = (msg) => {
        console.log(msg);
    }

    socket.onclose = (e) => {
        console.log("Socket closed connection: ",e);
    }

    socket.onerror = (err) => {
        console.log("Socket error: ", err);
    }
}

let sendMsg = (msg) => {
    console.log("sending Msg: ",msg);
    socket.send(msg);
}

export {connect, sendMsg};