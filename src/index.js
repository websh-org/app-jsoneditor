import { WebShellApp } from "@websh/web-shell-app";
import JSONEditor from "jsoneditor";
import "jsoneditor/dist/jsoneditor.min.css";
import manifest from "./manifest.json";

const container = document.getElementById("editor")
const options = {}
const editor = new JSONEditor(container, options)

WebShellApp.manifest(manifest)
  .command('file-open', ({ format, content, type, extension }) => {
    editor.set(JSON.parse(content));
    return "OK";
  })
  .command('file-save', ({ format, extension }) => {
    return { content: JSON.stringify(editor.get(),null,2), type:"application/json" }
  })
  .command('file-new', function ({ format }) {
    editor.set({});
    return "OK";
  })
