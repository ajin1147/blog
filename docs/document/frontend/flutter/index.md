## 常用指令
vscode中随意在项目下dart文件中F5即可以debug模式启动项目，但是如果想要在命令行中启动项目，可以使用下面的指令：
### flutter 相关
```bash
# 查看flutter版本
flutter --version
# 查看flutter doctor
flutter doctor
# 升级flutter到指定版本
flutter upgrade 1.22.6
# 升级flutter到最新稳定版
flutter upgrade
```
### flutter 项目相关
```bash
# 启动项目，指定设备，指定模式，指定端口
flutter run -d chrome --profile --web-port=8080
# 清除缓存
flutter clean
# 下载依赖
flutter pub get
# 添加依赖
flutter pub add package_name
# 升级所有依赖，稳定版本
flutter pub upgrade --major-versions
# 升级指定依赖，稳定版本
flutter pub upgrade --major-versions package_name
# 升级到指定版本
flutter pub upgrade package_name@version
# 降低版本
flutter pub downgrade package_name@version
# 打安卓包，默认是release包，如不配置签名秘钥，则会使用android包中的测试秘钥
flutter build apk
```
### 其他
```bash
# 执行命令遇到提示（Waiting for another flutter command to release the startup lock.），
# 则执行下面的命令，即删除你安装的flutter文件夹中的lockfile文件
rm /applications/flutter/bin/cache/lockfile
```

## 常用插件
### getx
状态管理、路由管理、国际化
### shared_preferences
本地存储
### sqflite
数据库
### dio
网络请求
### flutter_screenutil
适配屏幕
### device_info_plus
获取设备信息
### connectivity_plus
获取网络状态
### cached_network_image
缓存网络图片
### flutter_webrtc
基于GoogleWebRTC的音视频通话
### image_picker
图片选择器
### file_picker
文件选择器
### path_provider
获取文件路径
### url_launcher
打开外部链接
### flutter_easyloading
加载状态
### bot_toast
toast
### qr_code_scanner
二维码扫描
### camera
相机
### shimmer
骨架屏
### flutter_slidable
滑动删除
### flutter_swipe_action_cell
滑动删除
### flutter_swiper
轮播图
### flutter_svg
svg图片
### flutter_svg_provider
svg图片
### flutter_easyrefresh
下拉刷新，上拉加载更多
### webview_flutter
webview
### decimal
处理精度问题
### badges
角标
### flutter_launcher_icons
修改app图标
### flutter_launcher_name
修改app名称
### flutter_native_splash
修改启动页
### scrollable_positioned_list
制作索引列表，类似于微信通讯录的索引列表
### auto_size_text
自动适配字体大小的文本域
### animate_do
动画
### just_audio
音频播放
### video_player
视频播放
### introduction_screen
介绍页
### showcaseview
操作步骤引导
