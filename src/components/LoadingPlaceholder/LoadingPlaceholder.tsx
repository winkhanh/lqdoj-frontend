import React from 'react';
import { Spinner } from 'react-bootstrap';
const LoadingPlaceholder: React.FC = () => {
	return (
		<div className="d-flex justify-content-center">
			<Spinner animation="border" />
		</div>
	)
};
export default LoadingPlaceholder;