import React from "react";
import { useDispatch } from "react-redux";
import { changer, themeChanger } from "./filterSlice";

export function ControlPanel(props){
    return (
        <div>
            <Check id='square' name='Квадраты'/>
            <Check id='circle' name='Круги'/>
            <Check id='red' name='Красные'/>
            <Check id='green' name='Зеленые'/>
            <Check id='blue' name='Синие'/>
            <Check id='yellow' name='Желтые'/>
            <Theme id='all' name='theme' status='all'/>
            <Theme id='dark' name='theme' status={true}/>
            <Theme id='light' name='theme' status={false}/>
            <input type='text' id="columns" name="columns" defaultValue={4} onChange = {columnsChange}></input>
            <label for='columns'>Колонок</label>
        </div>
    )
}

function Check(props){
    const dispatch = useDispatch();

    return (
        <div>
            <input type="checkbox" id={props.id} name={props.name} onChange = {() => dispatch(changer(props.id))} checked></input>
            <label for={props.id}>{props.name}</label>
        </div>
    )
}


function Theme(props){
    const dispatch = useDispatch();

    return (
        <div>
            <input type="radio" id={props.id} name={props.name} status={props.status} onChange = {() => dispatch(themeChanger(props.status))}></input>
            <label for={props.id}>{props.id}</label>
        </div>
    )
}

function columnsChange(e){
    console.log(e);
    document.documentElement.style.setProperty('--number-of-columns', e.currentTarget.value)
}