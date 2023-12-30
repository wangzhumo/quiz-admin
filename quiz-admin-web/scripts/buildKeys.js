import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filenameNew = fileURLToPath(import.meta.url)
const __dirnameNew = path.dirname(__filenameNew)

const loadJSON = path =>
  JSON.parse(fs.readFileSync(new URL(path, import.meta.url)))
const getEN = loadJSON('../src/locales/en.json')

const keys = Object.keys(getEN)
const result = {}

keys.forEach(key => {
  const keyStr = String(key)
  const keySplit = keyStr.split('.')
  if (keySplit.length === 1) {
    result[keySplit[0]] = String(key)
  } else {
    let temp = String(key)
    let temp1 = result
    for (let i = 0; i < keySplit.length; i++) {
      if (temp1[keySplit[i]] == null) {
        for (let j = keySplit.length - 1; j > i; j--) {
          const newTemp = {}
          newTemp[keySplit[j]] = temp
          temp = newTemp
        }
        temp1[keySplit[i]] = temp
        break
      } else {
        temp1 = temp1[keySplit[i]]
      }
    }
  }
})

const outputFile = path.join(
  path.dirname(__dirnameNew),
  'src/locales/keys.json'
)
fs.writeFile(outputFile, JSON.stringify(result, null, 2), err => {
  if (err) {
    console.error(err)
  } else {
    console.log('-----------------------------------------------------')
    console.log(`生成成功: ${outputFile}`)
    console.log('-----------------------------------------------------')
  }
})
