import React, { Fragment } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';

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
                                onClick={() => navigate(`${obj.id}`)}>
                                {obj.label}
                            </button>
                        )
                    })
                }
                <Outlet />
            </Fragment>
        </div>
    )
}

export default Products