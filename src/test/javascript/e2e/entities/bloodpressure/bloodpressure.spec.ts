import { browser, ExpectedConditions as ec, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import { BloodpressureComponentsPage, BloodpressureDeleteDialog, BloodpressureUpdatePage } from './bloodpressure.page-object';

const expect = chai.expect;

describe('Bloodpressure e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let bloodpressureComponentsPage: BloodpressureComponentsPage;
  let bloodpressureUpdatePage: BloodpressureUpdatePage;
  let bloodpressureDeleteDialog: BloodpressureDeleteDialog;
  const username = process.env.E2E_USERNAME ?? 'admin';
  const password = process.env.E2E_PASSWORD ?? 'admin';

  before(async () => {
    await browser.get('/');
    navBarPage = new NavBarPage();
    signInPage = await navBarPage.getSignInPage();
    await signInPage.autoSignInUsing(username, password);
    await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
  });

  it('should load Bloodpressures', async () => {
    await navBarPage.goToEntity('bloodpressure');
    bloodpressureComponentsPage = new BloodpressureComponentsPage();
    await browser.wait(ec.visibilityOf(bloodpressureComponentsPage.title), 5000);
    expect(await bloodpressureComponentsPage.getTitle()).to.eq('twentyonepointsv3App.bloodpressure.home.title');
    await browser.wait(
      ec.or(ec.visibilityOf(bloodpressureComponentsPage.entities), ec.visibilityOf(bloodpressureComponentsPage.noResult)),
      1000
    );
  });

  it('should load create Bloodpressure page', async () => {
    await bloodpressureComponentsPage.clickOnCreateButton();
    bloodpressureUpdatePage = new BloodpressureUpdatePage();
    expect(await bloodpressureUpdatePage.getPageTitle()).to.eq('twentyonepointsv3App.bloodpressure.home.createOrEditLabel');
    await bloodpressureUpdatePage.cancel();
  });

  it('should create and save Bloodpressures', async () => {
    const nbButtonsBeforeCreate = await bloodpressureComponentsPage.countDeleteButtons();

    await bloodpressureComponentsPage.clickOnCreateButton();

    await promise.all([
      bloodpressureUpdatePage.setTimestampInput('2000-12-31'),
      bloodpressureUpdatePage.setSystolicInput('5'),
      bloodpressureUpdatePage.setDiastolicInput('5'),
      bloodpressureUpdatePage.userSelectLastOption(),
    ]);

    await bloodpressureUpdatePage.save();
    expect(await bloodpressureUpdatePage.getSaveButton().isPresent(), 'Expected save button disappear').to.be.false;

    expect(await bloodpressureComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1, 'Expected one more entry in the table');
  });

  it('should delete last Bloodpressure', async () => {
    const nbButtonsBeforeDelete = await bloodpressureComponentsPage.countDeleteButtons();
    await bloodpressureComponentsPage.clickOnLastDeleteButton();

    bloodpressureDeleteDialog = new BloodpressureDeleteDialog();
    expect(await bloodpressureDeleteDialog.getDialogTitle()).to.eq('twentyonepointsv3App.bloodpressure.delete.question');
    await bloodpressureDeleteDialog.clickOnConfirmButton();
    await browser.wait(ec.visibilityOf(bloodpressureComponentsPage.title), 5000);

    expect(await bloodpressureComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
