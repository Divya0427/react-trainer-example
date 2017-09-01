import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import $ from 'jquery';
import TrainerProfile from './TrainerProfile';

let trainerStyles = css({
	verticalAlign: 'middle'
})
let activeAnchorStyles = css({
	fontWeight: 'bold'
})
let textAreaStyles = css({
	marginLeft: '20px',
	marginRight: '20px'
})
let feedbackContainerStyles = css({
	padding: '20px'
})
let disabledAnchorStyles = css({
	pointerEvents: 'none',
    opacity: '0.5'
})

class Trainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			enableLink: false,
			email: props.email,
			showTrainerProfile: false,
			trainerData: ''
		}
		this.showTrainerProfile = this._showTrainerProfile.bind(this);
		this.changeNotifyLinkState = this._changeNotifyLinkState.bind(this);
		this.getComment = this._getComment.bind(this);
		this.goBack = this._goBack.bind(this);
	}
	_showTrainerProfile(e, index) {
		this._changeNotifyLinkState(e);
		e.preventDefault();
		this.setState({
			showTrainerProfile: true
		})
		//$(ReactDOM.findDOMNode(this.refs.trainerFeedbackSection)).hide();
	}

	_changeNotifyLinkState(e) {
		var note = e.target && e.target.value;

		let enableLink = note ? true : false;
		this.setState({
			enableLink			
		})
	}

	_getComment(e) {
		this._changeNotifyLinkState(e);
		var comment = e.target && e.target.value;
		this.setState({
			email: this.props.email+comment
		})
	}

	_goBack() {
		this.setState({
			showTrainerProfile: false
		})
	}	

	render() {
		let anchorStyles = this.state.enableLink ? activeAnchorStyles : disabledAnchorStyles;
		return (
			<div className="wrapper" ref="trainerFeedbackSection">
				{this.state.showTrainerProfile ? 
					<TrainerProfile trainerData={this.props.profile} eventHandler={this.goBack}/>
					: <div className="feedback-container" {...feedbackContainerStyles}>
						<a href="#" {...trainerStyles} onClick={() => this.showTrainerProfile(event, this.props.index)}>{this.props.trainerName}</a>
						<textarea {...trainerStyles} {...textAreaStyles} onKeyUp={this.changeNotifyLinkState} onBlur={this.getComment} placeholder="Send a note to trainer.." name="textarea" rows="3" cols="50" className="feedback"></textarea>
						<a {...trainerStyles} {...anchorStyles} href={this.state.email}>{this.props.notificationLink}</a>
					</div>
				}
			</div>
			)
	}
}

Trainer.propTypes = {
	index: PropTypes.number,
	trainerName: PropTypes.string,
	email: PropTypes.string,
	notificationLink: PropTypes.string
}

Trainer.defaultProps = {
	index: 0,
	trainerName: "No Trainer"
}

export default Trainer;