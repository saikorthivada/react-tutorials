import React, { Fragment } from 'react'
import { useNavigate } from 'react-router-dom';
import ProductRoutes from './ProductRoutes';

function Products() {
    const navigate = useNavigate();
    const products = [
        {
            id: 1,
            label: 'Choclate'
        },
        {
            id: 2,
            label: 'Milk'
        },
        {
            id: 3,
            label: 'Ghee'
        }
    ];
    return (
        <div>
            <Fragment>
                {
                    products.map((obj) => {
                        return (
                            <button key={obj.id}
                                onClick={() => navigate(`${obj.id}`, {
                                    state: {
                                        name: obj.label
                                    }
                                })}>
                                {obj.label}
                            </button>
                        )
                    })
                }
              <ProductRoutes />
            </Fragment>
        </div>
    )
}

export default Products