import { mount, setChildren } from "redom";
import { Container } from "./components/container";
import { Form } from "./components/form";
import { listInput } from "./createElement/createListInputs";

const container = new Container();
const formPayment = new Form(listInput);

setChildren(container, formPayment);
mount(document.body, container);
