import axios from 'axios';

const url = `https://jsonplaceholder.typicode.com/todos/${Math.floor(Math.random() * 200)}`;


//used to define the structure of the object
interface Todo {
    id: number;
    title: string;
    completed: boolean;
}



axios.get(url).then(response => {
    const todo = response.data as Todo;
    const { id, title, completed} = todo;
    logToDo(id, title, completed);
})

const logToDo = (id: number, title: string, completed: boolean) => {
    console.log(`
    The Todo with ID: ${id}
    has a title of: ${title}
    is it finished? ${completed}`);
};