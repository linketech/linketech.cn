import React, { Component } from 'react'
import styles from './MerckuHonor.module.css'
import ModuleTitle from '../../common/module-title/ModuleTitle'
import { merckuHonor } from './router-config'

export default class MerckuHonor extends Component {
    render() {
        return (
            <section>
                <div className={styles['awards-container']}>
                    <ModuleTitle title={merckuHonor.title} isRight={true} />
                    <div className={styles['flex-container']}>
                        {merckuHonor.awards.map((award, index) => (
                            <div key={index}>
                                <img
                                    src={award}
                                    alt=''
                                    className={styles['award-icon']}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        )
    }
}
