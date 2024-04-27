import React from "react";
import StakedAmount from "./StakedAmount";
import RewardRate from "./RewardRate";
import EarnedReward from "./EarnedReward";

const DisplayPanel = () => {
  return (
    <div className="mt-20">
      <div className="flex justify-around">
        <div className="text-4xl font-bold">
          <h1>Connected Account</h1>
        </div>

        <div className="">
          <h2 className="text-4xl font-bold">Connected Account</h2>
          <p className="text-center mt-3 text-2xl">Unsupported</p>
        </div>
      </div>

      <div className="flex justify-around">
        <StakedAmount />
        <RewardRate />
        <EarnedReward />
      </div>
    </div>
  );
};

export default DisplayPanel;
