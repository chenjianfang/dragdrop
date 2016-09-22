export default{
	init(){
		$(".right-box").on("click",".item-child-input",function(){ //点击输入框
			let _this = $(this);
			var left = _this.css("left");
			var top = _this.css("top");
			var width = _this.css("width");
			var height = _this.css("height");
			$(".creatInput").remove();
			_this.after(`
				<div class="creatInput" style="left:${left};top:${top};width:${width};height:${height}"></div>
			`);
			$(".creatInput").draggable({
				helper:"original",
				containment:".right-box",
				drag:function(event,ui){ //拖动跟随
					let left = ui.offset.left;
					let top = ui.offset.top;
					$(this).prev().css({
						left:left,
						top:top
					});
				}
			}).resizable({
				resize:function(event,ui){
					console.log(ui);
					$(this).prev().css({
						width:ui.size.width+"px",
						height:ui.size.height+"px"
					});
				}
			}).dblclick(function(){
				$(this).prev().focus();
				$(this).remove();
			});
		});
	}
}
