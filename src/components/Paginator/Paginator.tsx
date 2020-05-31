import React, { useRef, useState } from 'react';
import { Button, FormControl, InputGroup, Overlay, PageItem, Pagination, Tooltip } from 'react-bootstrap';

interface PaginatorProps {
    page: number,
    setPage: Function,
    totalPages: number,
    id: string
}

const GotoBox: React.FC<PaginatorProps> = (props: PaginatorProps) => {
    const gotoButton = useRef(null);
    const [show, setShow] = useState(false);

    const gotoHandler = () => {
        let element: HTMLInputElement = (document.getElementById(`tooltip-input-${props.id}`)) as HTMLInputElement;
        if (!element) return;
        let val: number = parseInt(element.value);

        if (!isNaN(val) && val > 0 && val <= props.totalPages) props.setPage(val); else
            props.setPage(1);
    }

    return (
        <>
            <Button variant="light" ref={gotoButton} onClick={() => setShow(!show)}>
                Go to
            </Button>
            <Overlay
                target={gotoButton.current}
                show={show}
                placement="right"
                transition={false}
            >
                <Tooltip id="tooltip">
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text>page :</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl type="number" id={`tooltip-input-${props.id}`} />
                        <Button onClick={gotoHandler} variant="secondary"> Go!!!</Button>
                    </InputGroup>
                </Tooltip>
            </Overlay>
        </>
    );
}

const Paginator: React.FC<PaginatorProps> = (props: PaginatorProps) => {
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
                <GotoBox page={props.page}
                    setPage={props.setPage}
                    totalPages={props.totalPages}
                    id={props.id} />
            </Pagination>
        )
    } else {
        return (<React.Fragment />)
    }
}

export default Paginator;