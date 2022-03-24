import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "./Rentals.css";

export const Rentals = () => {
  const [arr, setArray] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      let res = await fetch(`http://localhost:8080/houses`);
      let data = await res.json();
      setArray([...data]);
      console.log("data", arr);
    } catch (e) {
      console.log(e);
    }
  };

  function compareID(a, b) {
    if (a.id < b.id) {
      return -1;
    }
    if (a.id > b.id) {
      return 1;
    }
    return 0;
  }
  function compareLow(a, b) {
    if (a.rent < b.rent) {
      return -1;
    }
    if (a.rent > b.rent) {
      return 1;
    }
    return 0;
  }
  function compareLowArea(a, b) {
    if (a.areacode < b.areacode) {
      return -1;
    }
    if (a.areacode > b.areacode) {
      return 1;
    }
    return 0;
  }
  function compareHighArea(a, b) {
    if (a.areacode < b.areacode) {
      return 1;
    }
    if (a.areacode > b.areacode) {
      return -1;
    }
    return 0;
  }
  function compareHigh(a, b) {
    if (a.rent < b.rent) {
      return 1;
    }
    if (a.rent > b.rent) {
      return -1;
    }
    return 0;
  }
  const sortLow = () => {
    arr.sort(compareLow);
    setArray([...arr]);
  };
  const sortHigh = () => {
    arr.sort(compareHigh);
    setArray([...arr]);
  };
  const sortLowArea = () => {
    arr.sort(compareLowArea);
    setArray([...arr]);
  };
  const sortHighArea = () => {
    arr.sort(compareHighArea);
    setArray([...arr]);
  };

  const sortID = () => {
    arr.sort(compareID);
    setArray([...arr]);
  };

  return (
    <div className="rentalContainer">
      <div className="sortingButtons">
        <button className="sortById" onClick={() => sortID()}>
          Sort by ID
        </button>
        <button className="sortByRentAsc" onClick={() => sortLow()}>
          Rent Low to high
        </button>
        <button className="sortByRentDesc" onClick={() => sortHigh()}>
          Rent High to low
        </button>
        <button className="sortByAreaAsc" onClick={() => sortLowArea()}>
          Area Low to high
        </button>
        <button className="sortByAreaDesc" onClick={() => sortHighArea()}>
          Area High to Low
        </button>
      </div>
      <input
        className="searchAddress"
        type="text"
        placeholder="Search Address"
        onChange={({ target }) => {
          let results = arr.filter((el) => {
            if (el.address == target.value) {
              return el;
            }
          });

          if (results.length != 0) {
            setArray([...results]);
          }
        }}
      />
      <table className="table" border="1">
        <thead>
          <tr>
            <th>Sl.no.</th>
            <th>Name</th>
            <th>Owner Name</th>
            <th>Address</th>
            <th>Area Code</th>
            <th>Rent</th>
            <th>Available For</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {arr.map((house, index) => {
            return (
              <tr key={house.id} className="houseDetails">
                <td className="houseId">{house.id}</td>
                <td className="houseName">{house.name} </td>
                <td className="ownersName">{house.ownerName}</td>
                <td className="address">{house.address}</td>
                <td className="areaCode">{house.areaCode}</td>
                <td className="rent">{house.rent}</td>
                <td className="preferredTenants">
                  {/* Show text Both or Bachelors or Married based on values */}
                  {house.type}
                </td>
                <td className="houseImage">
                  <img src={house.image} alt="house" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
