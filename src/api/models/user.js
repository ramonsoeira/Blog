"use strict";
module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define(
        "user", {
            username: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false,
            },
            age: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
        }, {}
    );
    user.associate = function(models) {};
    return user;
};