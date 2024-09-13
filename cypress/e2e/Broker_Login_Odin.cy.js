/// <reference types="cypress"/>

it('Broker_Login', () => {

    cy.viewport(1750, 800);
    cy.clearAllCookies();
    cy.visit('https://strike.jainam.in/#/');
    cy.wait(3000);
    cy.get('.nav-link').click()

    //Login Flow
    cy.wait(2000);
    cy.xpath("/html[1]/body[1]/app-root[1]/app-layout[1]/app-headerpanel[1]/app-login[1]/div[1]/kendo-dialog[1]/div[2]/div[1]/div[1]/div[1]/form[1]/div[1]/div[1]/div[3]/kendo-textbox[1]/input[1]").type('9825479404')
    cy.get('.btn_bg_bw').click();
    cy.wait(2000);
    cy.xpath("//kendo-textbox[@placeholder='Enter Password']").type('Loop@345');
    cy.get('.btn_bg_bw').click();
    cy.log('Login successful');

    //Click On Stratergy
    cy.wait(3000)
    cy.get('#navBarWeb > :nth-child(3) > #Strategies').click({setTimeout:2000});
    
    //Click on Broker Login
    cy.xpath('/html[1]/body[1]/app-root[1]/app-layout[1]/app-strategies[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/a[1]').click({setTimeout:2000})

    //Click on Odin Setup
  cy.xpath('/html[1]/body[1]/app-root[1]/app-layout[1]/app-strategies[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[3]/app-broker-login[1]/div[1]/div[1]/div[1]/ul[1]/li[1]/div[1]/div[2]/a[1]').click()

    //Enter User Id 
    cy.xpath('/html/body/app-root/app-layout/app-broker-dynamic/ngx-dynamic-hooks/app-odin/div/div/div/div/div/div/div[2]/div/div/div/div/form/fieldset/div/div[1]/kendo-formfield/div/kendo-textbox/input').type('j23')
  
   // Enter Password
  cy.xpath('/html/body/app-root/app-layout/app-broker-dynamic/ngx-dynamic-hooks/app-odin/div/div/div/div/div/div/div[2]/div/div/div/div/form/fieldset/div/div[2]/kendo-formfield/div/div/kendo-textbox/input').type('Strike@123')
    //  Enter FA
    cy.xpath('/html/body/app-root/app-layout/app-broker-dynamic/ngx-dynamic-hooks/app-odin/div/div/div/div/div/div/div[2]/div/div/div/div/form/fieldset/div/div[3]/kendo-formfield/div/kendo-textbox/input').type('AFLPP2068K')
    //Click on Submit Button

})