import React, { Component } from 'react'
import { uuBanner } from '../components/solutions/uu/uu-config'
import Banner from '../components/Banner'
import UUFeatures from '../components/solutions/uu/UUFeatures'
import UUFeatureList from '../components/solutions/uu/UUFeatureList'

export default class UUBox extends Component {
    render() {
        return (
            <main>
                <Banner title={uuBanner.title} imgUrl={uuBanner.imgUrl}/>  
                <UUFeatures />
                <UUFeatureList />
            </main>
        )
    }
}
