const { create } = require("../../services/user");

module.exports = {
    create: async(req, res) => {
        const { username, age } = req.body;

        try {
            const userCreated = await create(username, age);

            res.status(200).send({ user: userCreated });
        } catch (error) {
            res.status(error.status || 500).send({ error });
        }
    },
};