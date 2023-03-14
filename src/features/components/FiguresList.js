import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFigures, selectAllFigures } from "../reducers/figuresSlice";
import { selectAllFilters } from "../reducers/filterSlice";
import { storedNumberOfColumns } from "../reducers/columnsSlice";

export const FiguresList = () => {
    const dispatch = useDispatch();
    const figures = useSelector(selectAllFigures);
    const figuresStatus = useSelector((state) => state.figures.status);
    const filters = useSelector(selectAllFilters);
    const numberOfColumns = useSelector(storedNumberOfColumns);

    useEffect(() => {
        if (figuresStatus === 'idle'){
            dispatch(fetchFigures())
        }
    }, [figuresStatus, dispatch])

    const renderedFigures = figures.map((figure, index) => {
        const {form, color} = figure;
        const dark = (figure.dark === true) ? 'dark' : 'light';

        const colorFilter = filters[color];
        const formFilter = filters[form];
        const themeFilter = (dark === filters.theme);
        const mainTheme = (filters.theme === 'all' || themeFilter);

        const mainFilter = colorFilter && formFilter && mainTheme;
        
        return (mainFilter ? <div key={index} className={`figure ${form} ${color} ${dark}`}></div> : null)
    })
    
    return (<div className="wrapper" style={{'--number-of-columns': numberOfColumns}}>{renderedFigures}</div>)
}