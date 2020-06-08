import React, { Component } from 'react';
import { parkingSpaceDetector } from './parking-config';
import styles from './ParkingSpaceDetector.module.css'
import ModuleTitle from '../../common/module-title/ModuleTitle';

class ParkingSpaceDetector extends Component {
    render() {
        return (
            <section>
                <div className={styles['detector-container']}>
                    <div className={styles['title-container']}>
                        <ModuleTitle title={parkingSpaceDetector.title} isRight={true} isWhite={false} />
                    </div>
                    <div className={styles['detector-item']}>
                        {parkingSpaceDetector.features.map((feature, index) => (
                            <div key={index}>
                                <img
                                    src={feature.icon}
                                    alt={feature.name}
                                    className={styles['detector-icon']}
                                />
                                <p className={styles['detector-name']}>{feature.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}

export default ParkingSpaceDetector;