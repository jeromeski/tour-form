import { useMemo, useState } from "react";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import { useThrottle } from "react-use";
import { matchSorter } from "match-sorter";
// import { getCategories } from "../api/get-categories";
import categories from "../data/categories";

export default function CategoryInput(setData) {
  const [term, setTerm] = useState("");
  // const [categories, setCategories] = useState("");

  const handleChange = (event) => setTerm(event.target.value);

  const results = useCategoryMatch(term, categories());

  // useEffect(() => {
  //   try {
  //     (async () =>
  //       await getCategories().then(({ data }) => {
  //         setCategories(data);
  //       }))();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);

  // console.log(categories);

  console.log(term);

  const handleSelect = (item) => {};

  return (
    <Combobox aria-label="Categories" onSelect={(item) => handleSelect(item)}>
      <ComboboxInput
        className="categories-search-input"
        onChange={handleChange}
      />
      {results && (
        <ComboboxPopover className="shadow-popup">
          {results.length > 0 ? (
            <ComboboxList>
              {results.slice(0, 10).map((result, index) => (
                <ComboboxOption key={index} value={`${result.name}`} />
              ))}
            </ComboboxList>
          ) : (
            <span style={{ display: "block", margin: 8 }}>
              No results found
            </span>
          )}
        </ComboboxPopover>
      )}
    </Combobox>
  );
}

const useCategoryMatch = (term, categories) => {
  console.log(categories);
  const throttledTerm = useThrottle(term, 100);
  return useMemo(
    () =>
      term.trim() === ""
        ? null
        : matchSorter(categories, term, {
            keys: [(item) => `${item.name}`]
          }),
    [throttledTerm]
  );
};

/*
const throttledTerm = useThrottle(term, 100);
  return useMemo(
    () =>
      term.trim() === ""
        ? null
        : matchSorter(categories, term, {
            keys: [
              (category) => `${category.name}`, `{category.slug}`
            ]
          }),
    [throttledTerm]
  );
*/
