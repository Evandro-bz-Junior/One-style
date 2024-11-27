
import productsData from '../../data/productsData';
import ProductPagination from '../ProductPagination/ProductPagination';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Products.scss'

function Products() {

    const navigate = useNavigate();

    const [currentPage, setCurrentPage] = useState(1);
    const [selectedType, setSelectedType] = useState('');
    const [isRelease, setIsRelease] = useState(false);
    const [productsPerPage, setProductsPerPage] = useState(8);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;



    const filteredProducts = productsData.filter((product) => {

        if (isRelease) {
            return product.isRelease === true;
        }
        if (selectedType) {
            return product.type.includes(selectedType);
        }

        return true;
    });

    const currentProducts = filteredProducts.slice().reverse().slice(indexOfFirstProduct, indexOfLastProduct);


    const handlePageChange = (event, value) => {
        setCurrentPage(value);
        const productsSection = document.getElementById('products');
        if (productsSection) {
            productsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };


    const handleTypeChange = (type) => {
        setCurrentPage(1);
        setSelectedType(type);
        setIsRelease(false);
    };

    const handleReleaseChange = () => {
        setCurrentPage(1);
        setIsRelease(true);
        setSelectedType('');
    };

    const handleProductsPerPageChange = (event) => {
        setProductsPerPage(Number(event.target.value));
        setCurrentPage(1);
    };

    const productsRef = useRef(null);

    /* useEffect(() => {
        if (productsRef.current) {
            productsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [currentPage]); */

    return (
        <div className='products' ref={productsRef}>

            <div className="products-title">
                <hr />
                <h1>Produtos</h1>
                <hr />
            </div>

            <div className="product-types-area">
                <span>Explore nossa coleção e descubra peças que combinam estilo e qualidade.</span>
                <div className='type-select'>
                    <ul className='product-types'>

                        <li className="product-type" onClick={() => handleTypeChange('')}>Todos</li>
                        <li className="product-type" onClick={() => handleTypeChange('Camiseta')}>Camisetas</li>
                        <li className="product-type" onClick={() => handleTypeChange('Blusa')}>Blusas</li>
                        <li className="product-type" onClick={() => handleTypeChange('Vestido')}>Vestidos</li>
                        <li className="product-type" onClick={() => handleTypeChange('Calça')}>Calças</li>
                        <li className="product-type" onClick={() => handleTypeChange('Macacão')}>Macacão</li>
                        <li className="product-type" onClick={handleReleaseChange}>Lançamento</li>

                    </ul>
                    <div className="products-per-page">
                        <label htmlFor="products-select">Produtos por página: </label>
                        <select id="products-select" value={productsPerPage} onChange={handleProductsPerPageChange}>
                            <option value={8}>8</option>
                            <option value={12}>12</option>
                            <option value={16}>16</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="products-items">

                {currentProducts.length === 0 ? (
                    <p className='not-product'>Nenhum produto encontrado para esta categoria.</p>
                ) : (
                    currentProducts.map((product) => (
                        <div className="product-item" key={product.id} onClick={() => {
                            localStorage.setItem('selectedProduct', JSON.stringify(product));
                            navigate(`/product/${product.id}`);
                        }}>
                            <img src={product.image[0]} alt={product.title} />
                            <div className="product-info">
                                <h4 className="product-title">{product.title}</h4>
                                <div className="product-payment">
                                    <span>{product.price}</span> <span>{product.payment}</span>
                                </div>
                            </div>
                        </div>
                    ))
                )}


                {/* <div className="product-item">

                    <img src={productImg} alt="productImg" />

                    <div className="product-info">
                        <h4 className="product-title">
                            Macacão Lara</h4>

                        <span>R$ 184,90 3x sem juros </span>

                    </div>

                </div>  */}

            </div>

            {currentProducts.length > 0 && (
                <ProductPagination
                    totalProducts={filteredProducts.length}
                    productsPerPage={productsPerPage}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                />
            )}


        </div>
    );
}

export default Products;