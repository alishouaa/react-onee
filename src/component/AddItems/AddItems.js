import React, { Component } from 'react';
import './AddItems.css'

class AddItems extends Component {
    state = {
        name: '',
        age: ''
    }

    // من أجل عند كتابة شيء في الاسم تفريقه عن كتابته في العمر عن طريق الآيدي و من ثم اخذ القيمة

    HandleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    // عند الضغط على اضافة يًرسل البينات عن طريق بروبس و من ثمّ يفرغ ال state 

    HandeleSubmit = (e) => {
        e.preventDefault();
        if (e.target.name.value === '') {
            return false
        }
        else {
            this.props.AddItems(this.state)
            this.setState({
                name: '',
                age: ''
            })
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.HandeleSubmit}>
                    <input type="text" placeholder="enter name ..." id="name" onChange={this.HandleChange} value={this.state.name} />
                    <input type="number" placeholder="enter age ..." id="age" onChange={this.HandleChange} value={this.state.age} />
                    <input type="submit" value="add" />

                </form>
            </div>
        )
    }
}

export default AddItems;
