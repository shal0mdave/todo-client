
const PriceRange = (props) => {

    return (
        <div className="price-range">
            {
                props.priceRanges.map(range => (
                    <div key={range.tag} className="form-check range">
                        <input className="form-check-input" type="checkbox"
                            id={range.tag}
                            checked={range.isChecked}
                            onChange={(event) => props.onSelect(range.value, range.tag, event)}
                        />
                        <label className="form-check-label" htmlFor={range.tag}>
                            {range.tag}
                        </label>
                    </div>
                ))
            }
        </div>
    )
}

export default PriceRange;