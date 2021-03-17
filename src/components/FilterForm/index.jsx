import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import makeThunk from "../../store/modules/make/thunk";
import modelThunk from "../../store/modules/model/thunk";
import versionThunk from "../../store/modules/version/thunk";
import { vehicleThunk } from "../../store/modules/vehicles/thunk";

import { ButtonContainer, FieldContaner, FormContainer } from "./style";
import { BiMap } from "react-icons/bi";

const FilterForm = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const [city, setCity] = useState("São Paulo");

  useEffect(() => {
    dispatch(makeThunk());
    dispatch(vehicleThunk());
  }, []);

  const make = useSelector((state) => state.make);
  const model = useSelector((state) => state.model);
  const version = useSelector((state) => state.version);

  const handleForm = (data) => {
    const { make, model } = data;

    if (make) {
      dispatch(modelThunk(make[0]));
    }
    if (model) {
      dispatch(versionThunk(model[0]));
    }
  };

  const disabler = (state) => {
    return state.length < 1;
  };

  return (
    <FormContainer onChange={handleSubmit(handleForm)}>
      <FieldContaner>
        <label htmlFor="city">
          <BiMap /> Onde?
        </label>
        <input type="text" name="city" id="city" ref={register} value={city} />
        <div>
          <span>Raio:</span>
          <select name="distance" id="distance" ref={register}>
            <option value="">100Km</option>
          </select>
        </div>
      </FieldContaner>

      <FieldContaner>
        <label htmlFor="make">Marca</label>
        <select name="make" id="make" ref={register}>
          <option defaultChecked>Todas</option>
          {make.map(({ ID, Name }) => {
            return (
              <option key={ID} value={[ID, Name]}>
                {Name}
              </option>
            );
          })}
        </select>
      </FieldContaner>

      <FieldContaner>
        <label htmlFor="model">Modelo</label>
        <select
          disabled={disabler(model)}
          name="model"
          id="model"
          ref={register}
        >
          <option defaultChecked>Todos</option>
          {model.map(({ ID, Name }) => {
            return (
              <option key={ID} value={[ID, Name]}>
                {Name}
              </option>
            );
          })}
        </select>
      </FieldContaner>

      <FieldContaner>
        <label htmlFor="year">Ano Desejado</label>
        <select name="year" id="year" ref={register}>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </select>
      </FieldContaner>

      <FieldContaner>
        <label htmlFor="price">Faixa de Preço</label>
        <select name="price" id="price" ref={register}>
          <option defaultChecked></option>
          <option value="1">até R$ 45.000</option>
          <option value="2">de R$ 45.000 até R$55.000</option>
          <option value="3">acima de R$55.000</option>
        </select>
      </FieldContaner>

      <FieldContaner>
        <label htmlFor="version">Versão</label>
        <select
          disabled={disabler(version)}
          name="version"
          id="version"
          ref={register}
        >
          <option defaultChecked>Todas</option>
          {version.map(({ ID, Name }) => {
            return (
              <option key={ID} value={[ID, Name]}>
                {Name}
              </option>
            );
          })}
        </select>
      </FieldContaner>

      <ButtonContainer>
      <p> - Busca Avançada</p>
      <p>Limpar Filtros</p>
        <button type="submit">Ver Ofertas</button>
      </ButtonContainer>
    </FormContainer>
  );
};

export default FilterForm;
