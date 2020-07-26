import React, { useState } from 'react'
import { View } from 'react-native'
import { Input, Button } from 'react-native-elements';
import shortid from 'shortid';

const Formulario = (props) => {

    const [task, setTask] = useState('')    
    const [message, setMessage] = useState('Add a new task')
    const tasksList = [...props.listState]// Recibo la lista del componente 'Lista'  
    const [taskEdition, setTaskEdition] = useState(props.taskEdit)
    
    const addTask = () => {
        if (!task.trim()) {
            console.log('Empty element')
            setMessage('Please enter a task')
            return
        }

        //Victor: cambie el metodo para hacer un push del nuevo elemento en el array
        tasksList.push({id: shortid.generate(), taskName: task})
        
        props.switchScreen('Lista')
        props.receiveList(tasksList)
    }

    const editTask = () => {
        if(!taskEdition.trim()){
            console.log('Empty element')
            setMessage('Please enter a task')
            return
        }
        
        const index = tasksList.findIndex(item => item.id === props.id) // Obtengo el index del elemento a modificar
        tasksList[index].taskName = taskEdition
        
        props.receiveList(tasksList)
        props.switchScreen('Lista')       
    }

    return (
        <View>
            {
                props.editionModeParameter == true ? (
                    <View style={style.container}>  
                        <Input style={style.text} placeholder={message} onChangeText={value => setTaskEdition(value)} value={taskEdition}></Input>
                        <Button title='Edit task' buttonStyle={{backgroundColor: 'gold', width: 100}} onPress={() => {editTask(), props.receiveEditionMode(false)}} />   
                    </View>                                           
                ) :
                (
                    <View style={style.container}>  
                        <Input style={style.text} placeholder={message} onChangeText={value => setTask(value)} value={task}></Input>
                        <Button title='Add task' buttonStyle={{width: 100, backgroundColor: 'limegreen'}} onPress={() => addTask()} />   
                    </View>                                         
                )
            }
            
            <View style={style.backButton}>
                <Button title="Back" buttonStyle={{width: 100}} onPress={() => {props.switchScreen('Lista'), props.receiveEditionMode(false)}}/>
            </View>
        </View>
    )
}

export default Formulario;

const style = {
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
        flexWrap: 'wrap',
        marginTop: 30
    },
    text: {
        fontSize: 20,
        alignSelf: 'stretch'
    },
    backButton: {
        marginTop: 50,
        flexDirection: 'column',
        alignItems: 'center'       
    }
}

