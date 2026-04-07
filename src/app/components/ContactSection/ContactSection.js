import styles from "./ContactSection.module.css";

export default function ContactSection() {
  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <h2 className={styles.title}>CONTACT US</h2>

        <form className={styles.formGrid}>
          <label>
            <span>First Name</span>
            <input type="text" placeholder="First Name" />
          </label>

          <label>
            <span>Last Name</span>
            <input type="text" placeholder="Last Name" />
          </label>

          <label>
            <span>Phone Number</span>
            <input type="tel" placeholder="Phone Number" />
          </label>

          <label>
            <span>Email</span>
            <input type="email" placeholder="Email" />
          </label>

          <label className={styles.fullRow}>
            <span>Material</span>
            <select defaultValue="">
              <option value="" disabled>
                Select Material
              </option>
              <option>Marble</option>
              <option>Granite</option>
              <option>Onyx</option>
            </select>
          </label>

          <label className={styles.fullRow}>
            <span>Type message</span>
            <textarea rows={3} placeholder="Type message" />
          </label>

          <button type="submit" className={styles.submitBtn}>
            Enquire Now <span aria-hidden="true">&rarr;</span>
          </button>
        </form>
      </div>
    </section>
  );
}
