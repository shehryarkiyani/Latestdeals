import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";
import React, { useState,useEffect } from "react";
import Modal from 'react-modal';
import { FormattedMessage } from "react-intl";
const DotsDropdown = ({ deal,Save,reportOffer,openReportModal,setOpenReportModal }) => {
  const [showOptions, setShowOptions] = useState(false);

  const [selectedValue, setSelectedValue] = useState(null);
  const[reportdata,setreportdata]=useState(
    {
      title:"",
    explanation:"",
    }
  )
  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };
  useEffect(()=>{
    if(selectedValue=="1"){
      setreportdata({
        title:"It's more expensive / It's unavailable / It doesn't work",
        explanation:"The deal is selling for a higher price than listed on Latest Deals, it's out of stock or the offer isn't working.",
      })
    }else if(selectedValue=="2"){
      setreportdata({
        title:"The deal is missing key information",
        explanation:"The deal's title isn't clear, the image is missing/unrelated or there's no price.",
      })
    }else if(selectedValue=="3"){
      setreportdata({
        title:"The deal already exists",
        explanation:"The deal has already been shared on Latest Deals in the last 30 days (i.e. it's a duplicate).",
      })
    }else if(selectedValue=="4"){
      setreportdata({
        title:"It's inappropriate",
        explanation:"The deal contains content that a reasonable person would consider offensive, abusive or against our",
      })
    }else if(selectedValue=="5"){
      setreportdata({
        title:"It's spam",
        explanation:"The deal is spam, irrelevant or looks like self-promotion.",
      })
    }else{
      setreportdata({
        title:"Something else",
        explanation:"The deal needs to be reviewed for another reason not listed above.",
      })
    }
  },[selectedValue])
 
  function closeModal() {
    setOpenReportModal(false)
  }
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width:"50%",
      height:"500px",
      overflowY:"auto",
      position:"relative"
    },
  };
  return (
    <div className="relative cursor-pointer">
      <EllipsisHorizontalIcon
        className="h-6 w-6 text-gray-500"
        onClick={() => setShowOptions(!showOptions)}
      /> 
       <Modal
        isOpen={openReportModal}
      
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal" 
      >

<i className="absolute right-2 cursor-pointer" onClick={()=>setOpenReportModal(false)}>X</i>     <h2 className="text-lg font-semibold "><FormattedMessage id="Thanksfor"/></h2>
       <p><FormattedMessage id="RewardMember"/> </p>
       <h2 className="text-md font-semibold "><FormattedMessage id="Sendreport"/></h2>
        <div className="flex gap-2 mt-3 ">
          <input type="radio" name="report" value="1" className="h-[26px]" onChange={handleRadioChange}/>
          <div className="flex flex-col gap-2">
          <h2 className="text-md font-semibold "><FormattedMessage id="moreexpensive"/></h2>
          <p><FormattedMessage id="dealIsSelling"/></p>
          </div>
        </div>
        <div className="flex gap-2 mt-3 ">
          <input type="radio" name="report" value="2" className="h-[26px]" onChange={handleRadioChange}/>
          <div className="flex flex-col gap-2">
          <h2 className="text-md font-semibold "><FormattedMessage id="dealIsMissing"/></h2>
          <p><FormattedMessage id="dealstitle"/></p>
          </div>
        </div>
        <div className="flex gap-2 mt-3 ">
          <input type="radio" name="report" value="3" className="h-[26px]" onChange={handleRadioChange}/>
          <div className="flex flex-col gap-2">
          <h2 className="text-md font-semibold "><FormattedMessage id="dealalready"/></h2>
          <p><FormattedMessage id="dealhas"/></p>
          </div>
        </div>
        <div className="flex gap-2 mt-3 ">
          <input type="radio" name="report" value="4" className="h-[26px]" onChange={handleRadioChange}/>
          <div className="flex flex-col gap-2">
          <h2 className="text-md font-semibold "><FormattedMessage id="inappropriate"/></h2>
          <p><FormattedMessage id="dealContains"/></p>
          </div>
        </div>
        <div className="flex gap-2 mt-3 ">
          <input type="radio" name="report" value="5" className="h-[26px]" onChange={handleRadioChange}/>
          <div className="flex flex-col gap-2">
          <h2 className="text-md font-semibold"><FormattedMessage id="ItsSpam"/></h2>
          <p><FormattedMessage id="ThedealIs"/></p>
          </div>
        </div>
        <div className="flex gap-2 mt-3 ">
          <input type="radio" name="report" value="6" className="h-[26px]" onChange={handleRadioChange} />
          <div className="flex flex-col gap-2">
          <h2 className="text-md font-semibold "><FormattedMessage id="Somethingelse"/></h2>
          <p><FormattedMessage id="Thedealneeds"/></p>
          </div>
        </div> 
        <button onClick={()=>{reportOffer(reportdata);setOpenReportModal(false)}} className="bg-[#5A0064] mt-3 text-white p-2 pl-3 pr-3 flex justify-center align-middle rounded-md">
        <FormattedMessage id="ReportDeal"/>
        </button>
      </Modal>
      {showOptions ? (
        <div className="shadow-xl absolute top-8 cursor-pointer right-0 bg-white w-32 rounded-lg p-2 flex flex-col gap-y-2">
          <button
            className="flex items-center space-x-2 w-full hover:bg-gray-100"
            onClick={() => Save()}
          >
            <p className="text-sm"><FormattedMessage id="SaveDeal"/></p>
          </button>
          <button
            className="flex items-center space-x-2 w-full hover:bg-gray-100"
            onClick={() => setOpenReportModal(true)}
          >
            <p className="text-sm"><FormattedMessage id="ReportDeal"/></p>
          </button>
          <button
            className="flex items-center space-x-2 w-full hover:bg-gray-100"
          >
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default DotsDropdown;
