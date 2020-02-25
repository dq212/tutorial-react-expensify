import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import uuid from 'uuid'
import createMockStore from 'redux-mock-store';
import { startRemoveExpense } from '../../actions/expenses';


test('should setup default state of expense reducer', ()=>{
    const state = expensesReducer(undefined, {type:'@@INIT'});
    expect(state).toEqual([]);
})



// test('should remove expense from firevase', (done)=>{
//     const store = createMockStore({});
//     const id = expenses[2].id;
//     store.dispatch(startRemoveExpense({id}))
// })

test('should not remove id not found', ()=>{
    const action = {
        type:'REMOVE_EXPENSE',
        id: -1
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
})

test('should add an expense', ()=>{
    const expense = {
        id: '109',
        description:'laptop',
        note:'',
        createdAt:20000,
        amount:29500
    }
    const action = {
        type:'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test ('should edit an expense', ()=>{
    const amount = 122000;
    const action = {
        type:'EDIT_EXPENSE',
        id: expenses[1].id,
        updates:{
            amount
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state[1].amount).toBe(amount);
})

test ('should not edit an expense', ()=>{
    const amount = 122000;
    const action = {
        type:'EDIT_EXPENSE',
        id: '-1',
        updates:{
            amount
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
})

test('should set expenses', () =>{
    const action = {
        type:'SET_EXPENSES',
        expenses: [expenses[1]]
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1]])
})

