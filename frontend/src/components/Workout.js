import React from 'react'
import EditModal from './EditModal'
import DeleteWorkout from './DeleteWorkout'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
const Workout = ({title,load,reps,id,date}) => {
  return (
    <>
   <div className="card">
      <div className="title">
        <h3>{title}</h3>
      </div>
      <div className="details">
        <div className="load">
          <div className="load-title">
            Load:
          </div>
          <div className="load-value">
            {load}
          </div>
        </div>
        <div className="reps">
          <div className="reps-title">
            Reps:
          </div>
          <div className="reps-value">
            {reps}
          </div>
        </div>
        <div className="date">
             {formatDistanceToNow(new Date(date),{addSuffix : true})} 
            
          </div>
      </div>
      <div className="options">
        <EditModal id={id}/>
        <DeleteWorkout id={id}/>
      </div>


   </div>
  
    </>
    
    
  )
}

export default Workout
