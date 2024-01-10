const code = require("../services/code.service");

class CodeController {
    static addCode = async (req, res, next) => {
        try {
            const data = await code.add(res);
        } catch (err) {
            console.log(err);
            res.status(400).json({
                message: err.message,
            });
        }
    };
    static findCode = async (req, res, next) => {
        try {
            const data = await code.find(req.body, res);
            res.status(200).json({
                status: data.status,
                message: data.message,
                data: data.data,
            });
        } catch (err) {
            res.status(400).json({
                message: err.message,
            });
        }
    };
}

module.exports = CodeController;
