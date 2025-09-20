import React from 'react'

const Contact = () => {

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
    e.target.reset();
  };

  return (
    <div>
      <section className="section-contact">
        <h2 className="container-title">Contact Us</h2>

        <div className="contact-wrapper container">
          <form onSubmit={handleFormSubmit}> 
            <input
              type="text"
              className="form-control"
              placeholder="enter your name"
              name="username"
              required
              autoComplete="off"
            />

            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              name="email"
              required
              autoComplete="off"
            />

            <textarea
              className="form-control"
              rows="10"
              placeholder="Enter your message"
              name="message"
              required
              autoComplete="off"
            ></textarea>

            <button type="submit">Send</button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Contact
