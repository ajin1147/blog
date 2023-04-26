## 多个commit合并为1个
```bash
# 查看历史记录
git log
# 合并多个commit
git rebase -i commit_id
# 上面执行之后，会进入当前分支的vim编辑器，然后将要是用的commit前面添加pick，其他的commit前面添加squash表示合并到前一个commit中，然后:wq保存退出
# 如果有冲突，解决冲突后，执行git rebase --continue
# 如果想要放弃合并，执行git rebase --abort
# 上面保存之后，会进入另一个vim编辑器，这个编辑器是用来编辑合并后的commit信息的，可以将之前的commit备注信息全部注释，然后添加新的，然后:wq保存退出，成功会有一个成功提示
# 不能正常推送到远端的话可以-f强制推送
git push -f
# 此外，去掉变基
git rebase --abort
```