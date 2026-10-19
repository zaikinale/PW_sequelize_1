
const sequalize = require('./database')

async function testConnection() {
    try {
        await sequalize.authenticate();
        console.log('Соединение установлено успешно!')
    } catch (err) {
        console.log('Не удалось сделать соединенение:', err)
    }
}

testConnection()