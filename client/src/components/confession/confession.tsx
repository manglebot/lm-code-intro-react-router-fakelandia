import { useState } from "react";
import { Url, UrlObject } from "url";

const Confession: React.FC = () => {
  const [formData, setFormData] = useState({
    subject: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (value.trim() === "") {
      setErrorMessage("Please fill out all required fields.");
    } else {
      handleInputChange;
      setErrorMessage("");
    }
  };

  const handleSubmit = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    if (formData.subject === "" || formData.message === "") {
      setErrorMessage("Please fill out all required fields.");
      return;
    }
    setErrorMessage("");
  };

  const isFormValid = formData.subject !== "" && formData.message !== "";

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
              className="confess-form__select-reason"
            >
              <option value="misdemeanour">Misdemeanour</option>
              <option value="talk">I just want to talk</option>
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
              <p
                className={`confess-form__error-message ${
                  formData.subject === "" || formData.message === ""
                    ? "confess-form__error-message--show"
                    : ""
                }`}
              >
                {errorMessage}
              </p>
            )}
          </form>
        </div>
      </main>
    </div>
  );
};

export default Confession;
