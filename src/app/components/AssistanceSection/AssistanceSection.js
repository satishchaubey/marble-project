import styles from "./AssistanceSection.module.css";

const faqItems = [
  {
    question: "What types of natural stones do you offer?",
    answer:
      "We offer a wide range of natural stones, including marble, granite, sandstone, limestone, slate, quartz, and semi-precious stone in various colors and finishes.",
  },
  { question: "Do you provide custom stone cutting and finishes?" },
  { question: "How can I get a price quote?" },
  { question: "In what finishes do you provide stone?" },
  { question: "What is the minimum order requirement?" },
  { question: "What makes your stones different from other suppliers?" },
];

export default function AssistanceSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>ANSWERS &amp; ASSISTANCE</h2>

      <div className={styles.grid}>
        <aside className={styles.supportCard}>
          <p className={styles.supportKicker}>QUICK HELP &amp; SUPPORT</p>
          <h3 className={styles.supportTitle}>
            Still Have Question?
            <br />
            Enquire Now
          </h3>
          <button type="button" className={styles.supportBtn}>
            ENQUIRE NOW <span aria-hidden="true">&rarr;</span>
          </button>
        </aside>

        <div className={styles.faqList}>
          {faqItems.map((item, index) => (
            <details key={item.question} open={index === 0} className={styles.faqItem}>
              <summary>{item.question}</summary>
              {item.answer ? <p>{item.answer}</p> : null}
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
