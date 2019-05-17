import Page from './page-object';

fixture `Teste exemplo`
  .page`https://devexpress.github.io/testcafe/example`;

const page = new Page();

test('Primeiro teste', async t => {
  await t
      .typeText(page.nameInput, 'Ygor Vieira')
      .click(page.submitButton)
      .expect(page.articleHeader.innerText).eql('Thank you, Ygor Vieira!');
})

