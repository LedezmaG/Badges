import React from 'react'
import './styles/pageLoading.css'
import Loader from './Loader'

function PageLoading() {
    return(
        <div className="PageLoading">
            Loading...
            <Loader/>
        </div>
    )
}

export default PageLoading;