import React, { Component } from 'react';
import TodoItems from './component/todoItems/TodoItems'
import AddItems from './component/AddItems/AddItems'

class App extends Component {

  //إنشاء state لحفظ البيانات

  state = {
    items: [
      { id: 1, name: "hamza", age: 22 },
      { id: 2, name: "ali", age: 24 },
      { id: 3, name: "mahmoud", age: 23 }

    ]
  }
  //عند الضغط على الصنف احذفه من خلال التأكد من الآيدي 

  deleteItems = (id) => {
    let items = this.state.items;
    let i = items.findIndex(item => item.id === id)
    items.splice(i, 1)
    this.setState({ items: items })
  }

  /* اولا اخذ البيانات عن طريق ال بروبس و من ثم اضافتهم في القائمة الجديدة
   و اعطاء آيدي افتراضي من اجل عدم حصول مشكلة*/

  AddItems = (item) => {
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({ items: items })
  }

  //إرسال البيانات من الstate إلى الصفحة الثانية عن طريق الprops 
  render() {
    return (
      <div className="App container">
        <h1 className="text-center">To Do List</h1>
        <TodoItems items={this.state.items} deleteItems={this.deleteItems} />
        <AddItems AddItems={this.AddItems} />
      </div>
    )
  }
}

export default App;


//طريقة ثانية لحذف الاسم عند الضغط عليه 

  // deleteItems = (id) => {
  //   let items = this.state.items.filter(item => {
  //     return (item.id !== id)
  //   })
  //   this.setState({items:items})
  // }