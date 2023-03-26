import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavBar from './NavBar';
import { ShopContext } from "../../context/ProductContext";

const mockRemoveAll = jest.fn();

const renderNavBar = (contextValues) => {
  const context = { ...contextValues };
  return render(
    <MemoryRouter>
      <ShopContext.Provider value={context}>
        <NavBar />
      </ShopContext.Provider>
    </MemoryRouter>
  );
};

describe('NavBar component', () => {
  afterEach(cleanup);

  test('renders logo', () => {
    const { getByAltText } = renderNavBar({ removeAll: mockRemoveAll });
    const logo = getByAltText('logo');
    expect(logo).toBeInTheDocument();
  });

  test('renders cart icon', () => {
    const { getByTestId } = renderNavBar({ removeAll: mockRemoveAll });
    const cartIcon = getByTestId('cart-icon');
    expect(cartIcon).toBeInTheDocument();
  });

  test('renders search icon', () => {
    const { getByTestId } = renderNavBar({ removeAll: mockRemoveAll });
    const searchIcon = getByTestId('search-icon');
    expect(searchIcon).toBeInTheDocument();
  });

  test('clicking on logo calls removeAll', () => {
    const { getByAltText } = renderNavBar({ removeAll: mockRemoveAll });
    const logo = getByAltText('logo');
    fireEvent.click(logo);
    expect(mockRemoveAll).toHaveBeenCalled();
  });

  test('toggling search icon shows/hides SearchBar component', () => {
    const { getByTestId, queryByTestId } = renderNavBar({ removeAll: mockRemoveAll });
    const searchIcon = getByTestId('search-icon');
    fireEvent.click(searchIcon);
    expect(queryByTestId('search-bar')).toBeInTheDocument();
    fireEvent.click(searchIcon);
    expect(queryByTestId('search-bar')).not.toBeInTheDocument();
  });
});
