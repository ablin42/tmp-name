import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { ethers } from "hardhat";

import type { ArrayExercise } from "../../src/types/Exercise.sol/ArrayExercise";
import type { ArrayExercise__factory } from "../../src/types/factories/Exercise.sol/ArrayExercise__factory";

export async function deployExerciseFixture(): Promise<{ exercise: ArrayExercise }> {
  const signers: SignerWithAddress[] = await ethers.getSigners();
  const admin: SignerWithAddress = signers[0];

  const exerciseFactory: ArrayExercise__factory = <ArrayExercise__factory>(
    (<unknown>await ethers.getContractFactory("ArrayExercise"))
  );
  const exercise: ArrayExercise = <ArrayExercise>await exerciseFactory.connect(admin).deploy();
  await exercise.deployed();

  return { exercise };
}
