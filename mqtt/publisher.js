const mqtt = require('mqtt')
// const client  = mqtt.connect('mqtt://test.mosquitto.org')
const client  = mqtt.connect('mqtt://127.0.0.1:1602')

client.on('connect',  () => {
  client.subscribe('presence')
  client.publish('presence', 'Hello mqtt')
})

client.on('message',  (topic, message) => {
  // message is Buffer
  console.log(message.toString())
  client.end()
})
