import {App, Modal, Setting} from "obsidian";

export class ExampleModal extends Modal {
    result: string;
    onSubmit: (result: string) => void;

    constructor(app: App, onSubmit: (result: string) => void) {
        super(app);
        this.onSubmit = onSubmit;
    }

    onOpen(): void {
        let { contentEl } = this;
        contentEl.createEl("h1", { text: "Number to increase:" });

        new Setting(contentEl)
            .setName("Number")
            .addText((text) =>
                text.onChange((value) => {
                    this.result = value;
                }));
        
        new Setting(contentEl)
            .addButton((btn) =>
                btn
                    .setButtonText("Submit")
                    .setCta()
                    .onClick(() => {
                        this.close();
                        this.onSubmit(this.result);
                    })
            );
    }

    onClose(): void {
        let { contentEl } = this;
        contentEl.empty();
    }
}

