import React, { Component } from 'react'
import styles from './ParkingSpaceStatusCollection.module.css'
import { parkingSpaceStatusCollection } from './parking-config'
import ModuleTitle from '../../common/module-title/ModuleTitle'

export default class ParkingSpaceStatusCollection extends Component {
    render() {
        return (
            <section className={styles['root']} style={{
                backgroundImage: `url(${parkingSpaceStatusCollection.imgUrl})`,
            }}>
                <div className={styles['collection-container']}>
                    <div>
                        <div className={styles['title-container']}>
                            <ModuleTitle title={parkingSpaceStatusCollection.title} isRight={true} isWhite={true} />
                        </div>
                        <div className={styles['collection-img-container']}>
                            <img src={parkingSpaceStatusCollection.icon} className={styles['collection-img']} alt={parkingSpaceStatusCollection.title}/>
                        </div>
                        <div>
                            <div className={styles['features-container']}>
                                {parkingSpaceStatusCollection.features.map((feature, index) => (
                                    <div key={index} className={styles['features-item-container']}>
                                        <img
                                            src={feature.icon}
                                            alt={feature.name}
                                            className={styles['features-icon']}
                                        /> 
                                        <div className={styles['features-name']}> {feature.name}</div> 
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={styles['slogan']}> 
                        {parkingSpaceStatusCollection.slogan} 
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
