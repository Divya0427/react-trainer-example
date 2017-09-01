import React from 'react';
import Trainer from './Trainer';

const trainerFeedBackData = [{
								trainerName: 'Luke hoban',
								email: 'mailto:Luke hoban@benefitfocus.com?subject=Hello Note&body=',
								notificationLink: 'Notify Luke Hoban',
								profile: {
									name: 'Luke hoban(lhoban)',
									mailId: 'Lukehoban@gmail.com',
									githubId: 'lukehoban',
									trainerImg: 'https://avatars2.githubusercontent.com/u/223467?v=4&amp;s=460',
									twitter: '@lukehoban',
									role: 'Web Developer.',
									content: 'I have been working in the IT industry for the last 7 years',
									feedbackComments: [{
										user: 'Bhargavi',
										avatar: 'https://images.spot.im/image/upload/q_70,fl_lossy,dpr_3,h_44,w_44,c_thumb,g_face/v200/p/u/i3bvtk1jyaarfem7bwve',
										time: '04/04/2014',
										comment: 'Your articles are so informative and easy to understand. Thank you.'
									},
									{
										user: 'Anonymous',
										avatar: 'https://c.disquscdn.com/uploads/users/11150/5864/avatar92.jpg?1490188429',
										time: '02/02/2015',
										comment: 'I generally follow your blogs because I like the way you explain the things. Thank you.'
									}]
								}
							  }, 
							  {
							  	trainerName: 'Bucky Roberts',
								email: 'mailto:BuckyRoberts@benefitfocus.com?subject=Hello Note&body=',
								notificationLink: 'Notify Bucky Roberts',
								profile: {
									name: 'Bucky Roberts(bRoberts)',
									mailId: 'buckyroberts@gmail.com',
									githubId: 'buckyroberts',
									twitter: '@buckyroberts',
									role: 'Frontend Developer.',
									content: 'I have been working in the IT industry for the last 5 years',
									trainerImg: 'https://avatars0.githubusercontent.com/u/11676106?v=4&s=460',
									feedbackComments: [{
										user: 'Divya',
										avatar: 'https://c.disquscdn.com/uploads/users/11150/5864/avatar92.jpg?1490188429',
										time: '07/05/2016',
										comment: 'I love your react-boilerplate in git hub and also appreciate your tremendous effort in making react to understand in such a way.'
									},
									{
										user: 'Anonymous',
										avatar: 'https://images.spot.im/image/upload/q_70,fl_lossy,dpr_3,h_44,w_44,c_thumb,g_face/v200/p/u/i3bvtk1jyaarfem7bwve',
										time: '11/11/2015',
										comment: 'We like the way you explain the things.Great that it helps newcomers to get up and started!'
									}]
								}
							 },
							 {
							  	trainerName: 'Vinay Vemparla',
								email: 'mailto:vinay.vemparla@benefitfocus.com?subject=Hello Note&body=',
								notificationLink: 'Notify VinayVemparla',
								profile: {
									name: 'Vinay Vemparla(bRoberts)',
									mailId: 'vinay.vemparla@gmail.com',
									githubId: 'vinayuttam',
									twitter: '@vinayuttam',
									role: 'Frontend Developer.',
									content: 'I have been working in the IT industry for the last 5 years',
									trainerImg: 'https://avatars0.githubusercontent.com/u/11676106?v=4&s=460',
									feedbackComments: [{
										user: 'Divya',
										avatar: 'https://c.disquscdn.com/uploads/users/11150/5864/avatar92.jpg?1490188429',
										time: '07/05/2016',
										comment: 'I love your react-boilerplate in git hub and also appreciate your tremendous effort in making react to understand in such a way.'
									},
									{
										user: 'Anonymous',
										avatar: 'https://images.spot.im/image/upload/q_70,fl_lossy,dpr_3,h_44,w_44,c_thumb,g_face/v200/p/u/i3bvtk1jyaarfem7bwve',
										time: '11/11/2015',
										comment: 'We like the way you explain the things.Great that it helps newcomers to get up and started!'
									}]
								}
							 },
							 {
							  	trainerName: 'Praveen Tripathi',
								email: 'mailto:praveen.tripathi@benefitfocus.com?subject=Hello Note&body=',
								notificationLink: 'Notify PraveenTripathi',
								profile: {
									name: 'Praveen Tripathi(ptripathi)',
									mailId: 'praveen.tripathi@gmail.com',
									githubId: 'ptripathi',
									twitter: '@ptripathi',
									role: 'Frontend Developer.',
									content: 'I have been working in the IT industry for the last 5 years',
									trainerImg: 'https://avatars0.githubusercontent.com/u/11676106?v=4&s=460',
									feedbackComments: [{
										user: 'Divya',
										avatar: 'https://c.disquscdn.com/uploads/users/11150/5864/avatar92.jpg?1490188429',
										time: '07/05/2016',
										comment: 'I love your react-boilerplate in git hub and also appreciate your tremendous effort in making react to understand in such a way.'
									},
									{
										user: 'Anonymous',
										avatar: 'https://images.spot.im/image/upload/q_70,fl_lossy,dpr_3,h_44,w_44,c_thumb,g_face/v200/p/u/i3bvtk1jyaarfem7bwve',
										time: '11/11/2015',
										comment: 'We like the way you explain the things.Great that it helps newcomers to get up and started!'
									}]
								}
							 }];

const renderTrainerFeedbackComp = trainerFeedBackData.map((trainer, index) => {
	return <Trainer key={index} index={index} {...trainer} />
})

const Container = () => {
	return (
		<div className="page-container">
			{renderTrainerFeedbackComp}
		</div>
		)
}

export default Container;