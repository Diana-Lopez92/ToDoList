import React, {useState} from 'react'
import { View, FlatList, Text, TextInput } from 'react-native'
import { Input, Button } from 'react-native-elements';

const Formulario = (props) => {

    const [task, setTask] = useState('')
    const [message, setMessage] = useState('Add a new task')
    const [tasksList, setTasksList] = useState([props.listState])// Recibo la lista del componente 'Lista'
    console.log('Initial List: ' + tasksList);

    const addTask = () => {
        if(!task.trim()){
            console.log('Empty element')
            setMessage('Please enter a task')
            return
        }
        console.log('Task: ' + task)
        console.log('Task Before modification: ' + tasksList)
        setTasksList([
            ...tasksList,
            task
        ])


        console.log('New List: ' + tasksList)
        props.switchScreen('Lista')
        props.receiveList(tasksList)
    }

    return (        
        <View style={style.container}>
            {/*<Button title="Add task" onPress={() => props.switchScreen('Lista')}/>*/}
            <Input placeholder={message} onChangeText={value => setTask(value)}></Input>
            <Button title="Add task" onPress={() => addTask()}/>            
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

