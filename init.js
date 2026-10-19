// init.js
const sequelize = require('./database');
const News = require('./models/News');

async function init() {
    try {
        await sequelize.sync({ force: true });
        console.log('Таблицы синхронизированы.');

        const newsFirst = await News.create({
            title: 'New in news!',
            content: 'Первая запись!',
            author: 'A&S',
            publishedAt: new Date('2026-10-19')
        });
        console.log('Создана новость:', newsFirst.toJSON());

        const news = await News.findAll();
        console.log('Все новости:', news.map(n => n.toJSON()));

    } catch (error) {
        console.error('Ошибка:', error);
    } finally {
        await sequelize.close();
    }
}

init();