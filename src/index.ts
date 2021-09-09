import { logger } from './utils'
import { script01 } from './scripts'

async function main() {
  await script01()
}

// start nodejs
main().catch(err => {
  logger.error(err.stack)
  process.exit(1)
})
