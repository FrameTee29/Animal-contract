// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "./interfaces/IAnimal.sol";

contract Animal is IAnimal {
    string public name;
    uint256 public energy;

    // Activities
    uint256 nothing = 0;
    uint256 walk = 1;
    uint256 run = 2; // run or fly

    // struct KindOfFood {
    //     uint256 energy;
    //     string name;
    // }

    // mapping(uint256 => KindOfFood) allOfFood;

    constructor(string memory name_) {
        name = name_;
        energy = 100 ether;
    }

    function eatFood() external override {
        energy += 100 ether;
    }

    function drinkWater() external override {
        energy += 10 ether;
    }

    function doActivity(uint256 acitivity) external override {
        uint256 burnCalorie;
        if (acitivity == nothing) {
            burnCalorie = 0 ether;
        } else if (acitivity == walk) {
            burnCalorie = 5 ether;
        } else if (acitivity == run) {
            burnCalorie = 10 ether;
        }
        require(energy >= burnCalorie, "Not enough energy");
        energy -= burnCalorie;
    }

    function _chooseToEat() private returns (uint256 calorie) {}
}
