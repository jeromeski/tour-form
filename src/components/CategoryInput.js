import { Fragment, useMemo, useState } from "react";
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
import categories from "../data/index";

export default function CategoryInput({ setData, data }) {
	const [term, setTerm] = useState("");
	const handleChange = (event) => setTerm(event.target.value);
	const results = useCategoryMatch(term, categories);

	console.log(term);

	const handleSelect = (item) => {
		setTerm(item);
		setData((prev) => ({
			...data,
			categories: [...prev.categories, item]
		}));
		setTerm("");
	};

	return (
		<Fragment>
			<Combobox aria-label="Categories" onSelect={(item) => handleSelect(item)}>
				<ComboboxInput
					className="categories-search-input"
					onChange={handleChange}
					value={term}
					placeholder="Choose Category."
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
							<span style={{ display: "block", margin: 8 }}>No results found</span>
						)}
					</ComboboxPopover>
				)}
			</Combobox>
		</Fragment>
	);
}

const useCategoryMatch = (term, categories) => {
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
