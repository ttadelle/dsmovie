import axios from "axios";
<<<<<<< HEAD
import { useState } from "react";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { BASE_URL } from "utils/requests";
import { MoviePage } from "types/movie";

function Listing() {

    const [pageNumber, setPageNumber] = useState(0);

    //FORMA ERRADA

    axios.get(`${BASE_URL}/movies?size=12?page=1`)
        .then(response => {
            const data = response.data as MoviePage;
            setPageNumber(data.number);
=======
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { BASE_URL } from "utils/requests";

function Listing() {

    //FORMA ERRADA

    axios.get(`${BASE_URL}/movies?size=12?page=0`)
        .then(response => {
            console.log(response.data);
>>>>>>> 6dedf73fd4ade1714d45a780121e5701cafdca56
        })

    return (

        <>
        <p>{pageNumber}</p>
            <Pagination />

            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-4 col-xl-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3">
                        <MovieCard />
                    </div>

                </div>
            </div>
        </>
    );




}

export default Listing;