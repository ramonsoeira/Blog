const { user: UserModel } = require("../models");

module.exports = {
    create: async(username, age) => {
        try {
            if (!username) {
                let error = new Error("Username not passed");
                error.status = 401;
                throw error;
            }

            if (!age) {
                let error = new Error("Age not passed");
                error.status = 401;
                throw error;
            }

            const userCreated = await UserModel.create({ username, age });

            return userCreated;
        } catch (error) {
            throw error;
        }
    },
};