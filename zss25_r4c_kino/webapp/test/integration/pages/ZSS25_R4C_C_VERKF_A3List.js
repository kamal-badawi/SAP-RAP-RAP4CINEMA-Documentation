sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'com.zss25.learnr4c.kinoverwaltung.zss25r4ckino',
            componentId: 'ZSS25_R4C_C_VERKF_A3List',
            contextPath: '/ZSS25_R4C_C_VERKF_A3'
        },
        CustomPageDefinitions
    );
});