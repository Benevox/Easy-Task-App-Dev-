import React from 'react'
import Onboard from '../../components/common/Onboard';
import group from '../../assets/images/group.png'


function OnboardOne() {
  return (
    <Onboard headText="Post your Jobs" bodyText="Describe your job that needs to be done, specify the date and time then enter your budget and post the job live." illustrator={group} proceed={true} progress="two" />
  )
}

export default OnboardOne;