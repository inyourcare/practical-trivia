import { Dispatch, SetStateAction } from "react";
import DaumPostCode, { useDaumPostcodePopup } from "react-daum-postcode";

// export const DaumPost = () => {
//   const handleComplete = (data: any) => {
//     let fullAddress = data.address;
//     let extraAddress = "";

//     const { addressType, bname, buildingName } = data;
//     if (addressType === "R") {
//       if (bname !== "") {
//         extraAddress += bname;
//       }
//       if (buildingName !== "") {
//         extraAddress += `${extraAddress !== "" && ", "}${buildingName}`;
//       }
//       fullAddress += `${extraAddress !== "" ? ` ${extraAddress}` : ""}`;
//     }
//     //fullAddress -> 전체 주소반환
//   };
//   return <DaumPostCode onComplete={handleComplete} className="post-code" />;
// };

export default function DaumPostPopupOpenBtn({
  setAddress,
}: {
  setAddress: Dispatch<SetStateAction<string>>;
}) {
  // const open = useDaumPostcodePopup(scriptUrl);
  const open = useDaumPostcodePopup(
    "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
  );

  const handleComplete = (data: any) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    // console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
    setAddress(fullAddress)
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  return (
    // <button type='button' onClick={handleClick}>
    //   주소찾기
    // </button>
    <button
      type="button"
      className="rounded-md text-white bg-indigo-600 p-2"
      onClick={handleClick}
    >
      <p className="text-xs font-bold">주소찾기</p>
    </button>
  );
}
