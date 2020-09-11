import React, { Component } from 'react'
import styles from './MerckuFeature.module.css'
import { merckuFeatures } from './router-config'
import ModuleTitle from '../../common/module-title/ModuleTitle'

export default class MerckuFeature extends Component {
    render() {
        return (
            <section className={styles['root']}>
                <div className={styles['flex-container']}>
                    <div className={styles['schematic-container']}>
                        <img src={merckuFeatures.imgUrl} alt='' className={styles['schematic-img']} />
                    </div>
                    <div className={styles['summary-container']}>
                        <div className={styles['summary']}>{merckuFeatures.summary}</div>
                        <div className={styles['title-container']}>
                            <ModuleTitle title={merckuFeatures.title} isRight={true} />
                        </div>
                        <div>
                            <div className={styles['features-item-container']}>
                                {merckuFeatures.features.map((fea, index) => (
                                    <div className={styles['features-item']}>
                                        <img
                                            src={fea.img}
                                            alt={fea.name}
                                            key={index}
                                            className={styles['features-icon']}
                                        />
                                        <div className={styles['features-name']}>{fea.name}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
