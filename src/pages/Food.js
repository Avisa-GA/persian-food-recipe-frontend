import React from 'react';
import { Link } from 'react-router-dom';

export default function Food({ food, handleDelete, URL })
{
	return (
		<div style={{ marginLeft: "30%" }} className="row">
			<div className="col s12 m6 m7">
				<div className="card medium">
					<div className="card-image">
						<img
							src={food.img}
							alt={food.title}
						/>

						<button style={{ marginBottom: "10%", marginLeft: "10%" }} className="btn-floating halfway-fab waves-effect waves-light red" onClick={() => handleDelete(food.id)}><i className="material-icons">delete</i>
						</button>
					</div>
					<div className="card-content">
						<span style={{ color: "#00796b", marginRight: "30%", fontSize: "14px", textAlign: "left" }} className="card-title">
							{food.title}
						</span>
					</div>
					<div className="card-action">
						<Link to={`/${food.id}`}>Show More</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
