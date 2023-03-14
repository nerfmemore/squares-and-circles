import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changer, themeChanger } from "../reducers/filterSlice";
import { selectAllFilters } from "../reducers/filterSlice";
import { changeNumberOfColumns } from "../reducers/columnsSlice";
import { storedNumberOfColumns } from "../reducers/columnsSlice";

const colors = [
    {id: 'square', name: 'Квадраты'},
    {id: 'circle', name: 'Круги'},
    {id: 'red', name: 'Красные'},
    {id: 'green', name: 'Зеленые'},
    {id: 'blue', name: 'Синие'},
    {id: 'yellow', name: 'Желтые'},
]

const themes = [
    {id: 'all', status: 'all'},
    {id: 'dark', status: 'dark'},
    {id: 'light', status: 'light'}
]

export function ControlPanel(props){
    const numberOfColumns = useSelector(storedNumberOfColumns);
    const dispatch = useDispatch();

    return (
        <div className="sidebar">
            <ColorChecks filters={colors}/>
            <ThemeChecks themes={themes}/>
            <input type='number' id="columns" name="columns" defaultValue={numberOfColumns} onChange = {(event) => dispatch(changeNumberOfColumns(event.target.value))}></input>
            <label htmlFor='columns'>Колонок</label>
        </div>
    )
}

function ColorChecks(props){
    const filters = props.filters;
    const CheckMenu = filters.map((filter) => 
        <Check key={filter.id} id={filter.id} name={filter.name}/>
    )
    return (<div>{CheckMenu}</div>)
}

function ThemeChecks(props){
    const themes = props.themes;
    const ThemeRadio = themes.map((theme) => 
       <Theme key={theme.id} id={theme.id} name='theme' status={theme.status}/> 
    )
    return (<div>{ThemeRadio}</div>)
}

function Check(props){
    const dispatch = useDispatch();
    const filter = useSelector(selectAllFilters);

    return (
        <div>
            <input type="checkbox" id={props.id} name={props.name} onChange = {() => dispatch(changer(props.id))} checked={filter[props.id]}></input>
            <label htmlFor={props.id}>{props.name}</label>
        </div>
    )
}

function Theme(props){
    const dispatch = useDispatch();
    const theme = useSelector(selectAllFilters);

    return (
        <div>
            <input type="radio" id={props.id} name={props.name} status={props.status} onChange = {() => dispatch(themeChanger(props.status))} checked={theme.theme === props.status}></input>
            <label htmlFor={props.id}>{props.id}</label>
        </div>
    )
}