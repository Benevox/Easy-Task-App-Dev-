import React from 'react'
import Onboard from '../../components/common/Onboard'
import cashpay from '../../assets/images/cashpay.png'

function OnboardThree() {
    return (
        <Onboard headText="Job is Completed" bodyText="Payment is secured with third party payment platform, relax and job is done," illustrator={cashpay} proceed={false} progress="four" />
    )
}

export default OnboardThree