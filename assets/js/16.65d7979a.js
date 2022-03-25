(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{555:function(t,a,s){"use strict";s.r(a);var n=s(66),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"searchinlist"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#searchinlist"}},[t._v("#")]),t._v(" SearchInList")]),t._v(" "),s("p",[t._v("列表数据检索组件")]),t._v(" "),s("h2",{attrs:{id:"快速上手"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快速上手"}},[t._v("#")]),t._v(" 快速上手")]),t._v(" "),s("h3",{attrs:{id:"基本功能介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本功能介绍"}},[t._v("#")]),t._v(" 基本功能介绍")]),t._v(" "),s("ul",[s("li",[t._v("打开文件导入")]),t._v(" "),s("li",[t._v("从剪切板导入")]),t._v(" "),s("li",[t._v("自动识别文件编码（uft-8、gbk）")]),t._v(" "),s("li",[t._v("自动识别文件分隔符（空格、逗号、Tab、|...可扩展delimitersToGuess）")]),t._v(" "),s("li",[t._v("自动识别表头(根据关键字识别，可扩展colNamesToGuess)")]),t._v(" "),s("li",[t._v("生成检索条件(返回WhereParam)")]),t._v(" "),s("li",[t._v("异常处理：异常信息会抛出，然后交由应用层处理。\n应用层应该具备处理全局异常的功能。")])]),t._v(" "),s("h3",{attrs:{id:"创建组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建组件"}},[t._v("#")]),t._v(" 创建组件")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("SearchInList")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("tableName")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("TP_CARD_VIEW"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("SearchInList")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("ul",[s("li",[s("p",[t._v("参数：")]),t._v(" "),s("ul",[s("li",[t._v("{String} tableName")])])]),t._v(" "),s("li",[s("p",[t._v("说明：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("  组件初始化，根据参数生成【对应库中的列】。\n")])])])])]),t._v(" "),s("h3",{attrs:{id:"demo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#demo"}},[t._v("#")]),t._v(" Demo")]),t._v(" "),s("SearchInListDemo"),t._v(" "),s("h2",{attrs:{id:"异常处理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#异常处理"}},[t._v("#")]),t._v(" 异常处理")]),t._v(" "),s("p",[t._v("考虑到不同项目弹窗提示存在差异，组件中的异常、错误会通过 throw 抛出，需要调用者进行捕获，根据自己的业务进行处理。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//统一异常处理")]),t._v("\nVue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("errorHandler")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vm")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("warn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'VUE 抛出全局异常'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),s("h3",{attrs:{id:"getwhereparam"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getwhereparam"}},[t._v("#")]),t._v(" getWhereParam")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("参数：无")])]),t._v(" "),s("li",[s("p",[t._v("说明：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("获取检索条件。将用户选中数据转换为检索条件，返回。\n")])])])]),t._v(" "),s("li",[s("p",[t._v("示例：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("[{colName: 'PERSON_NUM', dataType: 0, values:[\"R123\"]]\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"依赖说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#依赖说明"}},[t._v("#")]),t._v(" 依赖说明")]),t._v(" "),s("ul",[s("li",[t._v("表格展示 luckysheet")]),t._v(" "),s("li",[t._v("界面表单渲染 Vue+ElementUI")]),t._v(" "),s("li",[t._v("Excel解析 LuckyExcel")]),t._v(" "),s("li",[t._v("CSV解析 Papa")])])],1)}),[],!1,null,null,null);a.default=e.exports}}]);