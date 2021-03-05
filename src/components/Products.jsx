import React from 'react';
import ProductItem from './ProductItem';
import '../styles/products.css'
/* import { connect } from 'react-redux' */

const Products = () => {

    const products = [
        { name: 'StarTrek The city on the edge of forever', urlImage: 'https://i.ibb.co/DryVsk2/pngwing-3.png' },
        { name: 'Figuras Universo Marvel: muñecos de colección forever', urlImage: 'https://i.ibb.co/LpgJRBy/slider-Img-Principal-472-slider-Img-Principal-363-C1-PNG-584x584-1-n-1552045498608-1552607423615-3.png' },
        { name: 'Figura de colección, Doctor Strange', urlImage: 'https://i.ibb.co/59MFBCv/ef013b5a112e2e50dca00d01ed318952-2.png' },
        { name: 'Marvel camiseta', urlImage: 'https://i.ibb.co/wMbGsnj/a8e57ea86e6006f695335196e0d82120-2.png' },
        { name: 'Marvel hoodie', urlImage: 'https://i.pinimg.com/originals/bf/19/12/bf191248e0e60c2c45d1cc54ace41393.png' },
        { name: 'Marvel colección comic', urlImage: 'https://i.ibb.co/TgDQBTJ/pngegg-6-3.png'},
    ]

    return (
        <section >
            <h2>Products</h2>
            <div className="products-container">
                {
                    products.map((product) => (
                        <ProductItem
                            key={product.uuid}
                            _id={product.uuid}
                            urlImage={product.urlImage}
                            name={product.name}
                        />
                    ))
                }
            </div>
        </section>
    );
}
export default Products;

/*
const mapStateToProps = (state) => ({
    products: state.products
})

const mapDispatchToProps = (dispatch) => ({})


export default connect(mapStateToProps, mapDispatchToProps)(Products); */