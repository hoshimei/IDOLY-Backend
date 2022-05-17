import { readFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import yaml from 'js-yaml'
import { compile } from 'json-schema-to-typescript'

// This script does not need arguments.
// node ./skillSchemaToTSTypes.js > ../../types/Skillx.d.ts

const require = createRequire(import.meta.url)

const SCHEMA_FILE_NAME = 'Skillx.schema.yml'
const Here = dirname(fileURLToPath(import.meta.url))
const SchemaFilePath = join(Here, SCHEMA_FILE_NAME)

async function main() {
  const schemaText = readFileSync(SchemaFilePath, 'utf-8')
  const result = await compile(yaml.load(schemaText), 'Skillx')
  console.log('// Generated by skillSchemaToTSTypes.js\n' + result)
}

main()
