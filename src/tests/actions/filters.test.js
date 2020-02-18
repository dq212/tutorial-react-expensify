import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../../actions/filters';
import moment from 'moment';

test('should setup setStartDate',()=>{
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type:'SET_START_DATE',
        startDate: moment(0)
    })
})

test('should setup setEndDate',()=>{
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type:'SET_END_DATE',
        endDate: moment(0)
    })
})

test('should setup setTextFilter with no suplied text',()=>{
    const action = setTextFilter();
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text:''
    })
})

test('should setup setTextFilter with supplied text',()=>{
    const text = 'hello'
    const action = setTextFilter(text);
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text
    })
})

test('should setup sort by date',()=>{
    const action = sortByDate();
    expect(sortByDate()).toEqual({type:'SORT_BY_DATE'})
})

test('should setup sort by Amount',()=>{
    const action = sortByAmount();
    expect(sortByAmount()).toEqual({type:'SORT_BY_AMOUNT'})
})


