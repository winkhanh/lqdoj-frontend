import React, { ReactNode } from 'react';
import { Button, Spinner } from 'react-bootstrap';

import { LoadState } from '../../Global/GlobalFunctions/FetchingActions';
interface StatusButtonProps {
    loadState: number;
    children?: ReactNode
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const StatusButton: React.FC<StatusButtonProps> = ({ loadState, onClick, children }: StatusButtonProps) => {
    if (loadState === LoadState.LOADING) {
        return (
            <Button variant="primary" disabled type="button" block>
                <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                />
            </Button>
        )
    } else {
        return (
            <Button onClick={onClick} variant="primary" type="button" block>
                {children}
            </Button>
        )
    }
};

export default StatusButton;