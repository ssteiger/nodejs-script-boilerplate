const path = require('path')
const fs = require('fs-extra')
const axios = require('axios')
import fetch from 'node-fetch'
import _ from 'underscore'
import cuid from 'cuid'
import { logger } from '../utils'

export default async function script01() {
  logger.info(`executing script01`)

  logger.info('fetching local json file')
  const file_content = await fs.readJson(path.resolve(__dirname, '../datasources/example_data.json'))
  logger.info('fetching local json file: OK')

  console.log({ file_content })
}
