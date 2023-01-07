import { Notice, Plugin } from "obsidian";
import { getAPI } from "obsidian-dataview";
import { getFileFields, printHello } from "src/utils";
import { ExampleModal } from "modals/user-input";

export default class obsidianAntimonkey extends Plugin {
	async onload() {
		this.addRibbonIcon("arrow-up-circle", "Add +1 to a field", async () => {
			const { update, getPropertyValue } =
				this.app.plugins.plugins["metaedit"].api;
			const currentFile = app.workspace.getActiveFile();
			let currentValue = await getPropertyValue("inline", currentFile);
			await update(
				"inline",
				Number.parseInt(currentValue) + 1,
				currentFile
			);
		});

		this.addRibbonIcon(
			"arrow-down-circle",
			"Subtract -1 from a field",
			async () => {
				const { autoprop } = this.app.plugins.plugins["metaedit"].api;
				let result = await autoprop("inline");
				console.log(result);
			}
		);

		this.addRibbonIcon(
			"dice",
			"Invoke default modal",
			async () => {
				const { update, getPropertyValue } = this.app.plugins.plugins["metaedit"].api;
				const currentFile = app.workspace.getActiveFile();
				const currentValue = await getPropertyValue("inline", currentFile);	
				new ExampleModal(this.app, async (result) => {
					await update("inline", Number.parseInt(result) + Number.parseInt(currentValue), currentFile);	
				}).open();
			}
		)
	}
}
