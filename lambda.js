const awsServerlessExpress = require('aws-serverless-express')
const express = require('express')
const serveStatic = require('serve-static')
const app = express()
const server = awsServerlessExpress.createServer(app)

app.use(serveStatic('./src'))

exports.handler = (event, context) => awsServerlessExpress.proxy(server, event, context)
