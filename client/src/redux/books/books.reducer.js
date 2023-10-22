const initialState = {
  query: '',
  suggestions: [],
  selectedOption: 'Name',
  sortOrder: 'asc',
  quantity:1,
  page:1,
  books: [],
  totalPages:0 
};

const booksReducer = (state = initialState, action) => {
  switch (action.type){
    case "get/book/success":
      return {
        ...state,
        books:[...action.payload.books],
        totalPages: action.payload.totalPages
      }
    case 'UPDATE_QUERY':
      return {
        ...state,
        query: action.query,
      };
    case 'UPDATE_SUGGESTIONS':
      return {
        ...state,
        suggestions: action.suggestions,
      };
    case 'UPDATE_SORT_BY':{
     
      return {
        ...state,
        selectedOption: action.selectedOption,
      };
    }
    case 'UPDATE_SORTING':
      return {
        ...state,
        sortOrder: action.sortOrder,
      };
    case 'UPDATE_QUANTITY':
      return {
        ...state,quantity: action.quantity,
      }
    case 'UPDATE_PAGE':
      return {
        ...state,page: action.page,
      }
    default:
      return state;
  }
};

export default booksReducer;
