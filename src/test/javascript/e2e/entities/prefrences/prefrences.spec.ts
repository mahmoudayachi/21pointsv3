import { browser, ExpectedConditions as ec /* , promise */ } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import {
  PrefrencesComponentsPage,
  /* PrefrencesDeleteDialog, */
  PrefrencesUpdatePage,
} from './prefrences.page-object';

const expect = chai.expect;

describe('Prefrences e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let prefrencesComponentsPage: PrefrencesComponentsPage;
  let prefrencesUpdatePage: PrefrencesUpdatePage;
  /* let prefrencesDeleteDialog: PrefrencesDeleteDialog; */
  const username = process.env.E2E_USERNAME ?? 'admin';
  const password = process.env.E2E_PASSWORD ?? 'admin';

  before(async () => {
    await browser.get('/');
    navBarPage = new NavBarPage();
    signInPage = await navBarPage.getSignInPage();
    await signInPage.autoSignInUsing(username, password);
    await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
  });

  it('should load Prefrences', async () => {
    await navBarPage.goToEntity('prefrences');
    prefrencesComponentsPage = new PrefrencesComponentsPage();
    await browser.wait(ec.visibilityOf(prefrencesComponentsPage.title), 5000);
    expect(await prefrencesComponentsPage.getTitle()).to.eq('twentyonepointsv3App.prefrences.home.title');
    await browser.wait(ec.or(ec.visibilityOf(prefrencesComponentsPage.entities), ec.visibilityOf(prefrencesComponentsPage.noResult)), 1000);
  });

  it('should load create Prefrences page', async () => {
    await prefrencesComponentsPage.clickOnCreateButton();
    prefrencesUpdatePage = new PrefrencesUpdatePage();
    expect(await prefrencesUpdatePage.getPageTitle()).to.eq('twentyonepointsv3App.prefrences.home.createOrEditLabel');
    await prefrencesUpdatePage.cancel();
  });

  /* it('should create and save Prefrences', async () => {
        const nbButtonsBeforeCreate = await prefrencesComponentsPage.countDeleteButtons();

        await prefrencesComponentsPage.clickOnCreateButton();

        await promise.all([
            prefrencesUpdatePage.setWeeklygoalInput('5'),
            prefrencesUpdatePage.weightunitsSelectLastOption(),
            prefrencesUpdatePage.userSelectLastOption(),
        ]);

        await prefrencesUpdatePage.save();
        expect(await prefrencesUpdatePage.getSaveButton().isPresent(), 'Expected save button disappear').to.be.false;

        expect(await prefrencesComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1, 'Expected one more entry in the table');
    }); */

  /* it('should delete last Prefrences', async () => {
        const nbButtonsBeforeDelete = await prefrencesComponentsPage.countDeleteButtons();
        await prefrencesComponentsPage.clickOnLastDeleteButton();

        prefrencesDeleteDialog = new PrefrencesDeleteDialog();
        expect(await prefrencesDeleteDialog.getDialogTitle())
            .to.eq('twentyonepointsv3App.prefrences.delete.question');
        await prefrencesDeleteDialog.clickOnConfirmButton();
        await browser.wait(ec.visibilityOf(prefrencesComponentsPage.title), 5000);

        expect(await prefrencesComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
    }); */

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
