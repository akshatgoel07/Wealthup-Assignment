require("dotenv").config();
const { Code } = require("../models");
const { generateCode, isCodeExpired } = require("../utils");

class CodeService {
    static find = async (data, res) => {
        const { code: enteredCode } = data;

        const existingCode = await Code.findOne({ value: enteredCode });
        console.log(existingCode);

        if (!existingCode) {
            return {
                message: "Enter a valid code",
                status: false,
            };
        } else if (existingCode.used) {
            return {
                message: "This code has already been used",
                status: false,
            };
        } else if (isCodeExpired(existingCode.createdAt)) {
            return {
                message: "The code has expired",
                status: false,
            };
        } else {
            existingCode.used = true;
            await existingCode.save();
            // res.json({ message: "Code is correct", status: true });
            return { message: "Code is correct", status: true };
        }
    };

    static add = async (res) => {
        let newCode = {
            value: generateCode(),
        };
        await Code.create(newCode);
        res.json({ code: newCode.value, status: true });
    };
}

module.exports = CodeService;
