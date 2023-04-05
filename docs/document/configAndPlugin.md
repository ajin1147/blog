## 配置
### git
#### git提交区分文件名大小写
```bash
git config core.ignorecase false
```


## 插件
### 包管理相关
#### nrm
快速切换npm源
```bash
# npm i nrm -g（备用，这种方式看不到选择的星号）
npm install @adams549659584/nrm -g
# 查看所有源
nrm ls
# 切换源
nrm use taobao
```
#### npkill
快速删除node_modules
```bash
npm install npkill -g
# 或
npx npkill
# 会遍历当前文件夹及其子文件夹的node_modules文件夹供选择删除
# 请在cmd 或 powershell 中使用
npkill
```
#### patch-package
修改node_modules中的包，然后打补丁
```bash
npm install patch-package
# 修改node_modules中的包以后，执行
npx patch-package 包名
# 会在项目根目录生成patches文件夹，里面有一个补丁文件
# 之后在package.json中script添加命令 "postinstall": "patch-package"
# 之后执行npm install，会自动打补丁
```
#### depcheck
检查项目中缺少的依赖包以及没有使用到的依赖包
```bash
npm install depcheck -g
# 根目录执行
depcheck
```
#### ni
自动检测包管理工具
```bash
npm install ni -g
# 会自动检测当前文件夹是否有yarn.lock或package-lock.json文件，有则使用对应的包管理工具
# 相当于npm install || yarn install || pnpm install
ni
```
### Node相关
#### nvm
node版本管理\
\
win：
* 下载地址：https://github.com/coreybutler/nvm-windows/releases
* 下载nvm-setup.zip，解压后运行nvm-setup.exe
* 直接安装在系统盘不用配置环境变量
* 安装后打开nvm文件夹，打开settings.txt文件，写入node_mirror: https://registry.npmmirror.com/ 以及 npm_mirror: https://registry.npmmirror.com/ 配置镜像源

mac：\
如果安装nvm之前已经安装了node，则先进行以下步骤，否则跳过：
```bash
# 删除全局 node_modules 目录
sudo rm -rf /usr/local/lib/node_modules
# 删除 node
sudo rm -rf /usr/local/bin/node
# 删除全局 node 模块注册的软链
cd /usr/local/bin && ls -l | grep "../lib/node_modules/" | awk '{print $9}'| xargs rm
```
安装：
```bash
# 安装nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash
# 或
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash
# 安装成功后输入 nvm 会看到很多提示信息，否则说明安装失败
# 安装完成后，需要重启终端，或者执行以下命令
source ~/.bash_profile
# 如果是zsh，则进入 .zshrc 中添加如下内容 source ~/.zshrc
```
使用：
```bash
# 查看所有安装的版本
nvm ls
# 安装最新版本
nvm install node
# 安装最新稳定版本
nvm install --lts
# 查看所有可安装的版本
nvm list available
# 安装指定版本
nvm install v14.17.6
# 切换版本
nvm use v14.17.6
# 卸载指定版本
nvm uninstall v14.17.6
```
#### nodemon
监听文件变化，自动重启node服务
```bash
npm install nodemon -g
# 使用
nodemon xxx.js
```
::: tip
如果出现无权限。用管理员身份打开powerShell，输入set-ExecutionPolicy RemoteSigned，选A或者Y
:::

## chat-gpt常用指令模式
### 4A
Actor角色 - Aim目标 - Ask提要求 - Addition补充
### 4W
What我的情况是 - Will我想要 - Who你是谁 - Want我要你



