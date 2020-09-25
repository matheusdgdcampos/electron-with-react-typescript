const fs = require('fs')
const path = require('path')

// This script is used to copy the files from electron-main.js
// and electron-wait-react.js to the build folder so
// automatic, but not only that, besides copying
// the file is rewritten all the code in electron-main.js
// but replacing the path from which the HTML is generated
// React, all automatically.
// ATTENTION: This script must be executed before creating the software installation package.
const electronMainFile = path.resolve(__dirname, '..', 'electron-main.js')
const electronWaitReactFile = path.resolve(__dirname, '..', 'electron-wait-react.js')

const destinyElectronMain = path.resolve(__dirname, '..', '..', 'build', 'src', 'electron-main.js')
const destinyElectronWaitReact = path.resolve(__dirname, '..', '..', 'build', 'src', 'electron-wait-react.js')

fs.mkdir(path.resolve(__dirname, '..', '..', 'build', 'src'),
  (error, directory) => {
    if (error) {
      console.log(error)
    }

    return directory
  })

fs.copyFileSync(electronMainFile, destinyElectronMain)
fs.copyFileSync(electronWaitReactFile, destinyElectronWaitReact)

const fileRead = fs.readFileSync(destinyElectronMain, {
  encoding: 'utf-8'
})
const fileReplaced = fileRead.replace("'..', 'build', 'index.html'", "'..', 'index.html'")

fs.writeFileSync(destinyElectronMain, fileReplaced, {
  encoding: 'utf-8'
})