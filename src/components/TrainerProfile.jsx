import React from 'react';
import { css } from 'glamor';
import CommentsSection from './CommentsSection';

let wrapperStyles = css({
	border: 'solid 1px lightgray',
	padding: '15px'
})

let verticalAlignStyles = css({
	verticalAlign: 'middle'
})

class TrainerProfile extends React.Component {	
	
	componentWillMount() {
		alert("Click ok to see the profile(componentWillMount@Profile)");
	}
	
	componentDidMount() {
		console.log("Profile component has been mounted(componentDidMount@Profile)");
	}

	componentDidUpdate() {
		alert("Your comment has been added!!(componentDidUpdate@Profile)");
		this.refs.comment.value = '';
	}

	componentWillUnmount() {
		alert("Navigating back to home page(componentWillUnmount@Profile)");
	}

	render() {
		const trainerData = this.props.trainerData;
		return (
			<div className="container">
				<div className="row" {...wrapperStyles}>
					<div className="col-lg-12 col-md-12">
						<div className="col-lg-4 col-md-4">
							<img alt="" height="230" src={trainerData.trainerImg} width="230"/>
							<div><b>{trainerData.name}</b></div>
							<div>{trainerData.userName}</div>
							<div>{trainerData.role}</div>
							<div>{trainerData.content}</div>
							<div>Git Hub: {trainerData.githubId}</div>
							<div>Email: {trainerData.mailId}</div>
							<div>Twitter: {trainerData.twitter}</div>
						</div>
						<div className="col-lg-8 col-md-8">							
							<CommentsSection feedbackComments={this.props.trainerData.feedbackComments}/>
						</div>
						<button className="pull-right" onClick={this.props.eventHandler}>&lt;&lt;Go Back</button>
					</div>
				</div>
			</div>
		)
	}
}

export default TrainerProfile;