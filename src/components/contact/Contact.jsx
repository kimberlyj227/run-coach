import React, { useState } from 'react';
import { Avatar, Box, Button, Divider, Grid, Stack, TextField, Typography } from '@mui/material';

import { IconMail } from '@tabler/icons-react';
import emailjs from 'emailjs-com';
import * as yup from 'yup';
import { useFormik } from 'formik';
import ReCAPTCHA from 'react-google-recaptcha';

import { CustomButton } from '../CustomButton';

const headerStyles = {
	'::after': {
		position: 'absolute',
		content: '""',
		background: 'linear-gradient(to right, #f4ac4e 0%, #ffcb5d 100%)',
		height: '4px',
		width: '60px'
		// marginLeft: '-30px',
		// left: ' 50%'
	}
};

const initialState = {
	name: '',
	email: '',
	message: ''
	// recaptcha: ''
};

const validationSchema = yup.object({
	email: yup.string().email('Enter a valid email').required('Email is required'),
	name: yup.string().required('Name is required'),
	message: yup.string().required('Message is required')
	// recaptcha: yup.string().required()
});

export const Contact = (props) => {
	const formik = useFormik({
		initialValues: initialState,
		validationSchema,
		onSubmit: (values) => {
			sendEmail(values);
		}
	});

	//6LcH8CMqAAAAAEDKKrzRKBdNdjFQwkX6kgepCKq1 - site
	//6LcH8CMqAAAAAPT-d1Zcsn1dQnaBoJQzvG3FsrV3 - secret

	const { handleSubmit, resetForm, setFieldValue, errors, touched } = formik;

	const sendEmail = async (values) => {
		console.log({ values });
		const params = {
			from_name: values.name,
			to_name: 'Kimberly',
			name: values.name,
			message: values.message,
			reply_to: values.email
		};

		await emailjs.send('service_4ygjl9w', 'template_r78933j', params, 'JiniA2o8O6XLkw1FL').then(
			(result) => {
				console.log(result.text);
				resetForm();
			},
			(error) => {
				console.log(error.text);
			}
		);
	};

	return (
		<Box id='Contact' sx={{ background: '#f6f6f6', p: 3 }}>
			<Grid container spacing={5}>
				<Grid item container xs={12} md={7}>
					<Grid item xs={12} sx={headerStyles} mb={5}>
						<Typography variant='h3'>Begin Here </Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant='body1'>
							Don't know where to start? Connect with me to discuss your training!
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Divider sx={{ m: 3 }} />
					</Grid>
					<Grid item container>
						<form onSubmit={formik.handleSubmit}>
							<Grid container spacing={3}>
								<Grid item xs={12} md={6}>
									<TextField
										fullWidth
										id='name'
										name='name'
										label='Name'
										value={formik.values.name}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										error={formik.touched.name && Boolean(formik.errors.name)}
										helperText={formik.touched.name && formik.errors.name}
									/>
								</Grid>
								<Grid item xs={12} md={6}>
									<TextField
										fullWidth
										id='email'
										name='email'
										label='Email'
										type='email'
										value={formik.values.email}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										error={formik.touched.email && Boolean(formik.errors.email)}
										helperText={formik.touched.email && formik.errors.email}
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										fullWidth
										multiline
										rows={5}
										id='message'
										name='message'
										label='Message'
										type='message'
										value={formik.values.message}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										error={
											formik.touched.message && Boolean(formik.errors.message)
										}
										helperText={formik.touched.message && formik.errors.message}
									/>
								</Grid>
								{/* <Grid item xs={12} md={6}>
									<ReCAPTCHA
										sitekey={process.env.REACT_APP_RECAPTCHA_SITE}
										onChange={(response) => {
											setFieldValue('recaptcha', response);
										}}
									/>
									{errors.recaptcha && touched.recaptcha && (
										<p>{errors.recaptcha}</p>
									)}
								</Grid> */}
								<Grid item xs={12} md={6}>
									<Stack direction='row' justifyContent='flex-end'>
										<CustomButton
											label={'Send Message'}
											onClick={handleSubmit}
										/>
									</Stack>
								</Grid>
							</Grid>
						</form>
					</Grid>
				</Grid>
				{/* <Grid item container xs={12} md={4}>
					<Grid item xs={12}>
						<Typography variant='h5'>Contact Info:</Typography>
					</Grid>
					<Grid item xs={12}>
						<Stack direction={'row'} spacing={2}>
							<IconMail />
							<Typography variant='body1'>{props.data?.email}</Typography>
						</Stack>
					</Grid>
				</Grid> */}
			</Grid>
		</Box>
		// <div>
		//   <div id="contact">
		//     <div className="container">
		//       <div className="col-md-8">
		//         <div className="row">
		//           <div className="section-title">
		//             <h2>Get In Touch</h2>
		//             <p>
		//               Please fill out the form below to send us an email and we will
		//               get back to you as soon as possible.
		//             </p>
		//           </div>
		//           <form name="sentMessage" validate onSubmit={handleSubmit}>
		//             <div className="row">
		//               <div className="col-md-6">
		//                 <div className="form-group">
		//                   <input
		//                     type="text"
		//                     id="name"
		//                     name="name"
		//                     className="form-control"
		//                     placeholder="Name"
		//                     required
		//                     onChange={handleChange}
		//                   />
		//                   <p className="help-block text-danger"></p>
		//                 </div>
		//               </div>
		//               <div className="col-md-6">
		//                 <div className="form-group">
		//                   <input
		//                     type="email"
		//                     id="email"
		//                     name="email"
		//                     className="form-control"
		//                     placeholder="Email"
		//                     required
		//                     onChange={handleChange}
		//                   />
		//                   <p className="help-block text-danger"></p>
		//                 </div>
		//               </div>
		//             </div>
		//             <div className="form-group">
		//               <textarea
		//                 name="message"
		//                 id="message"
		//                 className="form-control"
		//                 rows="4"
		//                 placeholder="Message"
		//                 required
		//                 onChange={handleChange}
		//               ></textarea>
		//               <p className="help-block text-danger"></p>
		//             </div>
		//             <div id="success"></div>
		//             <button type="submit" className="btn btn-custom btn-lg">
		//               Send Message
		//             </button>
		//           </form>
		//         </div>
		//       </div>
		//       <div className="col-md-3 col-md-offset-1 contact-info">
		//         <div className="contact-item">
		//           <h3>Contact Info</h3>
		//           <p>
		//             <span>
		//               <i className="fa fa-map-marker"></i> Address
		//             </span>
		//             {props.data ? props.data.address : "loading"}
		//           </p>
		//         </div>
		//         <div className="contact-item">
		//           <p>
		//             <span>
		//               <i className="fa fa-phone"></i> Phone
		//             </span>{" "}
		//             {props.data ? props.data.phone : "loading"}
		//           </p>
		//         </div>
		//         <div className="contact-item">
		//           <p>
		//             <span>
		//               <i className="fa fa-envelope-o"></i> Email
		//             </span>{" "}
		//             {props.data ? props.data.email : "loading"}
		//           </p>
		//         </div>
		//       </div>
		//       <div className="col-md-12">
		//         <div className="row">
		//           <div className="social">
		//             <ul>
		//               <li>
		//                 <a href={props.data ? props.data.facebook : "/"}>
		//                   <i className="fa fa-facebook"></i>
		//                 </a>
		//               </li>
		//               <li>
		//                 <a href={props.data ? props.data.twitter : "/"}>
		//                   <i className="fa fa-twitter"></i>
		//                 </a>
		//               </li>
		//               <li>
		//                 <a href={props.data ? props.data.youtube : "/"}>
		//                   <i className="fa fa-youtube"></i>
		//                 </a>
		//               </li>
		//             </ul>
		//           </div>
		//         </div>
		//       </div>
		//     </div>
		//   </div>
		//   <div id="footer">
		//     <div className="container text-center">
		//       <p>
		//         &copy; 2023 Issaaf Kattan React Land Page Template. Design by{" "}
		//         <a href="http://www.templatewire.com" rel="nofollow">
		//           TemplateWire
		//         </a>
		//       </p>
		//     </div>
		//   </div>
		// </div>
	);
};
