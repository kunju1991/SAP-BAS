sap.ui.define(['jquery.sap.global'],
	function(jQuery) {
	"use strict";

	// Very simple page-context personalization
	// persistence service, not for productive use!
	var DemoPersoService = {

        oResetData : {
			_persoSchemaVersion: "1.0",
			aColumns : [
				{
					id: "demoApp-table-EmployeeID",
					order: 0,
					text: "EmployeeID",
					visible: true
				},
				{
					id: "demoApp-table-FirstName",
					order: 1,
					text: "FirstName",
					visible: true
				},
				{
					id: "demoApp-table-LastName",
					order: 2,
					text: "LastName",
					visible: true
				}
			]
		},

        getPersData : function () {
			var oDeferred = new jQuery.Deferred();
			if (!this._oBundle) {
				this._oBundle = this.oData;
			}
			oDeferred.resolve(this._oBundle);
			// setTimeout(function() {
			// 	oDeferred.resolve(this._oBundle);
			// }.bind(this), 2000);
			return oDeferred.promise();
		},

		setPersData : function (oBundle) {
			var oDeferred = new jQuery.Deferred();
			this._oBundle = oBundle;
			oDeferred.resolve();
			return oDeferred.promise();
		},

		//this caption callback will modify the TablePersoDialog' entry for the 'Weight' column
		//to 'Weight (Important!)', but will leave all other column names as they are.
		getCaption : function (oColumn) {
			if (oColumn.getHeader() && oColumn.getHeader().getText) {
				if (oColumn.getHeader().getText() === "Weight") {
					return "Weight (Important!)";
				}
			}
			return null;
		},

		getGroup : function(oColumn) {
			// if ( oColumn.getId().indexOf('productCol') != -1 ||
			// 		oColumn.getId().indexOf('supplierCol') != -1) {
			// 	return "Primary Group";
			// }
			// return "Secondary Group";
		}
	};

	return DemoPersoService;

});
