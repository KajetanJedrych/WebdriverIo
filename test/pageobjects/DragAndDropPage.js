import BasePage from './BasePage';

export default class DragAndDropPage extends BasePage {
    get dragAndDropLink() { return $('a=Drag and Drop'); }
    get columnA() { return $('#column-a'); }
    get columnB() { return $('#column-b'); }

    async goToDragAndDrop() {
        await this.dragAndDropLink.click();
    }

    async dragElementAToElementB() {
        await browser.performActions([
            {
                type: 'pointer',
                id: 'mouse',
                actions: [
                    { type: 'pointerMove', origin: await this.columnA, duration: 500 },
                    { type: 'pointerDown', button: 0 },
                    { type: 'pointerMove', origin: await this.columnB, duration: 500 },
                    { type: 'pointerUp', button: 0 }
                ]
            }
        ]);
    }

    async getColumnAText() {
        return await this.columnA.getText();
    }

    async getColumnBText() {
        return await this.columnB.getText();
    }
}
