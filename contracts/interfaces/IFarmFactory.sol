// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

interface IFindexFarm {
    event Energy(uint256 power, uint256 energy, uint256 totalEnergy);

    function eatFood() external;

    function drinkWater() external;

    function burnCalorie() external;
}
