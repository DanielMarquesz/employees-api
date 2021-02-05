const { createLogger, transports, format, info } = require("winston");

const logger = createLogger({
  transports: [
    new transports.File({
      filename: "logs/info.log",
      level: "error",
      format: format.combine(format.timestamp(), format.json()),
    }),
  ],
});

module.exports = logger;
