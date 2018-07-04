sap.ui.define([
      "sap/ui/core/Control"
], function (Control) {
      "use strict";
      var ctrl = Control.extend("sap.ui.demo.todo.controls.Grid", {
            metadata: {
                  properties: {
                        widgetMargins: {
                              type: "string",
                              defaultValue: "10, 10"
                        },
                        widgetBaseDimensions: {
                              type: "string",
                              defaultValue: "140, 140"
                        },
                        allowDrag: {
                              type: "boolean",
                              default: true
                        }
                  },
                  defaultAggregation: "content",
                  aggregations: {
                        content: "sap.ui.demo.todo.controls.GridElement"
                  }
            },
            init: function () {

            },
            renderer: function (oRM, oControl) {
                  oRM.write('<div class="gridster">');
                  oRM.write("<ol>");
                  for (var gridElement of oControl.getAggregation("content")) {
                        oRM.write(`<li data-row="${gridElement.getProperty("row")}" data-col="${gridElement.getProperty("column")}" data-sizex="${gridElement.getProperty("rowSpan")}" data-sizey="${gridElement.getProperty("columnSpan")}">`)
                        oRM.renderControl(gridElement);
                        oRM.write("</li>");
                  }
                  oRM.write("</ol>");
                  oRM.write("</div>");
            },
            gridster: undefined,
            onAfterRendering: function () {
                  var that = this;
                  that.gridster = $(".gridster ol").gridster({
                        widget_margins: that.getValues(that.getProperty("widgetMargins")),
                        widget_base_dimensions: that.getValues(that.getProperty("widgetBaseDimensions"))
                  }).data('gridster');
                  if (that.getProperty("allowDrag")) {
                        that.gridster.enable();
                  } else {
                        that.gridster.disable();
                  }
            },
            getValues: function (arrayString) {
                  var match = arrayString.match(/(\d+).*?(\d+)/);
                  return [Number(match[1]), Number(match[2])];
            }
      });

      ctrl.prototype.setAllowDrag = function (bNewValue) {
            bNewValue = !!bNewValue;
            if (bNewValue == this.getAllowDrag()) {
                  return this;
            }
            if (this.gridster) {
                  if (bNewValue) {
                        this.gridster.enable();
                  } else {
                        this.gridster.disable();
                  }
            }

            this.setProperty("allowDrag", bNewValue, true);

            return this;
      };
      return ctrl;
});
