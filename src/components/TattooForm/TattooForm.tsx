import { useEffect, useState } from "react";
import {
  TattooStructure,
  TattooStructureWithoutId,
} from "../../store/features/tattoos/types";
import TattooFormStyled from "./TattooFormStyled";
import Button from "../Button/Button";

interface TattooFormProps {
  onSubmit: (tattooData: TattooStructureWithoutId) => void;
  selectedTattoo?: TattooStructure;
}

const TattooForm = ({
  onSubmit,
  selectedTattoo,
}: TattooFormProps): React.ReactElement => {
  let initialTattooFormState: TattooStructureWithoutId = {
    artist: "",
    city: "",
    direction: "",
    email: "",
    image: "",
    instagram: "",
    notes: "",
    style: "",
    isFavorite: false,
  };

  if (selectedTattoo) {
    initialTattooFormState = selectedTattoo;
  }

  const [tattooData, setTattooData] = useState<TattooStructureWithoutId>(
    initialTattooFormState,
  );

  useEffect(() => {
    if (selectedTattoo) {
      setTattooData({ ...selectedTattoo });
    }
  }, [selectedTattoo]);

  const onChangeForm = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setTattooData({
      ...tattooData,
      [event.target.id]: event.target.value,
    });
  };

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSubmit(tattooData);

    scrollTo(0, 0);
  };

  return (
    <TattooFormStyled
      className="tattoo-form"
      autoComplete="off"
      onSubmit={handleOnSubmit}
    >
      {" "}
      <div className="tattoo-form__wrapper">
        <label className="tattoo-form__control">
          {" "}
          Artist
          <input
            id="artist"
            type="text"
            className="tattoo-form__input"
            required
            placeholder="MissSita"
            onChange={onChangeForm}
            value={tattooData.artist}
          />
        </label>
        <label className="tattoo-form__control">
          {" "}
          Email
          <input
            id="email"
            type="email"
            className="tattoo-form__input"
            required
            placeholder="hello.misssita@gmail.com"
            onChange={onChangeForm}
            value={tattooData.email}
          />
        </label>
        <label className="tattoo-form__control">
          {" "}
          Instagram (url)
          <input
            id="instagram"
            type="url"
            className="tattoo-form__input"
            required
            placeholder={"www.instagram.com/misssita"}
            onChange={onChangeForm}
            value={tattooData.instagram}
          />
        </label>
        <label className="tattoo-form__control">
          {" "}
          City
          <input
            id="city"
            type="text"
            className="tattoo-form__input"
            required
            placeholder="Barcelona"
            onChange={onChangeForm}
            value={tattooData.city}
          />
        </label>
        <label className="tattoo-form__control">
          {" "}
          Direction (url)
          <input
            id="direction"
            type="url"
            className="tattoo-form__input"
            required
            placeholder={"www.google.com/maps/direction"}
            onChange={onChangeForm}
            value={tattooData.direction}
          />
        </label>
        <label className="tattoo-form__control">
          {" "}
          Style
          <input
            id="style"
            type="text"
            className="tattoo-form__input"
            required
            placeholder={"blackwork"}
            onChange={onChangeForm}
            value={tattooData.style}
          />
        </label>
        <label className="tattoo-form__control">
          {" "}
          Image (url)
          <input
            id="image"
            type="url"
            className="tattoo-form__input"
            required
            placeholder={"www.google.com/image/tattoo.jpg"}
            onChange={onChangeForm}
            value={tattooData.image}
          />
        </label>
        <label className="tattoo-form__control">
          {" "}
          Notes (optional)
          <textarea
            id="notes"
            className="tattoo-form__text-area"
            placeholder={"schedule appointment via email"}
            cols={30}
            rows={10}
            onChange={onChangeForm}
            value={tattooData.notes}
          />
        </label>
      </div>
      <Button
        className="tattoo-form__button"
        disabled={false}
        type={"submit"}
        text="Add"
      />
    </TattooFormStyled>
  );
};

export default TattooForm;
