import { useSelector } from "react-redux";
import FilterSystem from "./FilterSystem";
import { useRef, useEffect, useState } from "react";
import { PrintTable } from "./PrintTable";
import { AddData } from "./AddData";
import { useForm, SubmitHandler } from "react-hook-form";
import { useLocation } from "react-router-dom";
import axios from "axios";

const TableContainer = ({ caption, th, td }) => {
  const location = useLocation();
  const date = useRef();

  const [d, setDate] = useState();

  const style = { fontFamily: "Verdana, Geneva, Tahoma, sans-serif" };
  const divStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
  const { mood } = useSelector((state) => state.mood);
  const { filteredData } = useSelector((state) => state.filteredData);
  const tableRef = useRef(null);
  const { addClicked } = useSelector((state) => state.addClicked);
  const handlePrint = () => {
    window.print();
  };

  const handleData = async (data) => {
    console.log(data);
  };

  const convertTextToDate = (date) => {
    let convertedDate;
    convertedDate = new Date(date);
    return convertedDate;
  };

  const checkTheStatusOfData = (messageDate) => {
    const messageDateTime = new Date(messageDate);
    const todaysDate = new Date();

    const expectedAnswerDate = new Date(messageDateTime);
    expectedAnswerDate.setDate(expectedAnswerDate.getDate() + 5);

    const timeDifference = expectedAnswerDate - messageDateTime;

    console.log(timeDifference);

    if (timeDifference <= 0) {
      console.log("Red");
    } else if (timeDifference <= 259200000) {
      console.log("Yellow");
    } else {
      console.log("Green");
    }
  };

  const intervalId = setInterval(() => {
    checkTheStatusOfData(messageDate);
  }, 24 * 60 * 60 * 1000);


  const { register, handleSubmit, watch } = useForm();
  const onSubmit = (data) => {
    handleData(data);
    if (location.pathname === "/depart") {
      axios
        .post(process.env.REACT_APP_DEPART, {
         data 
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
    }
  };

    const number = watch("yearly_order_number");
  const messageDate = watch("date_number");
  const reciever = watch("destination");
  const subject = watch("deal_analyse");
  const answerdate = watch("response_date_number");
  const status = "red";

  return (
    <div style={divStyle}>
      {th.length === 0 && td.length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <FilterSystem td={td} type={caption} />
          <div className="printandaddcontainer dontprint">
            <PrintTable handlePrint={handlePrint} />
            <AddData />
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <table
              ref={tableRef}
              id="table"
              style={style}
              className={`${mood === "dark" ? "dark_table" : null}`}
            >
              <caption className="caption">{caption}</caption>
              <thead>
                <tr>
                  {th.map((h) => (
                    <th
                      className={`${mood === "dark" ? "dark_table" : null}`}
                      key={h._id}
                    >
                      {h.name}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                <tr className={`${addClicked === true ? "new" : "hidden"}`}>
                  <td className="addnewtd">
                    <input
                      {...register("number")}
                      className="addnewinput"
                      type="text"
                      required
                    />
                  </td>
                  <td className="addnewtd">
                    <input
                      {...register("messageDate")}
                      className="addnewinput"
                      type="date"
                      required
                    />
                  </td>
                  <td className="addnewtd">
                    <input
                      {...register("reciever")}
                      className="addnewinput"
                      type="text"
                      required
                    />
                  </td>
                  <td className="addnewtd">
                    <input
                      {...register("subject")}
                      className="addnewinput"
                      type="text"
                      required
                    />
                  </td>
                  <td className="addnewtd">
                    <input
                      {...register("answerdate")}
                      className="addnewinput"
                      type="date"
                      required
                    />
                  </td>
                  <td className="addnewtd">
                    <button className="addnewinputbtn" type="submit">
                      save
                    </button>
                  </td>
                </tr>

                {filteredData.length <= 0
                  ? td.map((t, index) => (
                      <tr key={index}>
                        {t.data.map((d, innerIndex) => (
                          <td
                            key={innerIndex}
                            className={`${
                              mood === "dark" ? "dark_table" : null
                            }`}
                          >
                            {d.status === "red" ? (
                              <div className="red " />
                            ) : d.status === "yellow" ? (
                              <div className="yellow " />
                            ) : d.status === "green" ? (
                              <div className="green " />
                            ) : (
                              d[Object.keys(d)[0]]
                            )}
                          </td>
                        ))}
                      </tr>
                    ))
                  : filteredData.map((filtered, index) => (
                      <tr key={index}>
                        {filtered.data.map((d, index) => (
                          <td
                            key={index}
                            className={`${
                              mood === "dark" ? "dark_table" : null
                            }`}
                          >
                            {d.status === "red" ? (
                              <div className="red" />
                            ) : d.status === "yellow" ? (
                              <div className="yellow" />
                            ) : d.status === "green" ? (
                              <div className="green" />
                            ) : (
                              d[Object.keys(d)[0]]
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
              </tbody>
            </table>
          </form>
        </>
      )}
    </div>
  );
};

export default TableContainer;
