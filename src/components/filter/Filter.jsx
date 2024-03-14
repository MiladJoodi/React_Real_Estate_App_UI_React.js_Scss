import "./filter.scss"

const Filter = () => {
    return (
        <div className="filter">
            <h1>Search result for <b>London</b></h1>

            {/* Top */}
            <div className="top">
                <div className="item">
                    <label htmlFor="city">Location</label>
                    <input type="text" id="city" name="city" placeholder="City Location" />
                </div>
            </div>

            {/* Bottom */}
            <div className="bottom">
                <div className="item">
                    <label htmlFor="type">Type</label>
                    <select name="type" id="type">
                        <option value="">any</option>
                        <option value="buy">Buy</option>
                        <option value="rent">Rent</option>
                    </select>
                </div>
                <div className="item">
                    <label htmlFor="property">Property</label>
                    <select name="property" id="property">
                        <option value="">any</option>
                        <option value="apartment">Apartment</option>
                        <option value="house">House</option>
                        <option value="condo">Apartment</option>
                        <option value="land">Land</option>
                    </select>
                </div>
                <div className="item">
                    <label htmlFor="minPrice">Min Price</label>
                    <input
                        type="number"
                        id="minPrice"
                        name="minPrice"
                        placeholder="any"
                    />
                </div>
                <div className="item">
                    <label htmlFor="maxPrice">Max Price</label>
                    <input
                        type="number"
                        id="maxPrice"
                        name="maxPrice"
                        placeholder="any"
                    />
                </div>
                <div className="item">
                    <label htmlFor="bedRoom">Bed Room</label>
                    <input
                        type="text"
                        id="bedRoom"
                        name="bedRoom"
                        placeholder="any"
                    />
                </div>
                <button>
                    <img src="/search.png" alt="" />
                </button>
            </div>

        </div>
    );
}

export default Filter;