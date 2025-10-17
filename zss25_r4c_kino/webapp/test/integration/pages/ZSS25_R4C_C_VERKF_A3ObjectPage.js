sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'com.zss25.learnr4c.kinoverwaltung.zss25r4ckino',
            componentId: 'ZSS25_R4C_C_VERKF_A3ObjectPage',
            contextPath: '/ZSS25_R4C_C_VERKF_A3'
        },
        CustomPageDefinitions
    );
});