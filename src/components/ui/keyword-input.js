import { Fragment, useMemo, useState, useContext, useEffect } from "react";
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
import { toast } from "react-toastify";
// import keywords from "../data/index";
import { getKeywords } from "api/get-keywords";

export default function KeywordInput({ setData, data, labelTitle }) {
	const [term, setTerm] = useState("");
	const [keywords, setKeywords] = useState([]);
	const [selected, setSelected] = useState("");

	const useKeywordMatch = (term) => {
		const throttledTerm = useThrottle(term, 100);
		return useMemo(
			() =>
				term.trim() === ""
					? null
					: matchSorter(keywords, term, {
							keys: [(item) => `${item.name}`]
					  }),
			[throttledTerm]
		);
	};

	const handleChange = (event) => setTerm(event.target.value);
	const results = useKeywordMatch(term);

	const handleSelect = (item) => {
		setSelected(item);
		setData((prev) => ({
			...data,
			keywords: [...prev.keywords, item]
		}));
	};

	useEffect(() => {
		getKeywords().then(({ data }) => {
			setKeywords(data.keywords);
		});
	}, []);

	useEffect(() => {
		if (selected) {
			setKeywords(
				keywords.filter((item) => {
					return item.name !== selected;
				})
			);
		}
	}, [selected]);

	return (
		<Fragment>
			<label>{labelTitle}</label>
			<Combobox aria-label="Keywords" onSelect={handleSelect}>
				{(props) => {
					return (
						<Fragment>
							<ComboboxInput
								className="keywords-search-input"
								onChange={handleChange}
								value={term}
								autocomplete
								placeholder="Keywords"
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
						</Fragment>
					);
				}}
			</Combobox>
		</Fragment>
	);
}

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
