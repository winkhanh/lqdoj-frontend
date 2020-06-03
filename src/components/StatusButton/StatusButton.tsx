import React, { } from 'react';
import { Button, Spinner } from 'react-bootstrap';

import { LoadState } from '../../Global/GlobalFunctions/FetchingActions';
interface StatusButtonProps {
    loadState: number;
    btnText: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const StatusButton: React.FC<StatusButtonProps> = ({ loadState, btnText, onClick }: StatusButtonProps) => {
    if (loadState === LoadState.LOADING) {
        return (
            <Button variant="primary" disabled type="button" block>
                <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                />
            </Button>
        )
    } else {
        return (
            <Button onClick={onClick} variant="primary" type="button" block>
                {btnText}
            </Button>
        )
    }
};

export default StatusButton;