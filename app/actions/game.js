export const start_game = (players_names, rounds, category) => ({
    type: "START_GAME",
    players_names: players_names,
    rounds: rounds,
    category: category
  });


  export const change_question = (question) => ({
      type: "CHANGE_QUESTION",
      question: question
  })