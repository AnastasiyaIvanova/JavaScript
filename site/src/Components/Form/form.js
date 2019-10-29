import React from 'react';

export default class Clients extends React.Component {
  constructor() {
    super();
    this.state = {
      name : '',
      email : '',
      title : '',
      comment : ''
    };
  }

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    this.setState({
      [name]: target.value
    });
  }

  render() {
    return (
      <section className="project_need">
				<div className="project_wrapper">
					<h1>Need A Project?</h1>
					<p>Let us know what you're looking for in an agency. We'll take a look and see
if this could be the start of something beautiful.</p>
					<form action="#" name="newform" method="post">
						<div className="form_inputs">
							<input type="text" name = "name" placeholder="Your Name" value={this.state.name} onChange={this.handleChange} />
							<input type="text" name = "email" placeholder="Your Email" value={this.state.email} onChange={this.handleChange}/>
						</div>
						<input className="input_title" name = "title" type="text" placeholder="Your Title" value={this.state.title} onChange={this.handleChange} />
						<textarea name="text" name = "comment" placeholder="Your Comment" value={this.state.comment} onChange={this.handleChange}></textarea>
						<div className="button_block">
							<a href="#">SEND MESSAGE</a>
						</div>
					</form>
				</div>
			</section>
    );
  }
}
