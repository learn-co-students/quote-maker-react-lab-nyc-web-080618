export default (state = [], action) => {

  switch (action.type) {
    case "ADD_QUOTE":
      return state.concat(action.quote)
    case "REMOVE_QUOTE":
      return state.filter(q=>q.id!==action.quoteId)
    case "UPVOTE_QUOTE":
      return state.map(q=>{
        if (q.id===action.quoteId) {
          q.votes+=1
          return q
        }
        return q
      })
      case "DOWNVOTE_QUOTE":
        return state.map(q=>{
          if (q.id===action.quoteId&&q.votes>0) {
            q.votes-=1
            return q
          }
          return q
        })
    default:
      return state;
  }

}
