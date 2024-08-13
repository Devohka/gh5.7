import React, { Component } from "react";
import styled from "styled-components";

const Box = styled.div`
margin-left: 15px;
width: 300px;
border: 2px solid red;
border-radius: 25px;
p {
    font-size: 25px;
}
`;

const BoxContainer = styled.div`
display: flex;
`;

const Form = styled.form`
margin-top: 10px;
margin-left: 15px;
width: 300px;
flex-wrap: wrap;
border: 2px solid black;
border-radius: 10px;
display: flex;
input{
    border: 2px solid black;
border-radius: 10px;
    margin-top: 10px;
    width: 300px;
}
button {
    margin-top: 10px;
    border: 2px solid black;
border-radius: 10px;
    width: 300px;
}
`;

export default class TaskList extends Component {

    state = {
        takeList: [
            {
                text: "Створіть компонент TaskList (Компонент списку завдань)",
                id: 1
            },
            {
                text: "Створіть класовий компонент TaskList.",
                id: 2
            },
            {
                text: "Додайте статичний масив tasks, який буде зберігати список завдань. Початковий список може бути заданий у вигляді масиву об'єктів з полями, такими як id та text.",
                id: 3
            }
        ]
    }





    delete = (e) => {
        e.preventDefault();
        this.setState(
            () => {

                return this.state.takeList.pop();
            }, () => {
                console.log("Видалення");
            });

        //     e.preventDefault();
        //     console.log(12);
        //     // e.currentTarget.elements.delete.value,
        //    return data.map(task => {

        //     if(e.currentTarget.elements.delete.value === task.id) {
        //        return data.slice(e.currentTarget.elements.delete.value -1, 1), 
        //        console.log(12);
        //     };
        //     });

    }
    add = (e) => {
        const text = e.currentTarget.elements.text.value;
        const id = e.currentTarget.elements.id.value;
        // let list = this.taskList;
        console.log(12);
        // console.log(1)
        e.preventDefault();
        this.setState(
            () => {
                const task = {
                    text: text,
                    id: id
                };

                return this.state.takeList.push(task)

            }, () => {
                console.log("Додавання");
            });

    };
    render() {



        return (

            <>

                <BoxContainer>
                    {this.state.takeList.map(task => {
                        return (
                            <Box>
                                <p>{task.text}</p>
                                <p>id: {task.id}</p>
                            </Box>
                        );
                    })
                    }
                </BoxContainer>


                <Form onSubmit={this.add}>
                    <input type="text" placeholder="text" name="text" />
                    <input type="text" placeholder="id" name="id" />
                    <button type="submit">add</button>
                </Form>

                <Form onSubmit={this.delete}>
                    <button type="submit">Dlete</button>
                </Form>

            </>
        );

    }

}