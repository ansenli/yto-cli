#!/usr/bin/env node --harmony 

'use strict' 
// 定义脚手架存放在
process.env.NODE_PATH = __dirname + '/../node_modules/' 

// 
const program = require('commander') 
const chalk = require('chalk') 
// 定义当前版本 
program.version(require('../package').version ) 

// 提示框标注开发新型
const log =console.log;

log(chalk`{green.bold 
  *******************************
  *                             *          
  * YTO_国内速递产品部_前端团队 *
  * 问题反馈:{underline ansenli@yto.net.cn} *
  *                             *
  *******************************}`)
log();
// 定义使用方法 

program.usage('<command>')
program 
  .command(chalk.green('init')) 
  .description('初始化创建一个新项目') 
  .alias('i') 
  .action(() => { 
    require('../command/init')() 
  }) 

program 
  .command('list') 
  .description('展示项目列表') 
  .alias('l') 
  .action(() => { 
      require('../command/list')() 
  }) 
 
program 
  .command('delete') 
  .description('删除一个项目') 
  .alias('d') 
  .action(() => { 
      require('../command/delete')() 
  }) 
program 
  .command('add') 
  .description('添加一个新项目') 
  .alias('a') 
  .action(() => { 
    require('../command/add')() 
  }) 
   
// 最后别忘了处理参数和提供帮助信息：
program.parse(process.argv) 
 
if(!program.args.length){ 
  program.help() 
}