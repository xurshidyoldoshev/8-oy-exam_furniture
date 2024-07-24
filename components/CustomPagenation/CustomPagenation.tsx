import React from 'react';
import type { PaginationProps } from 'antd';
import { Pagination } from 'antd';

// itemRender funksiyasini alohida funksiya sifatida yozish
const customItemRender: PaginationProps['itemRender'] = (_, type, originalElement) => {
    if (type === 'prev') {
        return <a>Previous</a>;
    }
    if (type === 'next') {
        return <a>Next</a>;
    }
    return originalElement;
};

export const CustomPagenation: React.FC = () => <Pagination total={30} itemRender={customItemRender} />;

