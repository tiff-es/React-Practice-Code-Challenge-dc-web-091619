import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from "../components/Sushi";

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          props.sushis.map(s => {
              return <Sushi key={s.id}
                            sushi={s}
                            eat={props.eat}
                            taken={props.eaten.includes(s)}
              />
          } )
        }
        <MoreButton more={props.more}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer