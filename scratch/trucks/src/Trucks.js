import React from 'react';

const Trucks = ({ trucks }) => {
	if(trucks) {
		return trucks.map(truck => {
			return (<div>
								<div>{truck.applicant}</div>
								<div>{truck.locationdesc}</div>
							</div>)
		})
	} else return <div>Waiting....</div>;
}

export default Trucks;
