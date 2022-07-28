import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../redux/store";
import TextInputBar from "../components/TextInputBar/TextInputBar";
import Results from "../components/Results/Results";


describe("App Tests", () => {

  let view;
  
  
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
     view = render(
      <Provider store={store}>
        <TextInputBar />
        <Results />
      </Provider>)

  })

  test("renders without crashing", () => {
    expect(view.container).toBeTruthy();
  })

  test("must show a message when click send with an empty input", () => {
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const button = view.getByText("Send");
    fireEvent.click(button);
    expect(view.container).toHaveTextContent("Write some text before send please")
  })

  test("must show a message when it not have a reversed text yet", () => {
    expect(view.container).toHaveTextContent("Todavía no ingresaste ningún texto")
  })
  


})


