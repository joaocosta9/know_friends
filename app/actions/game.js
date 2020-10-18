export const start_game = (players_names, rounds, category) => ({
  type: 'START_GAME',
  players_names: players_names,
  rounds: rounds,
  category: category,
});

export const change_question = (question) => ({
  type: 'CHANGE_QUESTION',
  question: question,
});

export const insert_correct_answer = (answer) => ({
  type: 'INSERT_CORRECT_ANSWER',
  curr_round_correct_answer: answer,
});

export const insert_answer = (current_player, answer) => ({
    type: 'INSERT_ANSWER',
    current_player: current_player,
    user_answer: answer,
});

export const change_question_owner = () => ({
  type: 'CHANGE_QUESTION_OWNER'
})

export const increment_curr_round = () => ({
  type: 'INCREMENT_CURR_ROUND'
})

