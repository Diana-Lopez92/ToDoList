import React, { useState } from 'react'
import { View, FlatList, Text, TextInput } from 'react-native'
import { Input, Button } from 'react-native-elements';

const Formulario = (props) => {

    const [task, setTask] = useState('')
    const [message, setMessage] = useState('Add a new task')
    const tasksList = [...props.listState]// Recibo la lista del componente 'Lista'  
    //Victor: cambie la lista para ser manejada como variable en vez de estado para facilitar el push del nuevo elemento del array
    console.log('Initial List: ' + tasksList);

    const addTask = () => {
        if (!task.trim()) {
            console.log('Empty element')
            setMessage('Please enter a task')
            return
        }
        console.log('Task: ' + task)
        console.log('Task Before modification: ' + tasksList)


        //Victor: cambie el metodo para hacer un push del nuevo elemento en el array
        tasksList.push(task)

        console.log('New List: ' + tasksList)
        props.switchScreen('Lista')
        props.receiveList(tasksList)
    }

    return (
        <View style={style.container}>
            {/*<Button title="Add task" onPress={() => props.switchScreen('Lista')}/>*/}
            <Input placeholder={message} onChangeText={value => setTask(value)}></Input>
            <Button title="Add task" onPress={() => addTask()} />
        </View>
    )
}

export default Formulario;

const style = {
    container: {
        alignSelf: 'stretch',
        marginTop: 30
    },
    text: {
        fontSize: 20,
        alignSelf: 'center'
    }
}

