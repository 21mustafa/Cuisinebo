import { useState } from "react";
import "./Reservation.scss";

export const Reservation = () => {
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [date, setDate] = useState();
  const [contact, setContact] = useState("phone");
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [guestNum, setGuestNum] = useState(1);

  return (
    <section className="reservation">
      <h1>Make a reservation</h1>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();

          setName("");
          setSurname("");
          setDate("");
          setContact("phone");
          setEmail("");
          setPhone("");
          setGuestNum(1);
        }}
      >
        <label>
          Name
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </label>

        <label>
          Surname
          <input value={surname} onChange={(e) => setSurname(e.target.value)} />
        </label>

        <label>
          Date
          <input
            type="datetime-local"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>

        <label>
          Contact choice
          <select value={contact} onChange={(e) => setContact(e.target.value)}>
            <option value={"phone"}>Phone</option>
            <option value={"email"}>Email</option>
            <option value={"none"}>I'll note it to my brain</option>
          </select>
        </label>

        {contact === "phone" ? (
          <label>
            Phone number
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>
        ) : contact === "email" ? (
          <label>
            E-mail
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        ) : (
          <div className="option">Alright, don't forget your reservation.</div>
        )}

        <label>
          Number of Guests
          <input
            type="number"
            value={guestNum}
            min={1}
            onChange={(e) => setGuestNum(e.target.value)}
          />
        </label>
        <button class="reserve-button">Save</button>
      </form>
    </section>
  );
};
