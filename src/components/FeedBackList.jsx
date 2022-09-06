import propTypes from 'prop-types'
import FeedbackItem from './FeedbackItem'

function FeedBackList({feedback, handleDelete}) {
  if(!feedback || feedback.length === 0) {
    return <p>No feedback yet</p>
  }
  
  return <div className='feedback-list'>
    {feedback.map((item) => (
        <FeedbackItem 
        key={item.id} 
        item={item} 
        handleDelete={handleDelete}
        />
    
    ))}

  </div>
}

FeedBackList.propTypes = {
    feedback: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.number.isRequired,
            text: propTypes.string.isRequired,
            rating: propTypes.number.isRequired,
        })
    ),
}

export default FeedBackList