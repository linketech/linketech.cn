import React, { Component } from 'react'
import styles from './UUFeatures.module.css'
import ModuleTitle from '../../common/module-title/ModuleTitle'
import { uuBoxFeatures } from './uu-config'

export default class UUFeatures extends Component {
    render() {
        return (
            <section className={styles['root']}>
                <div className={styles['flex-container']}>
                    <div className={styles['schematic-container']}>
                        <img src={uuBoxFeatures.imgUrl} alt='' className={styles['schematic-img']} />
                    </div>
                    <div className={styles['summary-container']}>
                        <div className={styles['summary']}>{uuBoxFeatures.summary}</div>
                        <div className={styles['title-container']}>
                            <ModuleTitle title={uuBoxFeatures.title} isRight={true} />
                        </div>
                        <div>
                            <div className={styles['features-item-container']}>
                                {uuBoxFeatures.features.map((img, index) => (
                                        <img
                                            src={img}
                                            alt=''
                                            key={index}
                                            className={styles['features-icon']}
                                        />
                                ))}
                            </div>
                        </div>
                        <div className={styles['features-slogan']}>{uuBoxFeatures.slogan}</div>
                    </div>
                </div>
            </section>
        )
    }
}
