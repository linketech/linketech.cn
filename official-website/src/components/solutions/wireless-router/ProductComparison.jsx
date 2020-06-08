import React, { Component } from 'react'
import styles from './ProductComparison.module.css'
import ModuleTitle from '../../common/module-title/ModuleTitle'
import { productComparison } from './router-config'

export default class ProductComparison extends Component {
    render() {
        return (
            <section className={styles['root']} style={{
				backgroundImage: `url(${productComparison.background})`,
			}}>
                <div className={styles['product-container']}>
                    <ModuleTitle title={productComparison.title} isWhite={true} />
                    <div className={styles['table-container']}>
                        <img className={styles['table']} src={productComparison.table} />
                    </div>
                    <div className={styles['slogan']}>
                        {productComparison.slogan}
                    </div>
                </div>
            </section>
        )
    }
}
