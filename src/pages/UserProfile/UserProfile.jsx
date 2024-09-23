import React from 'react'
import data from "../../data/data.json"
import img__100 from "../../assets/img/comm-p.png"
const UserProfile = () => {

  const dataSkill = data.data
  console.log(dataSkill);

  return (
    <div className='data'>
      {
        dataSkill.map(dat =>
        (
          <>
            {dat.context.map(skill =>
            (
              <div>
                <img src={skill.img} alt="" />
                <h3>{skill.title}</h3>
                <p><span color='blue'>Action:</span> {skill.action}</p>
              </div>
            )
            )}
            <img src={img__100} />
          </>
        )
        )
      }

    </div>
  )
}

export default UserProfile