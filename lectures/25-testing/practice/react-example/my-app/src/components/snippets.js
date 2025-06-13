export const Button = `import React from 'react';
import Button from './Button';
import { render, fireEvent, cleanup } from '@testing-library/react';

afterEach(cleanup);

const defaultProps = { 
  onClick: jest.fn(),
  text: "Submit" ,
};

test('button renders with correct text', () => {
  const { queryByText, rerender } = render(<Button {...defaultProps} />);
  expect(queryByText("Submit")).toBeTruthy(); 

  // Change props
  rerender(<Button {...defaultProps} text="Go" />);
  expect(queryByText("Go")).toBeTruthy(); 
});

test('calls correct function on click', () => {
  const onClick = jest.fn();
  const { getByText } = render(<Button {...defaultProps} onClick={onClick} />)
  fireEvent.click(getByText(defaultProps.text));
  expect(onClick).toHaveBeenCalled();
});
`;

export const Counter = `import React from 'react';
import Counter from './Counter';
import { render, fireEvent, cleanup } from '@testing-library/react';

afterEach(cleanup);

test('count starts with 0', () => {
  const { getByTestId } = render(<Counter />)
  expect(getByTestId("count").textContent).toBe("Clicked 0 times");
});

test('clicking on button increments counter', () => {
  const { getByText, getByTestId } = render(<Counter />)
  fireEvent.click(getByText("Increment"));
  expect(getByTestId("count").textContent).toBe("Clicked 1 time");
  fireEvent.click(getByText("Increment"));
  expect(getByTestId("count").textContent).toBe("Clicked 2 times");
});

test('window title changes after every increment if checkbox is checked', () => {
  global.window.document.title = "My Awesome App";
  const { getByText, getByLabelText } = render(<Counter />);
  
  // When checkbox is unchecked, incrementing has no effect
  fireEvent.click(getByText("Increment"));
  expect(global.window.document.title).toBe("My Awesome App");

  // Check and assert the document title changes
  const checkbox = getByLabelText("Check to display count in document title");
  fireEvent.click(checkbox);
  expect(global.window.document.title).toBe("Total number of clicks: 1");

  // Works if you increment multiple times
  fireEvent.click(getByText("Increment"));
  expect(global.window.document.title).toBe("Total number of clicks: 2");

  // Unchecking will return to the original document title
  fireEvent.click(checkbox);
  expect(global.window.document.title).toBe("My Awesome App");
});
`;

export const ChangeInput = `import React from 'react';
import ChangeInput from './ChangeInput';
import { render, fireEvent, cleanup } from '@testing-library/react';

afterEach(cleanup);

test('displays the correct greeting', () => {
  const { getByLabelText, getByTestId } = render(<ChangeInput />);
  const input = getByLabelText("user-name");
  const greeting = getByTestId("change-input-greeting");
  expect(input.value).toBe("");
  expect(greeting.textContent).toBe("Welcome, Anonymous User!")
  fireEvent.change(input, { target: { value: "Rafael" }});
  expect(input.value).toBe("Rafael");
  expect(greeting.textContent).toBe("Welcome, Rafael!");
});
`;

export const FocusInput = `import React from 'react';
import FocusInput from './FocusInput';
import { render, fireEvent, cleanup } from '@testing-library/react';

afterEach(cleanup);

test('FocusInput matches snapshot', () => {
  const { container } = render(<FocusInput />)
  expect(container.firstChild).toMatchSnapshot();
});

test('clicking on button trigger focus on input', () => {
  const { getByPlaceholderText, getByText } = render(<FocusInput />)
  fireEvent.click(getByText("Click to Focus"));
  expect(document.activeElement).toBe(getByPlaceholderText('Focus me!'));
});
`;

export const Timeout = `import React from 'react';
import Timeout from './Timeout';
import { render, fireEvent, cleanup } from '@testing-library/react';

afterEach(cleanup);

jest.useFakeTimers();

test('clicking on button makes it disabled', () => {
  const { getByText } = render(<Timeout />);
  const button = getByText("Click to trigger timeout");
  expect(button.disabled).toBeFalsy();
  fireEvent.click(button);
  expect(button.disabled).toBeTruthy();
});

test('clicking on button displays timeout message', () => {
  const { getByText, queryByTestId, getByTestId } = render(<Timeout />);
  const button = getByText("Click to trigger timeout");
  expect(queryByTestId("timeout-message")).toBeNull();
  fireEvent.click(button);
  expect(getByTestId("timeout-message").textContent).toBe("This will timeout in 5 seconds");
  jest.runAllTimers();
  expect(getByTestId("timeout-message").textContent).toBe("Timeout!");
});
`;

