import React from 'react'

export default function About() {
    return (
        <div>
            <div className="container my-3">
                <h2>About Text-Analyzer</h2>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <strong>About - APP</strong>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                TextUtils is a versatile tool designed to simplify text manipulation tasks. Whether you need to count words, remove extra spaces, or analyze text, TextUtils offers an easy-to-use interface to help you get the job done quickly and efficiently. Perfect for anyone looking to streamline their text processing workflow.</div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <strong>About - Team</strong>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                We Value Your Feedback

                                Your experience with TextUtils is important to us! If you have any suggestions, questions, or feedback, we'd love to hear from you. Please feel free to reach out to us at:
                                <br /><br />
                                <strong> 📧 Email: 7773aakashsharma@gmail.com</strong>
                                <br /><br />
                                Your insights help us improve and provide you with the best possible tools for your text processing needs.
                            </div>
                        </div>
                    </div>
                    {/* <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Accordion Item #3
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
