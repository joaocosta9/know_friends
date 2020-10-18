// Initial State
const initialState = {
  players_names: [],
  rounds: 0,
  current_round: 0,
  current_player: 0,
  target_player: 0,
  current_question: {question: '', options: []},
  curr_round_correct_answer: '',
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
        global_results: action.players_names.map((name) => ({
          player_name: name,
          points: 0,
        })),
      };
    }

    case 'CHANGE_QUESTION': {
      return {
        ...state,
        current_question: action.question,
      };
    }

    case 'INSERT_CORRECT_ANSWER': {
      return {
        ...state,
        curr_round_correct_answer: action.curr_round_correct_answer,
        current_player:
          state.current_player == state.players_names.length - 1
            ? 0
            : state.current_player + 1,
      };
    }

    case 'INSERT_ANSWER': {
      const player_name = state.players_names[action.current_player];
      const answer_is_right =
        state.curr_round_correct_answer == action.user_answer ? true : false;
      return {
        ...state,
        curr_round_results: state.curr_round_results.concat({player_name: player_name, answer_is_right: answer_is_right}),
        global_results: answer_is_right
          ? state.global_results.map((result, index) => 
              (result.player_name === player_name) ?
                {...result, points: result.points + 1} : result)
          : state.global_results,
        current_player:
          state.current_player == state.players_names.length - 1
            ? 0
            : state.current_player + 1,
      };
    }

    case 'CHANGE_QUESTION_OWNER': {
      const target_player = state.target_player == state.players_names.length - 1
      ? 0
      : state.current_player + 1;
      return {
        ...state,
        target_player: target_player,
        current_player: target_player,
        curr_round_results: [],
        curr_round_correct_answer: '',
        current_round: target_player == 0 ? state.current_round + 1 : state.current_round

      }
    }

    case 'INCREMENT_CURR_ROUND': {
      return{
        ...state,
        current_round: state.current_round + 1
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
