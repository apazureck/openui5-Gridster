sap.ui.define([
	"sap/ui/core/Control"
], function (Control) {
	"use strict";
	return Control.extend("sap.ui.demo.todo.controls.GridElement", {
		metadata: {
            defaultAggregation: "content",
			properties: {
				row: {
					type: "int",
					defaultValue: 1
                },
                column: {
					type: "int",
					defaultValue: 1
                },
                columnSpan: {
					type: "int",
					defaultValue: 1
                },
                rowSpan: {
					type: "int",
					defaultValue: 1
				}
			},
			aggregations: {
				content: "sap.ui.core.Control"
			},
		},
		init: function () {},
		renderer: function (oRM, oControl) {
            for(var ctrl of oControl.getAggregation("content")) {
                oRM.renderControl(ctrl);
            }
			oRM.renderControl();
		}
	});
});
