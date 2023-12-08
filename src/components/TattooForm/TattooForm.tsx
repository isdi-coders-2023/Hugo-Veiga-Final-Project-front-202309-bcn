import TattooFormStyled from "./TattooFormStyled";

const TattooForm = (): React.ReactElement => {
  return (
    <TattooFormStyled>
      <label className="tattoo-form__control">
        {" "}
        Artist
        <input
          type="text"
          className="tattoo-form__input"
          required
          placeholder="MissSita"
        />
      </label>
      <label className="tattoo-form__control">
        {" "}
        Email
        <input
          type="text"
          className="tattoo-form__input"
          required
          placeholder="hello.misssita@gmail.com"
        />
      </label>
      <label className="tattoo-form__control">
        {" "}
        Instagram
        <input
          type="text"
          className="tattoo-form__input"
          required
          placeholder={"www.instagram.com/misssita"}
        />
      </label>
      <label className="tattoo-form__control">
        {" "}
        City
        <input
          type="text"
          className="tattoo-form__input"
          required
          placeholder="Barcelona"
        />
      </label>
      <label className="tattoo-form__control">
        {" "}
        Direction
        <input
          type="text"
          className="tattoo-form__input"
          required
          placeholder={"www.google.com/maps/direction"}
        />
      </label>
      <label className="tattoo-form__control">
        {" "}
        Style
        <input
          type="text"
          className="tattoo-form__input"
          required
          placeholder={"blackwork"}
        />
      </label>
      <label className="tattoo-form__control">
        {" "}
        Image
        <input
          type="text"
          className="tattoo-form__input"
          required
          placeholder={"www.google.com/image/tattoo.jpg"}
        />
      </label>
      <label className="tattoo-form__control">
        {" "}
        Notes (optional)
        <textarea
          className="tattoo-form__text-area"
          placeholder={"schedule appointment via email"}
          cols={30}
          rows={10}
        />
      </label>
    </TattooFormStyled>
  );
};

export default TattooForm;
