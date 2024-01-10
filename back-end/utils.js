function generateCode() {
    const characters =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const codeLength = Math.floor(Math.random() * 2) + 5; // Random length between 5 and 6
    let code = "";
    for (let i = 0; i < codeLength; i++) {
        code += characters.charAt(
            Math.floor(Math.random() * characters.length)
        );
    }
    return code;
}

function isCodeExpired(createdAt) {
    const expirationTime = 60 * 1000; // 60 seconds in milliseconds
    return Date.now() - createdAt > expirationTime;
}

module.exports = {
    generateCode,
    isCodeExpired,
};
