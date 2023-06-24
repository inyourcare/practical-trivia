"use client";

import React, { useState, useEffect } from "react";
import { Wheel } from "react-custom-roulette";

export type RouletteItem = {
  text: string;
};

const Roulette = ({ data }: { data: RouletteItem[] }) => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [rouletteData, setRouletteData] = useState(data as any);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  useEffect(() => {
    const addShortString = data.map((item) => {
      return {
        completeOption: item.text,
        option:
          item.text.length >= 30
            ? item.text.substring(0, 30).trimEnd() + "..."
            : item.text,
      };
    });
    setRouletteData(addShortString);
  }, [data]);

  return (
    <>
      {/* <div align="center" className="roulette-container"> */}
      <div className="w-full flex justify-center items-center">
        <Wheel
          mustStartSpinning={mustSpin}
          // spinDuration={[0.2]}
          spinDuration={0.2}
          prizeNumber={prizeNumber}
          data={rouletteData}
          outerBorderColor={"#ccc"}
          outerBorderWidth={9}
          innerBorderColor={"#f2f2f2"}
          radiusLineColor={"tranparent"}
          radiusLineWidth={1}
          textColors={["#f5f5f5"]}
          textDistance={55}
          fontSize={10}
          backgroundColors={[
            "#3f297e",
            "#175fa9",
            "#169ed8",
            "#239b63",
            "#64b031",
            "#efe61f",
            "#f7a416",
            "#e6471d",
            "#dc0936",
            "#e5177b",
            "#be1180",
            "#871f7f",
          ]}
          onStopSpinning={() => {
            setMustSpin(false);
          }}
        />
        {/* <button className="button roulette-button" onClick={handleSpinClick}> */}
        {/* <button className="absolute top-1/2 left-1/2 bg-white z-10 -translate-y-1/2 -translate-x-1/2 rounded-full w-20 h-20" onClick={handleSpinClick}> */}
        <button className="absolute w-20 h-20 rounded-full bg-white z-10 " onClick={handleSpinClick}>
          돌리기
        </button>
      </div>
      {/* <br /> */}
      {/* <button
        className="prize-message"
        onClick={handleSpinClick}
        disabled={mustSpin}
      >
        {!mustSpin ? rouletteData[prizeNumber].completeOption : "Кручу..."}
      </button> */}
    </>
  );
};

export default Roulette;
