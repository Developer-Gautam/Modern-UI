import React from 'react'
import SummaryBox from '../components/summary-box/SummaryBox'
import { data } from '../constants'



const MyCards = () => {
    return (

        <div className="col-8 col-md-12">
            <div className="row">
                {
                    data.summary.map((item, index) => (
                        <div key={`summary-${index}`} className="col-6 col-md-6 col-sm-12 mb">
                            <SummaryBox item={item} />
                        </div>
                    ))
                }
            </div>
        </div>

    )
}

export default MyCards

