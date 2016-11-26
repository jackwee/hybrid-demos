/*用于自动生成演示页面.*/
var Demo = {
	/**
	* 构造方法
	*
    * @param    moduleName      模块名称.
	* @param	targetElement	目标元素.demo界面将被添加为此元素的子节点.默认为body元素.
	*
	* @return	实例对象.
	*
	*/
	"createNew": function(moduelName, targetElement){
        var demo = {};

        /* 模块名必须传入. */
        if( ! moduelName){
            return;
        }

        /* 布局文件的路径. */
        var configPath = "widget://script/config/" + moduelName + ".json";

        /* 自定义函数的存放路径. */
        var diyPath = "widget://script/diy/" + moduelName + ".js"
		
		/* demo 模块添加到哪个元素下. */
		var targetElement = targetElement || document.getElementsByTagName('body')[0];
		
		// ------------------------------------------------
		
		/**
		* 生成包含代码块的行
		*
		* @code	string	要高亮显示的代码.
		*
		* @return element	代码块节点.
		*/
		function createCodeBlockRow(code){
			var code = code || '';
			var codeStr = "<div class='row'><div class='col-xs-12'><pre><code class='javascript'>" + code + "</code></pre></div></div>";
			return codeStr;
		};
		
		// -----------------------------------------------
		
		/**
		* 生成包含按钮组的行
		* 
		* 可选的按钮类型: default(默认), primary, success, info, warning, danger, link.
		*
		* @buttonGroupInfo	array	包含按钮组各个按钮的配置信息:如按钮类型, 事件响应函数等.事件响应函数仅需提供函数名.按钮组信息结构类似于:
		[{"text": "按钮1", "type": "success","click" : "函数名1"}, 
		  {"text": "按钮2", "type": "info","click" : "函数名2"}, 
		  {"text": "按钮3", "type": "warning","click" : "函数名3"}]
		
		* @return	element	按钮组节点.
		*/
		function createButtonGroupRow(buttonGroupInfo){
			var buttonGroupInfo = buttonGroupInfo || [];
			var buttonGroupStr = "<div class='row'><div class='col-xs-12 btn-group btn-group-justified diy-btn-group-test'>";
			each(buttonGroupInfo, function(index, buttonInfo){
				var text = buttonInfo.text || "按钮" + index;
				var type = buttonInfo.type || "default";
				var click = buttonInfo.click || ""; 
				var btnId = buttonInfo.id || "";

                var callbackStr = "demo.diyMethod(\"" + click + "\")";
				
				var buttonStr = "<div class='btn-group'><button  id='" + btnId + "' tapmode='' type='button' onclick='" + callbackStr + "' class='btn btn-" + type + "'>" + text + "</button></div>";
				
				buttonGroupStr += buttonStr;
			});
			buttonGroupStr += "</div></div>";
			
			return buttonGroupStr;
		};
		
		// ------------------------------------------------------
		
		/**
		* 生成包含输入框组的行.
		*
		* 可选的输入框类型: text(默认), nunber.
		*
		* @inputGroupInfo	array	包含各个输入框组的信息.按钮组信息的结构类似于:
			[{"label":"标签1",
			  "type": "text",
			  "id" : "id1",
			  "placeholder": "占位符1",
			  "disabled": "disabled",
			  "value": "值1"},
			{"label":"标签2",
			  "type": "number",
			  "id" : "id2",
			  "placeholder": "占位符2",
			  "value": "2"}
			] 
		* @return element	输入框组节点.
		*
		*/
		function createInputGroupRow(inputGroupInfo){
			var inputGroupInfo = inputGroupInfo || [];
			var inputGroupCount = inputGroupInfo.length || 1;
			var inputGroupWidth = 12 / inputGroupCount;
			
			var inputGroupStr = "<div class='row'>";
			
			each(inputGroupInfo, function(index, inputInfo){
				var label = inputInfo.label || "标签" + index;
				var type = inputInfo.type || "text";
				var id = inputInfo.id || "";
				var placeholder = inputInfo.placeholder || "";
				var disabled = (inputInfo.disabled) ? "disabled" : "";
				var value = inputInfo.value || "";
				
				var inputStr = "<div class='col-xs-" + inputGroupWidth + "'><div class='input-group'><span class='input-group-addon'>" + label + "</span><input type='" + type + "' class='form-control' placeholder='" + placeholder + "' id='" + id + "' " + disabled + " value='" +value+ "' /></div></div>";
				inputGroupStr += inputStr;
			});
			
			inputGroupStr += '</div>';
			
			return inputGroupStr;
		};
		
		// ---------------------------------------------------------
		
		/**
		* 生成一个内容块.
		*
		* @blockInfo    object	存储标题和内容块内各个行的数据.目前支持的行类型包括:codeBlock,buttonGroup,inputGroup.一个blocKInfo结构类似于:
			{
			"title": "内容",
			"data":[{"type": "codeBlock",
					"data": "int a = 42; // 代码如诗"},
					{"type": "buttonGroup",
			 		"data": [{"text": "按钮1", "type": "success","click" : "函数名1"}, 
		  					{"text": "按钮2", "type": "info","click" : "函数名2"}, 
		  					{"text": "按钮3", "type": "warning","click" : "函数名3"}]},
					{"type": "inputGroup",
			 		"data": [{"label":"标签1",
			 	 			"type": "text",
			  				"id" : "id1",
			  				"placeholder": "占位符1",
			  				"disabled": "disabled",
			 	 			"value": "值1"},
							{"label":"标签2",
			  				"type": "number",
			  				"id" : "id2",
			  				"placeholder": "占位符2",
			  				"value": "2"}
			] }]}
		*
		* @return	string	包含内容块的html字符串.
		*/
		function createContentBlock(blockInfo){
			var title = blockInfo.title || "内容块";

            if("示例代码" === title){ /* 暂时不需要显示代码. */
                return "<br />";
            }

			var blockData = blockInfo.data || [];
			
		    var contentBlockStr = "<div class='row'><div class='col-xs-12'><h3>" + title + "</h3>";
			
			each(blockData, function(index, rowInfo){
				var rowType = rowInfo.type || "";
				var rowData = rowInfo.data || false; 
				
				var rowStr = "";
				
				if("codeBlock" === rowType)
				{	
					rowStr = createCodeBlockRow(rowData);
				}	
				
				if("buttonGroup" === rowType)
				{
					rowStr = createButtonGroupRow(rowData);
				}
				
				if("inputGroup" === rowType)
				{
					rowStr = createInputGroupRow(rowData);
				}
				
				contentBlockStr += rowStr;
			});
			
			contentBlockStr += "</div></div>";
			
			return contentBlockStr;
		};
		
		// ----------------------------------------------------------
		
		/**
		* 生成一个完整的demo模块.
		*  
		* @demoData	object	demo模块的数据,包含标题和各内容模块的数据.示例如下:
		{"title":"日历演示",
		"data": [{
			"title": "内容",
			"subTitle": "子标题",
			"data":[{"type": "codeBlock",
					"data": "int a = 42; // 代码如诗"},
					{"type": "buttonGroup",
			 		"data": [{"text": "按钮1", "type": "success","click" : "函数名1"}, 
		  					{"text": "按钮2", "type": "info","click" : "函数名2"}, 
		  					{"text": "按钮3", "type": "warning","click" : "函数名3"}]},
					{"type": "inputGroup",
			 		"data": [{"label":"标签1",
			 	 			"type": "text",
			  				"id" : "id1",
			  				"placeholder": "占位符1",
			  				"disabled": "disabled",
			 	 			"value": "值1"},
							{"label":"标签2",
			  				"type": "number",
			  				"id" : "id2",
			  				"placeholder": "占位符2",
			  				"value": "2"}
			] }]}]}
		* 
		* @return	string	包含完整demo内容的字符串.
		*/
		function createDemoBlock(demoData){
			var title = demoData.title || "演示";
			var subTitle = demoData.subTitle || "";
			var contentBlockData = demoData.data || [];
			
			if("" !== subTitle){
				subTitle = "<small>" + subTitle + "</small>";
			}
			
			var demoBlockStr = "<div class='container-fluid'><div class='page-header'><h2>" + title + subTitle + "</h2></div>";
			
			each(contentBlockData, function(index, contentBlockInfo){
				var contentBlockStr = createContentBlock(contentBlockInfo);
				
				demoBlockStr += contentBlockStr;
			});
			
			demoBlockStr += "</div>";
			
			return demoBlockStr;
		}
		
		// ---------------------------------------------------------
		
		/**
		* 生成一个完整的demo模块.
		*  
		* @mutibleDemoData	array	包含多个demo模块的数据.
		* 
		* @return	string	包含完整多个demo内容的字符串.
		*/
		function createMutipleDemoBlock(mutipleDemoData){
			if(false === (mutipleDemoData instanceof Array)){
				mutipleDemoData = [mutipleDemoData];
			}
			
			var mutipleDemoStr = "";
			
			each(mutipleDemoData, function(index, demoData){
				mutipleDemoStr += createDemoBlock(demoData);
			});
			return mutipleDemoStr;
		}
		
		// ----------------------------------------------------------
		
		/**
		* 显示完整示例模块.
		*
		* @callback	function	显示示例模块之后执行的回调方法.
		*						两个参数:ret,{"json": "json数据", "status": "success或fault"};
		*						err,{"message": "错误信息"}.
		*
		*/
		function show(callback){
			var ret = {"json": {}, "status": "success"};
			var err = {"message": "没有错误"};

			getJSON(configPath, function(data){
				ret["json"] = data;

                var demoNode = (function(domStr){
                    var objE = document.createElement("div");
                    objE.innerHTML = domStr;
                    return objE.firstChild;
                })(createMutipleDemoBlock(data));

                targetElement.appendChild(demoNode);

                if('undefined' !== typeof(api)){ // 优化按钮点击.
                    api.parseTapmode();
                }
				
				if('function' === typeof(callback)){
					callback(ret, err);
				}
				
			});
		}

        // ---------------------------------------------------------

        /* 获取JSON文件. */
        function getJSON(jsonPath, callback){
            /* 使用读文件操作来读 JSON 文件 */
            api.readFile({
                path: jsonPath
            }, function(ret, err){
                if(ret.status){
                    var jsonObj = JSON.parse(ret.data);
                    /* 把 JSON对象 回调出去. */
                    if("function" === typeof(callback)){
                        callback(jsonObj);
                    }

                }
            });
        }

        /* 自定义 each 方法. */
        function each(arr, callback){
            for(var idx in arr){
                var item = arr[idx];

                if("function" === typeof callback){
                    callback(idx, item);
                }
            }
        }

        // -------------------------------------------------------

        /* 使用模块某个方法.
        *
        * methodName   方法名, 指在 script/diy/ 中自定义的方法.
        * */

        api.readFile({
            path: diyPath
        }, function(ret, err){
            if(ret.status){
                eval(ret.data);
                demo.diyMethod = function diyMethod(methodName){
                    eval(methodName + "()");
                };
            }
        });

        // -------------------------------------------------------

		/* 返回自定义的实例对象.可以在此处控制函数或属性的访问权限.*/
		// 公开的方法和属性
		var pub = {
			'createCodeBlockRow': createCodeBlockRow,
			'createButtonGroupRow': createButtonGroupRow,
			'createInputGroupRow': createInputGroupRow,
			'createContentBlock': createContentBlock,
			'createDemoBlock' : createDemoBlock,
			'show': show
		};
		
		for(var key in pub){
			demo[key] = pub[key];
		}
		return demo;
	}
};

