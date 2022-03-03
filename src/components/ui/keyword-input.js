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
import { getKeywords } from "api/index.js";
import { Field } from "formik";

export default function KeywordInput({ name, labelTitle }) {
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

	useEffect(() => {
		const timer = setTimeout(() => {
			getKeywords().then(({ data }) => {
				const { keywords } = data;
				setKeywords(keywords);
			});
			clearTimeout(timer);
		}, [3000]);
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
			<label className="text-muted">{labelTitle}</label>
			<Field name={name}>
				{({ form, field, meta }) => {
					const handleSelect = (selectedKeyword) => {
						form.setFieldValue(field.name, [...field.value, selectedKeyword]);
						form.setFieldTouched(field.name, false);
					};
					return (
						<Fragment>
							<Combobox aria-label="Keywords" onSelect={handleSelect} {...field}>
								<ComboboxInput
									className="keywords-search-input"
									onChange={handleChange}
									value={term}
									autocomplete
									placeholder="Keywords"
									onBlur={() => {
										form.setFieldTouched(field.name, true);
									}}
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
							<small className="text-danger d-block" style={{ height: "1rem" }}>
								{meta.error && meta.touched ? meta.error : ""}
							</small>
						</Fragment>
					);
				}}
			</Field>
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
