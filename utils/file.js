const fs = require('fs');
const filePath = './database.json';

async function readData() {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        return JSON.parse(data);
    }catch (error) {
        console.error("Error reading file:", error);
    }
}
    async function writeData(data) {
        try {
            await fs.writeFile(filePath,JSON.stringify(data, null, 2));
        } catch (error) {
            console.error("Error writing file:", error);
        }
    }

module.exports = {
    readData,
    writeData
}