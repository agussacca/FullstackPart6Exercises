import { voteAnecdote } from '../reducers/anecdoteReducer'
import { useSelector, useDispatch } from 'react-redux'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector(state => state.anecdotes)
  const filter = useSelector(state => state.filter)
  const dispatch = useDispatch()

  const vote = (anecdoteObject) => {
    dispatch(voteAnecdote(anecdoteObject))
    dispatch(setNotification(`you voted anecdote: '${anecdoteObject.content}'`, 5))
  }

  const filteredAnecdotes = anecdotes.filter((anecdote) =>
    anecdote.content.toLowerCase().includes(filter.toLowerCase())
  )

  //[...anecdotes].sort()

  return (
    <>
      {filteredAnecdotes
      .sort((a, b) => b.votes - a.votes)
      .map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </>
  )
}

export default AnecdoteList