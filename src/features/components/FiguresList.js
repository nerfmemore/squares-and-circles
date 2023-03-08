import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchFigures, selectAllFigures } from "./figuresSlice";
import { selectAllFilters } from "./filterSlice";

export const FiguresList = () => {
    const dispatch = useDispatch();
    const figures = useSelector(selectAllFigures);
    const figuresStatus = useSelector((state) => state.figures.status)
    const filters = useSelector(selectAllFilters)

    useEffect(() => {
        if (figuresStatus === 'idle'){
            dispatch(fetchFigures())
        }
    }, [figuresStatus, dispatch])

    const renderedFigures = figures.map((figure) => {
        const form = figure.form;
        const color = figure.color;
        const dark = figure.dark;

        const colorFilter = filters[color];
        const formFilter = filters[form];
        const themeFilter = (dark === filters.theme) ? true : false;
        const mainTheme = (filters.theme === 'all' || themeFilter);

        const mainFilter = colorFilter && formFilter && mainTheme;
        
        return (mainFilter ? <div className={`${form} ${color} ${dark}`}></div> : null)
    })
    
    return (<div className="wrapper">{renderedFigures}</div>)
}