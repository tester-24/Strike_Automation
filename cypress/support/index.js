require('cypress-xpath')
Cypress.on('window:before:load', win => {

    // disable CSP in the test environment
    const original = win.fetch;
    win.fetch = (url, options) => {
        cy.log('Data Found ')
        if (options && options.headers) {
            delete options.headers['Content-Security-Policy'];
        }
        return original(url, options);
    };
    cy.stub(win.console, 'log', msg => {
        cy.task('log', `console.log --> ${msg}`)
    })
    cy.stub(win.console, 'error', msg => {
        cy.task('log', `console.error --> ${msg}`)
    })
    
})
module.exports = (on, config) => {
    on('task', {
        log(message) {
            console.log(message)
            return null
        },
    })
}