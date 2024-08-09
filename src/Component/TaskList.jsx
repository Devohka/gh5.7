import React, { Component } from "react";
import data from "../taskList.json"


export default class TaskList extends Component {


    delete(e) {
        e.preventDefault();
        console.log(12);
        // e.currentTarget.elements.delete.value,
       return data.map(task => {

        if(e.currentTarget.elements.delete.value === task.id) {
           return data.slice(e.currentTarget.elements.delete.value -1, 1), 
           console.log(12);
        };
        });

    }

    show() {
        console.log(data);
       return data.map(task => {
            return (
                <div>
                    <p>{task.text}</p>
                    <p>id: {task.id}</p>
                </div>
            );

        });
    }
    render() {

        const add = (e) => {
            // let list = this.taskList;
            console.log(12);
            // console.log(1)
            e.preventDefault();
            const task = {
                text: e.currentTarget.elements.text.value,
                id: e.currentTarget.elements.id.value
            };
            return data.push(task), console.log(data);
        };
        return (

            <>
            <p>Покишо завдання працює в консолі</p>
                <button type="button" onClick={this.show}>show</button>

                <form onSubmit={add}>
                    <input type="text" placeholder="text" name="text" />
                    <input type="text" placeholder="id" name="id" />
                    <button type="submit">add</button>
                </form>

                <form onSubmit={this.delete}>
                    <input type="text" placeholder="id" name="delete" />
                    <button type="submit">Dlete</button>
                </form>

            </>

        );
    }

}