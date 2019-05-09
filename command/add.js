'use strict' 
const co = require('co') 
const prompt = require('co-prompt') 
const config = require('../templates') 
const chalk = require('chalk') 
const fs = require('fs') 
 
module.exports = () => { 
 co(function *() { 
 
   // 分步接收用户输入的参数 
   let tplName = yield prompt('请输入项目名称 : ') 
   let gitUrl = yield prompt('请输入git地址: ') 
   let branch = yield prompt('请输入 Git Branch: ') 
     
   // 避免重复添加 
   if (!config.tpl[tplName]) { 
      config.tpl[tplName] = {} 
      config.tpl[tplName]['url'] = gitUrl.replace(/[\u0000-\u0019]/g, '') // 过滤unicode字符 
      config.tpl[tplName]['branch'] = branch 
   } else { 
      
      console.log(chalk.red('^_^ 此项目已存在不能重复添加...')) 
      process.exit() 
   } 
    
   // 把模板信息写入templates.json 
   fs.writeFile(__dirname + '/../templates.json', JSON.stringify(config), 'utf-8', (err) => { 
     if (err) console.log(err) 
     console.log(chalk.green('New template added!\n')) 
     console.log(chalk.grey('The last template list is: \n')) 
     console.log(config) 
     console.log('\n') 
     process.exit() 
    }) 
 }) 
} 