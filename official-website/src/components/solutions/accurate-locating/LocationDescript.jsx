import React, { Component } from 'react';
import styles from "./LocationDescript.module.css";
import { scenarioDescript } from './locating-config';


class LocationDescript extends Component {
    render() {
        return (
            <section className={styles['root']}>
                <div className={styles['flex-container']}>
                    <div>
                        <img className={styles['descript-img']} src={scenarioDescript.img} alt="" />
                    </div>
                    <div className={styles['desc-container']}>
                        {scenarioDescript.descripts.map((desc, index) => (
                            <div key={index} className={styles['desc-item']}>
                                {desc}
                            </div> 
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}

export default LocationDescript;