export const Fetch = `import React from 'react';
import Fetch from './Fetch';
import { render, fireEvent, cleanup, wait } from '@testing-library/react';

afterEach(cleanup);

test('starts without any joke', () => {
  const { queryByTestId } = render(<Fetch />);
  expect(queryByTestId("fetch-joke")).toBeNull();
});

test('after clicking on button, displays loading message', () => {
  const { getByTestId, getByText } = render(<Fetch />);
  fireEvent.click(getByText("Get a Chuck Norris joke"));
  expect(getByTestId("fetch-loading").textContent).toBe("Loading...");
});

test('after clicking on button, displays joke if API succeeds', async () => {
  const joke = "Chuck Norris counted to infinity. Twice.";

  // Mock API
  jest.spyOn(global, 'fetch')
    .mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve({
        value: joke
      })
    }));

  const { getByTestId, getByText } = render(<Fetch />);
  fireEvent.click(getByText("Get a Chuck Norris joke"));
  await wait(() => getByTestId("fetch-joke"));

  expect(getByTestId("fetch-joke").textContent).toBe(joke);
  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch.mock.calls[0][0]).toBe("https://api.chucknorris.io/jokes/random");

  // Clear mock
  global.fetch.mockClear();
});

test('after clicking on button, displays error if API fails', async () => {
  // Mock API
  jest.spyOn(global, 'fetch')
    .mockImplementation(() => Promise.resolve({
      status: 500,
    }));

  const { getByTestId, getByText } = render(<Fetch />);
  fireEvent.click(getByText("Get a Chuck Norris joke"));
  await wait(() => getByTestId("fetch-error"));

  expect(getByTestId("fetch-error").textContent).toBe("Failed to fetch");
  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch.mock.calls[0][0]).toBe("https://api.chucknorris.io/jokes/random");

  // Clear mock
  global.fetch.mockClear();
});`;

export const MultipleFetches = `import React from 'react';
import MultipleFetches from './MultipleFetches';
import { render, fireEvent, cleanup, wait } from '@testing-library/react';

afterEach(cleanup);

test('starts without any post', () => {
  const { queryByTestId } = render(<MultipleFetches />);
  expect(queryByTestId("fetch-post")).toBeNull();
});

test('after clicking on button, displays loading message', () => {
  const { getByTestId, getByText } = render(<MultipleFetches />);
  fireEvent.click(getByText("Fetch post and comments"));
  expect(getByTestId("fetch-loading-post").textContent).toBe("Loading post...");
});

describe('API tests', () => {
  // Group API tests so we can clear the mock more easily
  afterEach(() => global.fetch.mockClear());

  test('displays post if API succeeds', async () => {
    // Mock API
    jest.spyOn(global, 'fetch')
      .mockImplementationOnce(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve({
          title: "How to Become a Bad Developer"
        })
      }))
      .mockImplementationOnce(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve([
          { id: 1, name: "Rafael" },
          { id: 2, name: "Andressa" }
        ])
      }));
  
    const { getByTestId, getByText, getAllByTestId } = render(<MultipleFetches />);
    fireEvent.click(getByText("Fetch post and comments"));
    
    await wait();
  
    expect(global.fetch).toHaveBeenCalledTimes(2);
    expect(global.fetch.mock.calls[0][0])
      .toBe("https://jsonplaceholder.typicode.com/posts/1");
    expect(global.fetch.mock.calls[1][0])
      .toBe("https://jsonplaceholder.typicode.com/posts/1/comments");
    
    expect(getByTestId("fetch-post").textContent).toBe("How to Become a Bad Developer");
    expect(getByText("All fetched!")).toBeTruthy();
  
    const authors = getAllByTestId("comment-author");
    expect(authors[0].textContent).toBe("Rafael");
    expect(authors[1].textContent).toBe("Andressa");
  });
  
  test('displays comments error if API fails', async () => {
    // Mock API
    jest.spyOn(global, 'fetch')
      .mockImplementationOnce(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve({
          title: "How to Become a Bad Developer"
        })
      }))
      .mockImplementationOnce(() => ({
        status: 500
      }));
  
    const { getByTestId, getByText, queryByText } = render(<MultipleFetches />);
    fireEvent.click(getByText("Fetch post and comments"));
    await wait();
  
    expect(global.fetch).toHaveBeenCalledTimes(2);
    expect(global.fetch.mock.calls[0][0])
      .toBe("https://jsonplaceholder.typicode.com/posts/1");
    expect(global.fetch.mock.calls[1][0])
      .toBe("https://jsonplaceholder.typicode.com/posts/1/comments");
  
    expect(getByTestId("fetch-post").textContent).toBe("How to Become a Bad Developer");
    expect(getByTestId("fetch-error-comments").textContent).toBe("Failed to fetch");
    expect(queryByText("All fetched!")).toBeNull();
  });
  
  test('displays post error if API fails', async () => {
    // Mock API
    jest.spyOn(global, 'fetch')
      .mockImplementation(() => Promise.resolve({
        status: 500,
      }));
  
    const { getByTestId, getByText, queryByText } = render(<MultipleFetches />);
    fireEvent.click(getByText("Fetch post and comments"));
    await wait(() => getByTestId("fetch-error-post"));
  
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch.mock.calls[0][0]).toBe("https://jsonplaceholder.typicode.com/posts/1");
    
    expect(getByTestId("fetch-error-post").textContent).toBe("Failed to fetch");
    expect(queryByText("All fetched!")).toBeFalsy();
  });
});`;
