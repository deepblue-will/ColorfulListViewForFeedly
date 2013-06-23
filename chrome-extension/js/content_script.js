var base_style = "div[colored='source_title']{ background-color: hsl(color_code, 50%, 70%)}"
var base_hover_style = "div[colored='source_title']:hover { background-color: hsl(color_code, 50%, 75%)}"

var applied_color_attr = []

$(function() {
	setInterval(function() {
		setColorAttr();
	}, 500);
});
/** Feedにカラーを適用 */
function setColorAttr() {
	var feeds = $(".u0Entry:not([colored])")
	if (feeds.text()) {
		feeds.each(function() {
			var source_title = $(this).find(".sourceTitle a").text();
			if (source_title) {
				$(this).attr("colored", source_title)
				if ($.inArray(source_title, applied_color_attr) == -1) {
					applied_color_attr.push(source_title)
					insertStyle(source_title)
				}
			}
		});
	}
};

/** スタイルシートを挿入 */
function insertStyle(source_title) {
	var css = document.styleSheets.item(0);
	var index = css.cssRules.length;

	var color_code = Math.floor(Math.random() * 360) + 1
	var style = base_style.replace(/source_title/g, source_title).replace(/color_code/g, color_code)
	var hover_style = base_hover_style.replace(/source_title/g, source_title).replace(/color_code/g, color_code)

	css.insertRule(style, index);
	css.insertRule(hover_style, index + 1);
}
