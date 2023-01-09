import React from "react";

const Contact = () => {
  return (
    <main>
      <div class="container">
        <div class="wrapper">
          <div></div>
          <div class="contact">
            <h3>Get in Contact with Us</h3>
            <p>
              Got questions, need help or experiencing an issue with the site?
              Complete the form below to send us a message and we'll get back to
              you as soon as possible.
            </p>
            <form>
              <p>
                <label>Name</label>
                <input type="text" name="name" required />
              </p>

              <p>
                <label>Email</label>
                <input type="email" name="email" required />
              </p>
              <p>
                <label>Phone Number</label>
                <input type="number" name="phone" required />
              </p>
              <p class="full">
                <label>Message</label>
                <textarea name="message" rows="5"></textarea>
              </p>
              <p class="full">
                <button>Submit</button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
