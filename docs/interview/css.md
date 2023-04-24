## BFC（块级格式化上下文）
Block Formatting Context 简称 BFC\
触发条件：\
1. 根元素\
2. 浮动元素\
3. 绝对定位元素\
4. display 为 inline-block, table-cell, table-caption, flex, inline-flex\
5. overflow 不为 visible\
解决问题：\
1. 清除浮动\
2. 阻止元素被浮动元素覆盖\
3. 阻止两个相邻的块级元素的 margin 重叠\