const Confession: React.FC = () => {
  return (
    <div>
      <main>
        <p>
          It's very difficult to catch people committing misdemeanours so we
          appreciate it when citizens confess to us directly.
        </p>
        <p>
          However, if you're just having a hard day and need to vent then you're
          welcome to contact us here too. Up to you!
        </p>
        <form action="/submit" method="post" className="confess-form">
          <label htmlFor="subject" className="confess-form__label">
            Subject:
          </label>
          <br />
          <input
            type="text"
            id="subject"
            name="subject"
            className="confess-form__input"
          />
          <br />
          <br />

          <label htmlFor="reason" className="confess-form__label">
            Reason for Contact:
          </label>
          <br />
          <select id="reason" name="reason" className="confess-form__select">
            <option value="misdemeanour">Misdemeanour</option>
            <option value="talk">I just want to talk</option>
          </select>
          <br />
          <br />

          <label htmlFor="message" className="confess-form__label">
            Message:
          </label>
          <br />
          <textarea
            id="message"
            name="message"
            style={{ width: "100%", resize: "vertical" }}
            rows={4}
            cols={50}
            className="confess-form__textarea"
          ></textarea>

          <br />
          <br />

          <input
            type="submit"
            value="Confess"
            className="confess-form__submit"
            disabled
          />
        </form>
      </main>
    </div>
  );
};

export default Confession;
