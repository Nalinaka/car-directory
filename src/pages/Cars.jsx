import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
// import { useNavigate } from "react-router-dom";


const Posts = () => {
    const { id } = useParams();
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState(query);

    function onSearch() {
        fetchCars(searchQuery);
    }

    async function fetchCars(carQuery) {
        setLoading(true);
        const { data } = await axios.get(
            `https://freetestapi.com/api/v1/cars?search=${carQuery || query}`
        );
        setCars(data);
        setLoading(false);
    }



    };

    export default Cars;