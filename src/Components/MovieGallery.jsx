import { Component } from "react";

class MovieGallery extends Component{
    render() {
      return (
        <div>
          <div className="movie-gallery mx-md-5 mb-5 mt-4">
            <h5 className="text-light mt-2 mb-2">{this.props.text}</h5>
            <div id="trending-now" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="movie-row">
                    <div className="row g-1">
                      <div className="col-md-2">
                        <img className="img-fluid movie-cover" src="" />
                      </div>
                      <div className="col-md-2">
                        <img className="img-fluid movie-cover" src="" />
                      </div>
                      <div className="col-md-2">
                        <img className="img-fluid movie-cover" src="" />
                      </div>
                      <div className="col-md-2">
                        <img className="img-fluid movie-cover" src="" />
                      </div>
                      <div className="col-md-2">
                        <img className="img-fluid movie-cover" src="" />
                      </div>
                      <div className="col-md-2">
                        <img className="img-fluid movie-cover" src="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="movie-row">
                    <div className="row g-1">
                      <div className="col-md-2">
                        <img className="img-fluid movie-cover" src="" />
                      </div>
                      <div className="col-md-2">
                        <img className="img-fluid movie-cover" src="" />
                      </div>
                      <div className="col-md-2">
                        <img className="img-fluid movie-cover" src="" />
                      </div>
                      <div className="col-md-2">
                        <img className="img-fluid movie-cover" src="" />
                      </div>
                      <div className="col-md-2">
                        <img className="img-fluid movie-cover" src="" />
                      </div>
                      <div className="col-md-2">
                        <img className="img-fluid movie-cover" src="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#trending-now" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#trending-now" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          </div>
      )
    }
}
export default MovieGallery
