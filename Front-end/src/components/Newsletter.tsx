export function Newsletter() {
  return (
    <section>
      <div className="newsletter">
        <h2>Subscribe to our newsletter.</h2>
        <form className="newsletter-input-form">
          <div className="input-container">
            <input
              type="email"
              name="email"
              placeholder="e-mail address"
              aria-label="email address"
              aria-invalid="false"
              className="input-field-newsletter"
            />
          </div>
          <div className="button-container">
            <button type="button" className="newsletter-submit">
              SIGN UP
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
