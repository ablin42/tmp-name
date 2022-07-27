import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { ethers } from "hardhat";

import type { Signers } from "../types";
import { shouldBehaveLikeExercise } from "./exercise.behavior";
import { deployExerciseFixture } from "./exercise.fixture";

describe("Unit tests", function () {
  before(async function () {
    this.signers = {} as Signers;

    const signers: SignerWithAddress[] = await ethers.getSigners();
    this.signers.admin = signers[0];

    this.loadFixture = loadFixture;
  });

  describe("Greeter", function () {
    beforeEach(async function () {
      const { exercise } = await this.loadFixture(deployExerciseFixture);
      this.exercise = exercise;
    });

    shouldBehaveLikeExercise();
  });
});
