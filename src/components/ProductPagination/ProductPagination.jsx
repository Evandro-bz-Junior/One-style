
import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import './ProductPagination.scss'

const ProductPagination = ({ totalProducts, productsPerPage, currentPage, onPageChange }) => {
    const pageCount = Math.ceil(totalProducts / productsPerPage);  

    return (
        <Stack spacing={2}>
            <Pagination className='custom-pagination'
                count={pageCount}
                page={currentPage}
                onChange={onPageChange}
                shape="rounded"                  
            />
        </Stack>
    );
};

export default ProductPagination;
