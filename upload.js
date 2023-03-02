/*
 * @Description:
 * @Author: xu tao
 * @Date: 2022-08-09 14:38:30
 * @LastEditors: xu tao
 * @LastEditTime: 2022-08-09 14:43:27
 */
let client = require("scp2");
const ora = require("ora");
const chalk = require("chalk");
const spinner = ora(
  chalk.green(
    "正在发布到服务器..."
  )
);
spinner.start();

client.scp(
  "./dist/",
  {
    // 本地打包后，项目包的相对路径，默认为./dist
    host: "43.132.168.133", // 云服务器的IP地址
    port: "22", // 云服务器端口， 一般为22
    username: "root", // 云服务器用户名，linux系统一般为root
    password: "As19930506", // 云服务器密码，若忘记了，可以去云服务器主页重置密码
    path: "/opt/app/ui/dist", // 项目包上传到云服务器的目标位置，根据nginx配置决定
  },
  (err) => {
    spinner.stop();
    if (!err) {
      console.log(
        "项目发布完毕!"
      );
    } else {
      console.log("err", err);
    }
  }
);
