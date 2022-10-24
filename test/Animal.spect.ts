import { expect } from "chai";
import { ethers } from "hardhat";
import { parseEther, formatUnits } from "ethers/lib/utils";

import { Animal } from "../typechain-types";

describe("Animal", function () {
  let animal: Animal;
  before(async () => {
    const Animal = await ethers.getContractFactory("Animal");
    animal = await Animal.deploy("cat1");
  });

  const getEnergy = async () => {
    return await animal.energy();
  };

  describe("Animal Contract ", async () => {
    it("Default status : Energy", async () => {
      const energy = await getEnergy();
      await expect(energy.toString()).to.equal(parseEther("100"));
    });

    it("Eat food", async () => {
      await animal.eatFood(); // increase energy 100
      const energy = await getEnergy();
      await expect(energy.toString()).to.equal(parseEther("200"));
    });

    it("Drink water", async () => {
      await animal.drinkWater(); // increase energy 10
      const energy = await getEnergy();
      await expect(energy.toString()).to.equal(parseEther("210"));
    });

    it("Do activity : nothing", async () => {
      await animal.doActivity(0); // nothing
      const energy = await getEnergy();
      await expect(energy.toString()).to.equal(parseEther("210"));
    });

    it("Do activity : walk", async () => {
      await animal.doActivity(1); // walk
      const energy = await getEnergy();
      await expect(energy.toString()).to.equal(parseEther("205"));
    });

    it("Do activity : run", async () => {
      await animal.doActivity(2); // run
      const energy = await getEnergy();
      await expect(energy.toString()).to.equal(parseEther("195"));
    });
  });
});
