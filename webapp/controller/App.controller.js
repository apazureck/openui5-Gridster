sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function(Controller, JSONModel, Filter, FilterOperator) {
	'use strict';

	return Controller.extend('sap.ui.demo.todo.controller.App', {
		
		onInit: function() {
			console.log("Controller initing");
			this.getView().setModel(new JSONModel({
				allowDrag: true
			}), "gridSettings");
		}
	});

});
