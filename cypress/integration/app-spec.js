//import videos from '../fixtures/videos.json';

describe('App data load flow', () => {
  beforeEach(() => {
    cy.fixture('videos.json').as('videos').then((videos) => {
      cy.intercept('https://developer.nps.gov/api/v1/webcams?q=Colorado&api_key=WWBfRf37fletVxvN9jVhqlrhofEwnhtHPbhuAhxP'), {body: videos});
    });

    cy.fixture('image-logo.png').as('natuurImage');
    cy.fixture('natuur.png').as('natuurText');

    cy.visit('http://localhost:3000');
  });

  it('User should see a header containing two images as logos', () => {
    cy.get('img[src="http://localhost:3000/src/assets/image-logo.png"]').should('be.visible');
    cy.get('img[src="natuurText"]').should('be.visible');
  });

  it('User should see Colorado webcams as default', () => {
    cy.get('.defaultVids').children().should('have.length', 4);
  });

  it.skip('User should be able to type a string into the search bar and submit it', () => {
    cy.get('input[type=text]').type('Maine');
    cy.get('input[type=submit]').click()
  });

  it('User should see the results of their search', () => {
    cy.get().children().should('have.length', 2)
  });

})
