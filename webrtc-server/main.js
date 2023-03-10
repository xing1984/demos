/**
 * Created by Capricorncd.
 * https://github.com/xing1984
 * https://github.com/capricorncd
 * Date: 2021-06-05 16:23:45
 */
const path = require('path')
const http = require('http')
const https = require('https')
const fs = require('fs')
const express = require('express')
const serveIndex = require('serve-index')
const { initSocketIO } = require('./socket.io')

const PORT_HTTP = 80
const PORT_HTTPS = 443
const IP = '0.0.0.0'

const staticDir = './static'

const app = express()
app.use(serveIndex(staticDir))
app.use(express.static(staticDir))

// http server
const httpServer = http.createServer(app)
// initSocketIO(httpServer)
httpServer.listen(PORT_HTTP, IP)

// https server
const options = {
  key: fs.readFileSync('./cert/it-factory.cn.key'),
  cert: fs.readFileSync('./cert/it-factory.cn.pem')
}
const httpsServer = https.createServer(options, app)
initSocketIO(httpsServer)
httpsServer.listen(PORT_HTTPS, IP)

app.get('/chat', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})
