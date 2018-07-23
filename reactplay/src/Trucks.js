import React from 'react';

const Trucks = (props=null) => {
	const Items = (props)=> {
			if(props) {
				let truckmap = props.trucks.map(truck => {
					return (
						<div>
							<div>{truck.applicant}</div>
							<div>{truck.locationdesc}</div>
							<br />
						</div>

					)
				})
				return truckmap
			} else return <div>waiting...</div>

	}

	// console.log('props: ', props);

	return (
		<ul>
			<Items trucks={props.trucks} />
		</ul>
	)
}

export default Trucks;
