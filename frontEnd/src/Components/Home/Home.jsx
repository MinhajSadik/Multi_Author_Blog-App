import Navbar from "./Navbar";
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="main_content">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <h3>Article</h3>
            </div>
            <div className="col-4">
              <div className="search_category_tag">
                <div className="search">
                  <h2>Search</h2>
                  <div className="form_group">
                    <input
                      className="form_control"
                      type="text"
                      placeholder="search"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
