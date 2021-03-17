const { createLogger, transports, format, info } = require("winston");
// const winston = require("winston");

const logger = createLogger({
  transports: [
    new transports.File({
      filename: "src/utils/logs/info.log",
      level: "info",
      format: format.combine(format.timestamp(), format.json()),
      handleExceptions: true,
    }),
  ],
});

module.exports = logger;
