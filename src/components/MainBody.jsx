import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "../assets/css/mainbody.css";
import overspeed from "../assets/images/overspeed.png";
import Licenseplate from "../assets/images/licensePlate.png";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import car from "../assets/images/car.jpg";
import car2 from "../assets/images/car3.png";
function MainBody() {
  return (
    <div className="outerdiv">
      <Header />
      <div style={{ display: "flex" }}>
        <div style={{ width: "8%" }}>
          <Sidebar />
        </div>
        <div className="mainContainer" style={{ width: "90%" }}>
          {/* top heading div */}
          <div className="topheading">
            <div className="tophead">
              <div className="txt">Live Monitoring</div>
            </div>
            <div className="checkbtn">
              <div className="chckip">
                <input type="checkbox" /> &nbsp;Stay logged in
              </div>
            </div>
          </div>
          {/* middle content div */}
          <div className="lowercontent">
            <div className="leftcontent">
              <div>
                {/* <img src={car2} style={{ width: "100%" }} /> */}
                <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={car2}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={car2}
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={car2}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
              <div>
                <div style={{ marginLeft: 4 }}>Transaction Details</div>
                <div className="centerinfo">
                  <div className="detailsdiv">
                    <div className="maininfo">
                      <div className="leftmaininfo">Date/Time</div>
                      <div className="rightmaininfo">2021-10-20 12:15:22</div>
                    </div>
                    <div className="maininfo">
                      <div className="leftmaininfo">Location</div>
                      <div className="rightmaininfo">Sec25 Overbridge</div>
                    </div>
                    <div className="maininfo">
                      <div className="leftmaininfo">Lane</div>
                      <div className="rightmaininfo">
                        Sec25 Overbridge Towards Sec61 L1
                      </div>
                    </div>
                    <div className="maininfo">
                      <div className="leftmaininfo">Transaction ID</div>
                      <div className="rightmaininfo">
                        POBC131-20211102010842
                      </div>
                    </div>
                    <div className="maininfo">
                      <div className="leftmaininfo">Violation</div>
                      <div className="rightmaininfo">Speed Violation</div>
                    </div>
                    <div className="violationdiv">
                      <div className="leftmaininfo">Details</div>
                      <div className="rightmaininfo">
                        <span className="spanv">Speed Violation : 73 kmph</span>
                        <br /> Speed Limit : 70 kmph
                      </div>
                      <div className="">
                        <img src={overspeed} alt="speed logo" />
                      </div>
                    </div>
                  </div>

                  <div className="licenseplatediv">
                    <div>
                      <div>License Plate</div>
                      <div className="platediv">
                        <img src={Licenseplate} alt="License Plate" />
                      </div>
                    </div>
                    <div className="platecont">
                      <div>Registration Number</div>
                      <div className="platediv">
                        <div className="pntxt">UP13BT7068</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rightcontent">
              <div className="uprheading">
                <div className="selectdiv">
                  <select name="cars" id="cars" className="selecttag">
                    <option value="volvo">Select Location</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                  </select>
                </div>
                <div className="cameradiv">
                  <div>Camera Selected : 1</div>
                </div>
              </div>
              <div>
                <div>
                  <table>
                    <thead>
                      <tr>
                        <th scope="col">S.No</th>
                        <th scope="col">Registration Number</th>
                        <th scope="col">License Plate</th>
                        <th scope="col">Tme Stamp </th>
                        <th scope="col">Violation </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td data-label="Account">1</td>

                        <td data-label="Due Date">
                          <a href="" style={{ color: "blue" }}>
                            UP13BT7068
                          </a>
                        </td>

                        <td data-label="Amount">
                          <img src={Licenseplate} style={{ width: "100%" }} />
                        </td>
                        <td data-label="Period">2021-10-20 12:15:22</td>
                        <td data-label="Period"></td>
                      </tr>
                      <tr>
                        <td data-label="Account">2</td>

                        <td data-label="Due Date">
                          <a href="" style={{ color: "blue" }}>
                            UP13BT7068
                          </a>
                        </td>

                        <td data-label="Amount">
                          <img src={Licenseplate} style={{ width: "100%" }} />
                        </td>
                        <td data-label="Period">2021-10-20 12:15:22</td>
                        <td data-label="Period">
                          <img src={overspeed} alt="msg" />
                        </td>
                      </tr>
                      <tr>
                        <td data-label="Account">3</td>

                        <td data-label="Due Date">
                          <a href="" style={{ color: "blue" }}>
                            UP13BT7068
                          </a>
                        </td>

                        <td data-label="Amount">
                          <img src={Licenseplate} style={{ width: "100%" }} />
                        </td>
                        <td data-label="Period">2021-10-20 12:15:22</td>
                        <td data-label="Period"></td>
                      </tr>
                      <tr>
                        <td data-label="Account">4</td>

                        <td data-label="Due Date">
                          <a href="" style={{ color: "blue" }}>
                            UP13BT7068
                          </a>
                        </td>

                        <td data-label="Amount">
                          <img src={Licenseplate} style={{ width: "100%" }} />
                        </td>
                        <td data-label="Period">2021-10-20 12:15:22</td>
                        <td data-label="Period"></td>
                      </tr>
                      <tr>
                        <td data-label="Account">5</td>

                        <td data-label="Due Date">
                          <a href="" style={{ color: "blue" }}>
                            UP13BT7068
                          </a>
                        </td>

                        <td data-label="Amount">
                          <img src={Licenseplate} style={{ width: "100%" }} />
                        </td>
                        <td data-label="Period">2021-10-20 12:15:22</td>
                        <td data-label="Period"></td>
                      </tr>
                      <tr>
                        <td data-label="Account">6</td>

                        <td data-label="Due Date">
                          <a href="" style={{ color: "blue" }}>
                            UP13BT7068
                          </a>
                        </td>

                        <td data-label="Amount">
                          <img src={Licenseplate} style={{ width: "100%" }} />
                        </td>
                        <td data-label="Period">2021-10-20 12:15:22</td>
                        <td data-label="Period"></td>
                      </tr>
                      <tr>
                        <td data-label="Account">7</td>

                        <td data-label="Due Date">
                          <a href="" style={{ color: "blue" }}>
                            UP13BT7068
                          </a>
                        </td>

                        <td data-label="Amount">
                          <img src={Licenseplate} style={{ width: "100%" }} />
                        </td>
                        <td data-label="Period">2021-10-20 12:15:22</td>
                        <td data-label="Period"></td>
                      </tr>
                      <tr>
                        <td data-label="Account">8 </td>

                        <td data-label="Due Date">
                          <a href="" style={{ color: "blue" }}>
                            UP13BT7068
                          </a>
                        </td>

                        <td data-label="Amount">
                          <img src={Licenseplate} style={{ width: "100%" }} />
                        </td>
                        <td data-label="Period">2021-10-20 12:15:22</td>
                        <td data-label="Period"></td>
                      </tr>
                      <tr>
                        <td data-label="Account">9</td>

                        <td data-label="Due Date">
                          <a href="" style={{ color: "blue" }}>
                            UP13BT7068
                          </a>
                        </td>

                        <td data-label="Amount">
                          <img src={Licenseplate} style={{ width: "100%" }} />
                        </td>
                        <td data-label="Period">2021-10-20 12:15:22</td>
                        <td data-label="Period"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {/* paginations  */}
              {/* <div >
                <ul id="pagination">
                  <li>
                    <a class="" href="#">
                      «
                    </a>
                  </li>
                  <li>
                    <a href="#">1</a>
                  </li>
                  <li>
                    <a href="#" class="active">
                      2
                    </a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">4</a>
                  </li>
                  <li>
                    <a href="#">5</a>
                  </li>
                  <li>
                    <a href="#">6</a>
                  </li>
                  <li>
                    <a href="#">7</a>
                  </li>
                  <li>
                    <a href="#">»</a>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainBody;
