const { io } = require('socket.io-client');


class App {
    constructor() {
        this.url = 'https://api.bitails.io/global';
    }
    connect() {
        this.socket = io(this.url, { transports: ['websocket'] })
        this.socket.on("connect", ()=> {
            console.log("connected", this.socket.id);
        })

        this.socket.on("close", (msg)=> {
            console.log("err", msg);
        })

        this.socket.on("disconnect", (_)=> {
            console.log("dis-connected");
        })

        //connect method
        this.socket.connect()
    }

    listen(){
        this.socket.emit('add-addresses', [
            "1MTk7HAwbE68E5Dh9nkFTgLBpicqn2zTVJ",
            "16SfYhZRq7q5Bsie28eSWXn1WuLa34qyMQ",
            "1E5Hanxxf6e4iwTzEHPXQYVDWM5hYDPNMw",
            "1JfbmwjGzAzmZQhKUm462SncxNsxLt18wi",
            "1EEe12qjV5Uvd2Pc1Taww6kZYjZn5NTeyc",
            "1Ee5pL41zw62iQt6db7Znph6WLBQuabNgE",
            "1Adfn5fQP4AZUjUih6ub4EHnFB7ZmCMr65",
            "1HLgDyprHiT5JrUKQRJGEK6j6dWmhFoUAR",
            "1MTLDrzDjmnsrMEuwtY9XcpoqxfZQxMfcu",
            "1KvAqjg56wQCR7F49w1xsbFS4C7jDTihHu",
            "1KGKhAKHu4NpRy2yod6M8TR33HuU3sqgxt",
            "1CZRgtb2G7ykqyfBqFXf9AutRaWKY2fN4x",
            "1CMoQzdvUtxTKs4cJjYFBBT1kZgFbUu8Ph",
            "1BY4Wm41uUq7h8ip2yyTvSV3ubJtQ3ENLe",
            "15n6ZiTcFw6oeW1mhBJvDFkkPVmzLEZWcq",
            "1NXexivrMTw8v4B1pvWryYxsfB7qFWugdC",
            "17xb1yvezS8aRRnWFZGHvUHfpMJhrGepUj",
            "16WtZZosb96EjZ5JGdzDghduYZR5yv7hgu",
            "1J1ve88B2aDep3VAaFob6eZaQk2G8xuhGN",
            "1PqUH3114NUwjGYAYCLCTwupGkf8AbxRza"
          ])

          this.socket.on('message', (msg) => {
            console.log("my Info", msg);
          })
    }
    start() {
        this.connect()
        this.listen()
    }
}

const app = new App();
app.start()
