import React from "react";
import "./AboutUs.css";

function AboutUsPage(props) {
	props.getLocation("about_us");

	return (
		<div className="abscontent absgrid">
			<div className="abscol1">
				<div className="absp">
					<text>The Pizza Pizza Mission</text>
					<p>
						Dimo's exists as a for-profit hospitality organization that champions unity, development and justice for our guests, our team and our
						communities in order to lead the charge in creating a positive, long-lasting impact.
					</p>
				</div>

				<div className="absp">
					<text>The Dimo's Manifesto</text>
					<p>
						We see pizza as our crispy, chewy, edible passion – a platform on which we can imagine all our culinary ambitions.
						<br />
						And we believe that our pizza can only be as relevant, radical and creative as the people who make it, support it and love it.
						<br />
						As a people-centric company, every decision we make comes from our employees and stakeholders. We believe that our values are the DNA of
						our company because they are the DNA of our employees.
						<br />
						We hire our staff based on their alignment with these Core Values and a passion for community engagement.
						<br />
						As a result, though we operate as a for-profit entity, we utilize tenets from not-for-profit businesses in our operations by combining
						profit maximization with a focus on societal improvement.
						<br />
						Specifically, we have three causes that we have identified based on the needs of our city as well as the collective interests of our
						stakeholders, which we call our Purposeful Passions.
						<br />
						These three causes are education, the arts and bicycle advocacy.
						<br />
						As our profits increase and our business expands, we are able to allocate more funds towards programming and partnerships that advocate
						for these causes at a hyperlocal level
						<br />
						This commitment to Hyperlocal Community Engagement ensures that we can integrate our brick and mortar storefronts into each neighborhood
						where they exist and better understand the history, people and changes that have shaped each locale.
						<br />
						This approach allows us to connect more authentically with our customers, even as we continue to grow within the city as a whole. As a
						result, we can build long-term loyalty and a workforce that is aware and involved in our communities.
						<br />
						Another way we judge our success is based on the Triple Bottom Line, measuring our impact on the planet and achievements of our people in
						conjunction with the healthiness of our profits.
						<br />
						The doctrines of Open Book Management help employees to understand this measure of success by using transparency and teaching to empower
						our employees to make financially intelligent decisions as stakeholders in our business.
						<br />
						And this model goes hand in hand with another core philosophy, Servant Leadership, which is a style of management focused on teaching,
						listening, awareness, foresight and conceptua lization. In this manner, we create an environment where our leaders seek to develop skills
						and harness strengths in employees, and we thereby attract employees who want to grow with the company. From day one, we allow our
						employees to play a role in creating a work environment that caters to their style of learning, interests and passions, and individual
						needs.
					</p>
				</div>
			</div>

			<div className="abscol2">
				<img src="../images/about_us_pic/1.jpg" className="abspic" alt="not working" />
				<img src="../images/about_us_pic/2.jpg" className="abspic" alt="not working" />
				<img src="../images/about_us_pic/3.jpg" className="abspic" alt="not working" />
			</div>
		</div>
	);
}

export default AboutUsPage;
