import "./homePage.scss"

const HomePage = () => {
    return (
        <div className="homePage">
            {/* Home -> Hero -> Left */}
            <div className="textContainer">
                <div className="wrapper">
                    <h1 className="title">
                        Find Real Estate & Get Your Dream Place
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia veritatis consectetur, impedit, ipsam illo reiciendis id reprehenderit, praesentium autem repellendus similique quia explicabo quidem quam excepturi facere omnis sint! At.</p>
                </div>
            </div>

            {/* Home -> Hero -> Left */}
            <div className="imgContainer">
                <img src="/bg.png" alt="" />
            </div>
        </div>
    );
}

export default HomePage;