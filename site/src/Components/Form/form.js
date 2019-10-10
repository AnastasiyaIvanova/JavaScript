import React from 'react';

export default class Clients extends React.Component {
  render() {
    return (
      <section class="project_need">
				<div class="project_wrapper">
					<h1>Need A Project?</h1>
					<p>Let us know what you're looking for in an agency. We'll take a look and see
if this could be the start of something beautiful.</p>
					<form action="#" name="newform" method="post">
						<div class="form_inputs">
							<input type="text" placeholder="Your Name" />
							<input type="text" placeholder="Your Email" />
						</div>
						<input class="input_title" type="text" placeholder="Your Title" />
						<textarea name="text" placeholder="Your Comment"></textarea>
						<div class="button_block">
							<a href="#">SEND MESSAGE</a>
						</div>
					</form>
				</div>
			</section>
    );
  }
}
