const logger = {
  info: (text) => {
    console.log(`[INFO]: ${text}`);
  },
  warn: (text) => {
    console.warn(`[WARNING]: ${text}`);
  },
};

module.exports = logger;
