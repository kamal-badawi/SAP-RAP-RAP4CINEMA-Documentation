sap.ui.define([
    "sap/ui/test/opaQunit",
    "./pages/JourneyRunner"
], function (opaTest, runner) {
    "use strict";

    function journey() {
        QUnit.module("First journey");

        opaTest("Start application", function (Given, When, Then) {
            Given.iStartMyApp();

            Then.onTheZSS25_R4C_C_VERKF_A3List.iSeeThisPage();

        });


        opaTest("Navigate to ObjectPage", function (Given, When, Then) {
            // Note: this test will fail if the ListReport page doesn't show any data
            
            When.onTheZSS25_R4C_C_VERKF_A3List.onFilterBar().iExecuteSearch();
            
            Then.onTheZSS25_R4C_C_VERKF_A3List.onTable().iCheckRows();

            When.onTheZSS25_R4C_C_VERKF_A3List.onTable().iPressRow(0);
            Then.onTheZSS25_R4C_C_VERKF_A3ObjectPage.iSeeThisPage();

        });

        opaTest("Teardown", function (Given, When, Then) { 
            // Cleanup
            Given.iTearDownMyApp();
        });
    }

    runner.run([journey]);
});