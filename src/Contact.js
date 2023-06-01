import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h1>Contact</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6540.583024859335!2d77.58196178403416!3d12.904253478516484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae158fcc0acacf%3A0x207c7dd47582f9c2!2sBubblesort%20Tech!5e0!3m2!1sen!2sin!4v1681757519737!5m2!1sen!2sin"
        width="100%"
        height="300"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="container">
        <div className="contact-form">
          <form action="" method="POST" className="contact-input">
            <input
              type="text"
              placeholder="username"
              required
              autoComplete="off"
            />
            <input
              type="email"
              placeholder="email"
              required
              autoComplete="off"
            />

            <textarea
              name="massage"
              color="30"
              rows={10}
              required
              autoComplete="off"
              placeholder="Enter you message"
            ></textarea>
            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
