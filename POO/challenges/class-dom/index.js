import { Component } from "./Component.js";
import { Form } from "./Form.js";
import { Input } from "./Input.js";
import { Label } from "./Label.js";

const title = new Component("h1", "body", { textContent: "Olá mundo" });
title.render();

title.tag = "h3";
title.build().render();

const form = new Component("body");

const label = new Component("Nome:", form, { htmlFor: "nameInput" });
const input = new Input(form, { id: "nameInput", name: "name" });

form.render();
label.render();

form.addChildren(input);
