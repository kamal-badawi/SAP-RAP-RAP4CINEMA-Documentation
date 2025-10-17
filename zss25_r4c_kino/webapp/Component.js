sap.ui.define(["sap/fe/core/AppComponent"], function(Component) {
    "use strict";
    return Component.extend("com.zss25.learnr4c.kinoverwaltung.zss25r4ckino.Component", {
        metadata: { manifest: "json" },
        init: function() {
            Component.prototype.init.apply(this, arguments);
            // CSS einbinden
            jQuery.sap.includeStyleSheet(jQuery.sap.getModulePath("com.zss25.learnr4c.kinoverwaltung.zss25r4ckino.css.style"));
        }
    });
});
