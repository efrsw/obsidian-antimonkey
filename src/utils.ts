import { getAPI } from "obsidian-dataview";
import { App } from "obsidian";

export function printHello() : void {
    console.log("Hello, Module!");
}

export function getFileFields() : void {
    const api = getAPI();
    const currentPage = app.workspace.getActiveFile();
    console.log(api?.page(currentPage!.path));
}