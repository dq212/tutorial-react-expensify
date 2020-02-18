import moment from 'moment'
// Get visible expenses
export default (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense)=>{
        // const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        // const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate; 
        const createdAtMoment = moment(expense.createdAt)
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        //figure out if expense.description has the variable text string inside of import PropTypes from 'prop-types'
        //includes
        //convert both strings to lower case


        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b)=>{
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if ( sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    })
}