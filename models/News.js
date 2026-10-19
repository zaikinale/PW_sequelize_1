
const { DataTypes } = require('sequelize')
const sequelize = require('../database')

const New = sequelize.define('New', {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.TEXT,
        },
        author: {
            type: DataTypes.STRING,
        },
        publishedAt: {
            type: DataTypes.DATE,
        }
    }, {
        tableName: 'news',
        timestamps: true,
    }
);

module.exports = New;