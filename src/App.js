import React, { Component, createRef } from "react";
import {DndProvider} from "react-dnd";
import { RecoilRoot } from "recoil"; 
import {HTML5Backend} from "react-dnd-html5-backend";
import "react-form-builder2/dist/app.css";
import { DragDrop } from "./components/DragDrop";
//import { FormBuilder as FormBuilderIo, Formio, FormEdit } from "react-formio";
import $ from "jquery";
import ReactDOM from "react-dom";
import "./App.css";
const App = () => {
  return (
    <RecoilRoot>
    <DndProvider backend={HTML5Backend}>
      <div>
        <DragDrop />
      </div>
    </DndProvider>
    </RecoilRoot>
  );
};

export default App;
/*

const formData = [];
document.body.style.margin = "30px";
//Initialize formBuilder
class FormBuilder extends Component {
  fb = createRef();
  componentDidMount() {
    $(this.fb.current).formBuilder({ formData });
  }
  render() {
    return <div id="fb-editor" ref={this.fb} />;
  }
}
*/
// const formData=[
//   {
//     type:"header",
//     subtype:"h1",
//     label:"formBuilder in React"
//   },
//   {
//     type:"paragraph",
//     label:"This is Task 1"
//   }
// ]
// var items = [{
//   key: 'Header',
//   name: 'Header Text',
//   icon: 'fa fa-header',
//   static: true,
//   content: 'Placeholder Text...'
// },
// {
//   key: 'Paragraph',
//   name: 'Paragraph',
//   static: true,
//   read_only:false,
//   icon: 'fa fa-paragraph',
//   content: 'Placeholder Text...'
// }];