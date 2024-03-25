import styles from "./ContactComp.module.css";

const ContactComp = () => {
  return (
    <div className={styles.contactContainer}>
      <h1>Contact Us</h1>
      <form className={styles.contactForm}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactComp;
