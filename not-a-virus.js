const notifier = require('node-notifier')
const path = require('path')

const config = require('./config')
const complements = require('./complements')

const sendComplement = () => {
    let comp = complements[Math.floor(Math.random() * complements.length)]
    notifier.notify(
        {
          title: 'Its Complement Time!',
          message: comp,
          icon: path.join(__dirname, 'kirb.png'),
          sound: false,
          wait: false
        },
        function (err, response) {
          if(err) {
              throw err
          }
        }
    );
}

const main = async () => {
    while (true) {
        let wait = Math.random() * ((config.upperBound * 60000) - (config.lowerBound * 60000)) + (config.lowerBound * 60000)
        console.log(`waiting ${wait} miliseconds`)
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve()
            }, wait)
        })
        sendComplement()
    }
}

main()