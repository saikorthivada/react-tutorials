import React from 'react'
import { useLocation, useParams, useSearchParams } from 'react-router-dom'

function Details() {

    const params = useParams();
    const location = useLocation();
    console.log(location);
    return (
        <div>
            Details - {params?.id} - {location?.state?.name}
        </div>
    )
}

export default Details