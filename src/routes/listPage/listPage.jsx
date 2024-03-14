import "./listPage.scss";
import { listData } from "../../lib/dummydata"
import Filter from "../../components/filter/Filter";
import Card from "../../components/card/Card";

const ListPage = () => {

    const data = listData;

    return (
        <div className="listPage">

            {/* List Container */}
            <div className="listContainer">
                <div className="wrapper">
                    <Filter />

                    {data.map(item=>(
                        <Card key={item.id} item={item} />
                    ))}

                </div>
            </div>

            {/* Map Container */}
            <div className="mapContainer">
                mapContainer
            </div>
        </div>
    );
}

export default ListPage;