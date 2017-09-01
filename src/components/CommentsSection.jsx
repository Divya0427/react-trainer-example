import React from 'react';
import {css} from 'glamor';

let verticalAlignStyles = css({
	verticalAlign: 'middle'
})
let userStyles = css({
	paddingRight: '20px'
})
let borderBottomStyles = css({
	borderBottom: 'solid 1px lightgray',
	paddingBottom: '10px'
})
let paddingStyles = css({
	padding: '10px'
})


class CommentsSection extends React.Component {
	constructor(props) {
		super(props);
		this.addComment = this._addComment.bind(this);
		this.validateComment = this._validateComment.bind(this);
		this.state = {
			'feedbackComments': props.feedbackComments,
			'shouldUpdateFeedbackSection': true,
			'comment': ''
		}
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log(nextState);
		return nextState.shouldUpdateFeedbackSection ? nextState.shouldUpdateFeedbackSection : false;
		//return true;
	}

	_validateComment() {
		this.setState({
			comment: this.refs.comment.value.trim()
		})		
	}

	_addComment() {
		var reg = new RegExp('^[0-9]+$');

		const { feedbackComments, comment } = this.state;
		let { shouldUpdateFeedbackSection } = this.state;

		const Isstring = (this.state.comment.length && !reg.test(this.state.comment)) ? true : false;

		if(Isstring) {
			feedbackComments.push({
				user: 'Anonymous',
				time: '8/31/2017',
				comment: this.refs.comment.value.trim(),
				avatar: 'https://www.fanspole.com/assets/default_user-856f2487c07862f3089cfcb1528df354.png'
			})			

			this.refs.comment.value = '';
			shouldUpdateFeedbackSection = true;
		} else {
			shouldUpdateFeedbackSection = false;
		}
		this.setState({
			feedbackComments, shouldUpdateFeedbackSection, comment
		})

	}

	render() {
		const renderFeedbackComments = this.state.feedbackComments.map((feedback, index) => {
			return (
				<div key={index} className="col-lg-12" {...paddingStyles}>
					<img className="col-lg-1" src={feedback.avatar} width="30"/>
					<div className="col-lg-7" {...borderBottomStyles}>
						<b {...userStyles}>{feedback.user}</b><span className="text-muted">{feedback.time}</span>
						<div>{feedback.comment}</div>
					</div>
				</div>
			)
		});
		return (
			<div>
				<h3>Comments:</h3>
				<textarea ref="comment" {...verticalAlignStyles} onBlur={this.validateComment} placeholder="Add your comment...." name="textarea" rows="3" cols="50" className="comment"></textarea>
				<button {...verticalAlignStyles} onClick={this.addComment}>Add comment</button>
				{renderFeedbackComments}
			</div>
		)
	}
}

export default CommentsSection;