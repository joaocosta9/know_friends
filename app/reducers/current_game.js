// Initial State
const initialState = {
    players_names: [],
    rounds: 0,
    current_player: 0,
    target_player: 0,
    curr_round_results: [],
    global_results: [],
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
        }
      }
      // Default
      default: {
        return state;
      }
    }
  };
  
  // Exports
  export default gameReducer;
