import React from 'react'
import photo12 from "../Assets/Vector (11).png";
import photo22 from "../Assets/Vector (12).png";
import avatar from "../Assets/Vector (13).png";
import dots from "../Assets/Group 173.png";
import laptop from "../Assets/images 1.png";
import { Avatar } from "@mui/material";
function Notification() {
  return (
    <div>
      <div className=" pt-5 pb-4 back_mainsss">
<div className="container">
     {/*first section user */}
<div className="card mt-5 ">
        <div className="card-body px-4">
          <div className="row">
            <div className="col-4 d-flex float-end">
              <Avatar src={avatar} />
              <div className="ms-3 text-start">
                <h6>Owner Name</h6>
                <p className="text_size">@ownerName</p>
              </div>
            </div>
            <div className="col-8 text-end">
              <img src={dots} alt="" />
            </div>

            <div className=" text-start">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>

          </div>
        </div>

      {/* second card user */}
      <div className="card mt-3">
        <div className="card-body px-4">
          <div className="row">
            <div className="col-4 d-flex float-end">
              <Avatar src={avatar} />
              <div className="ms-3 text-start">
                <h6>Owner Name</h6>
                <p className="text_size">@ownerName</p>
              </div>
            </div>
            <div className="col-8 text-end">
              <img src={dots} alt="" />
            </div>

            <div className=" text-start">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-8 m-auto">
              <img src={laptop} className="bodder_img" width="100%" alt="" />
            </div>
          </div>
        </div>
      </div>

{/* third section user */}
<div className="card mt-3">
        <div className="card-body px-4">
          <div className="row">
            <div className="col-4 d-flex float-end">
              <Avatar src={avatar} />
              <div className="ms-3 text-start">
                <h6>Owner Name</h6>
                <p className="text_size">@ownerName</p>
              </div>
            </div>
            <div className="col-8 text-end">
              <img src={dots} alt="" />
            </div>

            <div className=" text-start">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>

        
      </div>
      </div>


{/* forth section user */}
<div className="card mt-3 mb-4">
        <div className="card-body px-4">
          <div className="row">
            <div className="col-4 d-flex float-end">
              <Avatar src={avatar} />
              <div className="ms-3 text-start">
                <h6>Owner Name</h6>
                <p className="text_size">@ownerName</p>
              </div>
            </div>
            <div className="col-8 text-end">
              <img src={dots} alt="" />
            </div>

            <div className=" text-start">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>

          </div>
        </div>
      </div>
        </div>
    </div>
  )
}

export default Notification
