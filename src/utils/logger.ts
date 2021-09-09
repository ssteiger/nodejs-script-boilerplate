const winston = require('winston')
const { createLogger, format, transports } = winston

const logger = winston.createLogger({
  //defaultMeta: {},
  transports: [
    // - Write all logs with level `error` and below to `error.log`
    // - Write all logs with level `info` and below to `combined.log`
    new transports.Console({
      format: format.combine(
        format.splat(),
        format.json(),
        format.colorize(),
        format.simple()
        //format.errors({ stack: true })
      )
    }),
    new transports.File({
      filename: 'logs/error.log',
      level: 'error',
      format: format.combine(format.timestamp())
    }),
    new winston.transports.File({
      filename: 'logs/combined.log',
      format: format.combine(format.timestamp())
    })
  ]
})

export default logger
