import { useState, useEffect } from "react";

const Confession: React.FC = () => {
  const [formData, setFormData] = useState({
    subject: "",
    reason: "select",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "reason" && value === "") {
      setErrorMessage("Please select a reason.");
    } else {
      setErrorMessage("");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    if (
      formData.subject === "" ||
      formData.message === "" ||
      formData.reason === "select"
    ) {
      setErrorMessage("Please fill out all required fields.");
      return;
    }
    setErrorMessage("");
  };

  useEffect(() => {
    if (formData.reason === "select") {
      setErrorMessage("Please select a reason.");
    } else {
      setErrorMessage("");
    }
  }, [formData.reason]);

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
        <div className="confess-form__container">
          <form
            action="/submit"
            method="post"
            className="confess-form"
            onSubmit={handleSubmit}
          >
            <label htmlFor="subject" className="confess-form__label-subject">
              Subject:
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className={`confess-form__input-subject ${
                formData.subject === ""
                  ? "confess-form__input-subject--invalid"
                  : ""
              }`}
              onChange={handleInputChange}
            />
            <br />
            <label htmlFor="reason" className="confess-form__label-reason">
              Reason for Contact:
            </label>
            <br />
            <select
              id="reason"
              name="reason"
              className={`confess-form__select-reason ${
                errorMessage ? "confess-form__select-reason--invalid" : ""
              }`}
              onChange={handleInputChange}
              value={formData.reason}
            >
              <option value="select">Select</option>
              <option value="rudeness">Mild Public Rudeness 🤪</option>
              <option value="lift">Speaking in a Lift 🗣</option>
              <option value="vegetables">Not Eating Your Vegetables 🥗</option>
              <option value="united">Supporting Manchester United 😈</option>
              <option value="talk">I just want to talk 💬</option>
            </select>
            <br />
            <textarea
              id="message"
              name="message"
              style={{ width: "100%", resize: "vertical" }}
              rows={4}
              cols={50}
              className={`confess-form__textarea ${
                formData.message === "" ? "confess-form__textarea--invalid" : ""
              }`}
              onChange={handleInputChange}
            ></textarea>

            <br />
            <br />

            <input
              type="submit"
              value="Confess"
              className={`confess-form__submit ${
                formData.message === "" ? "confess-form__submit--disabled" : ""
              }`}
            />
            {errorMessage && (
              <p className="confess-form__error-message">{errorMessage}</p>
            )}
          </form>
        </div>
      </main>
    </div>
  );
};

export default Confession;
