import React from 'react';
import './Paginator.scss';
import { Pagination, PageItem } from 'react-bootstrap';

interface PaginatorProps {
    page: number,
    setPage: Function,
    totalPages: number
}

const Paginator: React.FC<PaginatorProps> = (props: PaginatorProps) => {
    if (props.totalPages > 0) {
        return (
            <Pagination>
                {
                    Array.from(Array(props.totalPages).keys()).map((number, idx) => {
                        return (
                            <PageItem 
                                key={idx}
                                active={number + 1 === props.page}
                                onClick={() => props.setPage(number + 1)}
                            >
                                {number + 1}
                            </PageItem>
                        )
                    })
                }
            </Pagination>
        )
    } else {
        return (<React.Fragment/>)
    }
}

export default Paginator;