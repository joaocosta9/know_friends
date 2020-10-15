// Initial State
const initialState = {
  players_names: [],
  rounds: 0,
  current_player: 0,
  target_player: 0,
  current_question: {question: "", options: []},
  curr_round_results: [],
  global_results: [],
  category: '',
};

// Reducers (Modifies The State And Returns A New State)
const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    // Login
    case 'START_GAME': {
      return {
        // State
        ...state,
        // Redux Store
        players_names: action.players_names,
        rounds: action.rounds,
        category: action.category,
      };
    }

    case 'CHANGE_QUESTION': {
      return {
        ...state,
        current_question: action.question,
      };
    }
    // Default
    default: {
      return state;
    }
  }
};

// Exports
export default gameReducer;
