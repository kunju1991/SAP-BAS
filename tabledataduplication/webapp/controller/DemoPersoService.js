sap.ui.define(['jquery.sap.global'],
	function(jQuery) {
	"use strict";

	// Very simple page-context personalization
	// persistence service, not for productive use!
	var DemoPersoService = {
        
        //Getter for Table Personalization data
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

        //Setter for Table Personalization data
		setPersData : function (oBundle) {
			var oDeferred = new jQuery.Deferred();
			this._oBundle = oBundle;
			oDeferred.resolve();
			return oDeferred.promise();
		},

	};

	return DemoPersoService;

});
