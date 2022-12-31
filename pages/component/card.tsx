import React from "react";
import Card from "../../components/Card";

const CardPage = () => {
	return (
      <Card>
         <Card.Header>
            <h6 className="mb-0"> Card </h6>
         </Card.Header>
         <Card.Body> 
            <p className="text-base font-inter-semibold text-dark">
					{" "}
					How to Usage{" "}
				</p>
				<div className="bg-gray-50 p-5 rounded flex flex-col  dark:bg-dark-dept-2">
						<code>
							&lt;Card&gt; <br />
							&nbsp;&nbsp;&nbsp; &lt;Card.Header&gt;
							&lt;/Card.Header&gt; <br />
							&nbsp;&nbsp;&nbsp; &lt;Card.Body&gt; &lt;/Card.Body&gt;{" "}
							<br />
							&nbsp;&nbsp;&nbsp; &lt;Card.Footer&gt;
							&lt;/Card.Footer&gt; <br />
							&lt;/Card&gt;
						</code>
					</div>
         </Card.Body>
         <Card.Footer> This is a card footer </Card.Footer>
      </Card>
	);
};

export default CardPage;
