import React from 'react';
import './Paginator.scss';
import { Pagination, PageItem, FormControl, OverlayTrigger, InputGroup, Button, Tooltip } from 'react-bootstrap';

interface PaginatorProps {
    page: number,
    setPage: Function,
    totalPages: number,
    id: string
}

const Paginator: React.FC<PaginatorProps> = (props: PaginatorProps) => {
    const handleClick = () => {
        let element: HTMLInputElement = (document.getElementById(`tooltip-input-${props.id}`)) as HTMLInputElement;
        if (!element) return;
        let val: number = parseInt(element.value);

        if (!isNaN(val) && val > 0 && val <= props.totalPages) props.setPage(val); else
            props.setPage(1);
    }
    if (props.totalPages > 0) {
        return (
            <Pagination>
                {
                    Array.from(Array(props.totalPages).keys()).map((number, idx) => {
                        if ((number > 0 && number < props.page - 2) || (number > props.page && number < props.totalPages - 1)) {
                            if (number === 1 || number === (props.totalPages - 2))
                                return (<Pagination.Ellipsis key={idx} />)
                            else
                                return (<React.Fragment key={idx} />)
                        } else
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
                <OverlayTrigger
                    overlay={
                        <Tooltip id="tooltip">
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text>Go to Page :</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl type="number" id={`tooltip-input-${props.id}`} />
                                <Button onClick={() => { handleClick(); }} variant="secondary"> Go!!!</Button>
                            </InputGroup>
                        </Tooltip>
                    }
                    trigger="click"
                    placement="top"
                >
                    <Pagination.Item>Goto</Pagination.Item>
                </OverlayTrigger>

            </Pagination>
        )
    } else {
        return (<React.Fragment />)
    }
}

export default Paginator;