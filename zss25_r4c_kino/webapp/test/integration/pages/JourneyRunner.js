sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"com/zss25/learnr4c/kinoverwaltung/zss25r4ckino/test/integration/pages/ZSS25_R4C_C_VERKF_A3List",
	"com/zss25/learnr4c/kinoverwaltung/zss25r4ckino/test/integration/pages/ZSS25_R4C_C_VERKF_A3ObjectPage"
], function (JourneyRunner, ZSS25_R4C_C_VERKF_A3List, ZSS25_R4C_C_VERKF_A3ObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('com/zss25/learnr4c/kinoverwaltung/zss25r4ckino') + '/test/flpSandbox.html#comzss25learnr4ckinoverwaltung-tile',
        pages: {
			onTheZSS25_R4C_C_VERKF_A3List: ZSS25_R4C_C_VERKF_A3List,
			onTheZSS25_R4C_C_VERKF_A3ObjectPage: ZSS25_R4C_C_VERKF_A3ObjectPage
        },
        async: true
    });

    return runner;
});

