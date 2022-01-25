import { render, screen } from '@testing-library/react';
import App from './App';

/*
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});*/

import React from "react";
import { configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import DogCreate from "./components/DogCreate"

configure({ adaepter: new Adapter() });

describe("<DogCreate />", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<DogCreate />);
    });
    it("Renderiza un <form>", () => {
      expect(wrapper.find("form")).toHaveLength(1);
    });

    it('Renderiza un input con la propiedad "name" igual a "name"', () => {
      expect(wrapper.find('input[name="name"]')).toHaveLength(1);
    });

    it('Renderiza una p con la propiedad "name" igual a "error"', () => {
      expect(wrapper.find('p[name="error"]')).toHaveLength(1);
    });

    it('Renderiza un input con la propiedad "name" igual a "place"', () => {
      expect(wrapper.find('input[name="place"]')).toHaveLength(1);
    });

    it('Renderiza un input con la propiedad "name" igual a "temperament"', () => {
      expect(wrapper.find('input[name="temperament"]')).toHaveLength(1);
    });

    it('Renderiza un boton con el "type" "submit"', () => {
      expect(wrapper.find('Button[type="submit"]')).toHaveLength(1);
    });
  });