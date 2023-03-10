import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import back from "../../assets/icons/back.svg";
import axios from "axios";
import swal from "sweetalert";
import AuthContext from "../../contexts/AuthContext";

function PostJobs() {
  const [inPerson, setInPerson] = useState(false);
  const [workOnline, setWorkOnline] = useState(false);
  const [jobLocation, setJobLocation] = useState("");
  const [jobDate, setJobDate] = useState("");
  const [jobTime, setJobTime] = useState("");
  const [survey, setSurvey] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [taskerNumber, setTaskerNumber] = useState();
  const [budget, setBudget] = useState();
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleImageUpload = async (e) => {
    // this function will be called when the user upload an image
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    // this function will be called when the user click on the submit button
    e.preventDefault();
    const data = {
      customerId: user._id,
      job: jobTitle,
      description: jobDescription,
      image: [image],
      executionType: inPerson ? "inPerson" : "online",
      location: jobLocation,
      executionDate: jobDate,
      executionTime: jobTime,
      taskerPresence: inPerson ? "inPerson" : "online",
      taskerNumber: taskerNumber,
      budget: budget,
      survey: survey,
    };
    console.log(data);
    // this is the axios call to the backend to post the job to the database
    await axios
      .post(
        `https://easy-task-app.herokuapp.com/api/customer/createpost`,
        JSON.stringify(data)
      )
      .then((response) => {
        console.log(response);
      }); // this will take the user to the dashboard page after the job has been posted
    swal("post job successfully");
    navigate("/dashboard");
  };

  return (
    <div className="container w-screen">
      <div className="h-12 shadow flex items-center py-8 px-5 text-xl font-bold cursor-pointer">
        <img
          src={back}
          alt="back"
          className="h-5"
          onClick={() => {
            // this will take the user back to the previous page when the user click on the back button
            navigate(-1);
          }}
        />
        <h1>{`Post a job`}</h1>
      </div>
      <div className="px-4 py-8">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="text-soft-dark text-sm font-bold">
              What job do you need done
            </label>
            <input
              type="text"
              className="min-w-full h-11 border rounded-xl p-3 mt-3 border-stroke"
              placeholder="e.g I need someone to clean my room"
              onChange={(e) => {
                setJobTitle(e.target.value);
              }}
            />
          </div>
          <label className="text-soft-dark text-sm font-bold">
            Describe your Job in details
          </label>
          <textarea
            type="text"
            className="min-w-full h-18 border rounded-xl p-3 mt-3 border-stroke"
            placeholder="e.g my room is really dirty and i need something to clean it"
            onChange={(e) => {
              setJobDescription(e.target.value);
            }}
          />
          {/* image upload from device */}
          <div className="flex flex-row gap-5 mt-5">
            <div className="flex flex-col gap-2">
              {/* <label className="text-soft-dark text-sm font-bold">
                Upload an image
              </label> */}
              {image ? ( // this will show the image that the user upload
                <img // this is the image that the user upload
                  src={image}
                  alt="uploaded task"
                  className="h-20 w-20 rounded-xl"
                />
              ) : (
                <div className="h-20 w-30 rounded-xl border border-soft-dark flex flex-col items-center justify-center">
                  <p className="text-soft-dark">Upload</p>
                </div>
              )}
              <input
                type="file"
                onChange={(e) => {
                  handleImageUpload(e);
                }} // this function will be called when the user upload an image
              />
            </div>
          </div>
          {/* customized check box with label Where would you want this job to be done. and each check box contain a text and icon in it */}
          <div className="flex flex-col gap-5 mt-5">
            <label className="text-soft-dark text-sm font-bold">
              Where would you want this job to be done.
            </label>
            <div className="flex flex-row gap-5">
              <div
                className={`border rounded-xl grid place-items-center cursor-pointer p-3 ${
                  inPerson
                    ? "border-primary-100 text-light-line bg-primary-100"
                    : "border-soft-dark bg-basic-white text-soft-dark"
                }`}
                onClick={() => {
                  setInPerson((prevState) => !prevState);
                }}
              >
                In Person
              </div>
              <div
                className={`border grid place-items-center cursor-pointer p-3 rounded-xl ${
                  workOnline
                    ? "border-primary-100 text-light-line bg-primary-100"
                    : "border-soft-dark bg-basic-white text-soft-dark"
                }`}
                onClick={() => {
                  setWorkOnline((prevState) => !prevState);
                }}
              >
                Work Online
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-soft-dark text-sm font-bold">
                Job Location
              </label>
              <input
                type="text"
                className="min-w-full h-11 border rounded-xl p-3 mt-2 border-stroke"
                placeholder="e.g 1234, 5th Avenue, New York, NY 10001"
                onChange={(e) => {
                  setJobLocation(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-soft-dark text-sm font-bold">
                When do you need this job done
              </label>
              <input
                type="date"
                className="min-w-full h-11 border rounded-xl p-3 mt-2 border-stroke"
                onChange={(e) => {
                  setJobDate(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-soft-dark text-sm font-bold">
                {" "}
                What time do you need this job done
              </label>
              <input
                type="time"
                className="min-w-full h-11 border rounded-xl p-3 mt-2 border-stroke"
                onChange={(e) => {
                  setJobTime(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="flex flex-col gap-3 mt-5">
            <label className="text-soft-dark text-sm font-bold">
              Do you want the Tasker to come over to survey the job?
            </label>
            <div className="flex flex-row gap-5">
              <div
                className={`border grid place-items-center cursor-pointer p-3 rounded-xl ${
                  survey === "Yes"
                    ? "border-primary-100 bg-primary-100 text-basic-white "
                    : "border-soft-dark bg-basic-white text-soft-dark"
                }"}}`}
                onClick={() => {
                  setSurvey("Yes");
                }}
              >
                Yes
              </div>
              <div
                className={`border grid place-items-center cursor-pointer p-3 rounded-xl ${
                  survey === "No"
                    ? "border-primary-100 bg-primary-100 text-basic-white "
                    : "border-soft-dark bg-basic-white text-soft-dark"
                }"}}`}
                onClick={() => {
                  setSurvey("No");
                }}
              >
                No
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-soft-dark text-sm font-bold">
                How many Taskers do you want to make offer for the job?
              </label>
              <input
                type="number"
                className="min-w-full h-11 border rounded-xl p-3 mt-2 border-stroke"
                placeholder="e.g 1"
                onChange={(e) => {
                  setTaskerNumber(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-soft-dark text-sm font-bold">
                Whats your budget?
              </label>
              <input
                type="number"
                className="min-w-full h-11 border rounded-xl p-3 mt-2 border-stroke"
                placeholder="e.g ₦100"
                onChange={(e) => {
                  setBudget(e.target.value);
                }}
              />
              {budget < 500 ? (
                <p className=" text-danger">
                  Please note that the list amount for a job on Easytask is
                  N500.
                </p>
              ) : null}
            </div>
          </div>
          {/* post a job button */}
          <button
            className="bg-primary-100 text-basic-white h-11 rounded-xl mt-5 w-full"
            type="submit"
          >
            Post a job
          </button>
        </form>
      </div>
    </div>
  );
}

export default PostJobs;
