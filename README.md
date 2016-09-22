# dragdrop

开门见山，先说需求：

打造全自动化拖拽页面控件，解除前端属性多而重复的代码编写烦恼。

tips：目前先完成输入各个控件，包括：input text输入，文本label，input提交，input文件上传。

input text 解决输入电话号码、姓名、密码等等；（比如 <input type="text">

文本label 解决input标签前面的提示信息; (比如 密码：<input type="password">

其实有上面两个就能解决大部分form表单的问题，但是对上面两个有要求，input标签必须可以有这些属性：required有/无、width、height、padding、border、font;  
文本label要求这些属性：font、for-id

