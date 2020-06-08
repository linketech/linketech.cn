import React, { Component } from 'react'
import styles from './MerckuSignal.module.css'
import { merckuSignal } from './router-config'
import ModuleTitle from '../../common/module-title/ModuleTitle'

export default class MerckuSignal extends Component {
    render() {
        return (
            <section>
                <div className={styles['flex-container']}>
                    <div className={styles['image-container']}>
                        <img className={styles['product-image']} src={merckuSignal.productImage} alt="" />
                    </div>
                    <div className={styles['content-container']}>
                        <ModuleTitle title={merckuSignal.title} isRight={true} />
                        <div className={styles['content']}>{merckuSignal.desc}</div>
                    </div>
                </div>
            </section>
        )
    }
}
