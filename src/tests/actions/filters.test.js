import moment from "moment";
import { setStartDate, setEndDate, setTextFilter } from "../../actions/filters";

test("should generate set start date action object", () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0)
  });
});

test("should generate set end date action object", () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: "SET_END_DATE",
    endDate: moment(0)
  });
});

test("should generate set text filter object with text value", () => {
  const action = setTextFilter("Rent");
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: "Rent"
  });
});

test("should generate set text filter object with default", () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: ""
  });
});
