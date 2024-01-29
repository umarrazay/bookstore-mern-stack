require('dotenv').config();

module.exports = {
    PRESET: process.env.PRESET_KEY,
    CLOUD: process.env.CLOUD_NAME
};