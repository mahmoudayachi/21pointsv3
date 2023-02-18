import { element, by, ElementFinder } from 'protractor';

export class PrefrencesComponentsPage {
  createButton = element(by.id('jh-create-entity'));
  deleteButtons = element.all(by.css('jhi-prefrences div table .btn-danger'));
  title = element.all(by.css('jhi-prefrences div h2#page-heading span')).first();
  noResult = element(by.id('no-result'));
  entities = element(by.id('entities'));

  async clickOnCreateButton(): Promise<void> {
    await this.createButton.click();
  }

  async clickOnLastDeleteButton(): Promise<void> {
    await this.deleteButtons.last().click();
  }

  async countDeleteButtons(): Promise<number> {
    return this.deleteButtons.count();
  }

  async getTitle(): Promise<string> {
    return this.title.getAttribute('jhiTranslate');
  }
}

export class PrefrencesUpdatePage {
  pageTitle = element(by.id('jhi-prefrences-heading'));
  saveButton = element(by.id('save-entity'));
  cancelButton = element(by.id('cancel-save'));

  idInput = element(by.id('field_id'));
  weeklygoalInput = element(by.id('field_weeklygoal'));
  weightunitsSelect = element(by.id('field_weightunits'));

  userSelect = element(by.id('field_user'));

  async getPageTitle(): Promise<string> {
    return this.pageTitle.getAttribute('jhiTranslate');
  }

  async setIdInput(id: string): Promise<void> {
    await this.idInput.sendKeys(id);
  }

  async getIdInput(): Promise<string> {
    return await this.idInput.getAttribute('value');
  }

  async setWeeklygoalInput(weeklygoal: string): Promise<void> {
    await this.weeklygoalInput.sendKeys(weeklygoal);
  }

  async getWeeklygoalInput(): Promise<string> {
    return await this.weeklygoalInput.getAttribute('value');
  }

  async setWeightunitsSelect(weightunits: string): Promise<void> {
    await this.weightunitsSelect.sendKeys(weightunits);
  }

  async getWeightunitsSelect(): Promise<string> {
    return await this.weightunitsSelect.element(by.css('option:checked')).getText();
  }

  async weightunitsSelectLastOption(): Promise<void> {
    await this.weightunitsSelect.all(by.tagName('option')).last().click();
  }

  async userSelectLastOption(): Promise<void> {
    await this.userSelect.all(by.tagName('option')).last().click();
  }

  async userSelectOption(option: string): Promise<void> {
    await this.userSelect.sendKeys(option);
  }

  getUserSelect(): ElementFinder {
    return this.userSelect;
  }

  async getUserSelectedOption(): Promise<string> {
    return await this.userSelect.element(by.css('option:checked')).getText();
  }

  async save(): Promise<void> {
    await this.saveButton.click();
  }

  async cancel(): Promise<void> {
    await this.cancelButton.click();
  }

  getSaveButton(): ElementFinder {
    return this.saveButton;
  }
}

export class PrefrencesDeleteDialog {
  private dialogTitle = element(by.id('jhi-delete-prefrences-heading'));
  private confirmButton = element(by.id('jhi-confirm-delete-prefrences'));

  async getDialogTitle(): Promise<string> {
    return this.dialogTitle.getAttribute('jhiTranslate');
  }

  async clickOnConfirmButton(): Promise<void> {
    await this.confirmButton.click();
  }
}
