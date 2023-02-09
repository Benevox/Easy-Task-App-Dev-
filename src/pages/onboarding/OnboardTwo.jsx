import React from 'react'
import Onboard from '../../components/common/Onboard'
import onlineguy from '../../assets/images/onlineguy.png'

function OnboardTwo() {
    return (
        <Onboard headText="Review Offers and Select the Tasker of your choice." bodyText="Review offers from tasker and asses the taskers by checking their reviews, trust reputation and job success." illustrator={onlineguy} proceed={true} progress="three" />
    )
}

export default OnboardTwo